import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import useStyles from './profileStyles';

import { useMemo } from 'react';
import { useAppSelector } from 'redux/store';
import { CurrentProfile } from '@models/interface/currentProfile';

interface Props {
	openProfileDialog: boolean;
	setOpenProfileDialog: (value: boolean) => void;
}

const Profile: React.FC<Props> = (props) => {
	const { setOpenProfileDialog, openProfileDialog } = props;
	const { classes } = useStyles()
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const playlists = useAppSelector((state) => state.playlists.playlists);

	const handleClose = () => {
		setOpenProfileDialog(false);
	};

	const findPlylistsUserById = (userId: string | undefined): string[] => {
		console.log('get in');
		const filterPlaylists = playlists.filter((song) => song.creatorId === userId)
		const playlistsName = filterPlaylists.length === 0 ? ['no have songs for this user'] : filterPlaylists.map(playlist => playlist.name + ' ')
		return playlistsName
	}

	const currentProfile = useMemo((): CurrentProfile => {
		const userDetel: CurrentProfile = {
			fullName: currentUser?.firstName + ' ' + currentUser?.lastName,
			location: currentUser?.address as string,
			playlistName: findPlylistsUserById(currentUser?.id)
		}
		return userDetel
	}, [currentUser, playlists]);

	return (
		<Dialog
			className={classes.dialogContainer}
			onClose={handleClose}
			open={openProfileDialog}>
			<div className={classes.titelNameContainer}>
				<Typography className={classes.titleName}>{currentProfile.fullName}</Typography>
			</div>
			<div className={classes.contentProfileContainer}>
				<div className={classes.fieldsContainer}>
					<span className={classes.title}>פלייליסטים </span>
					<Typography className={classes.contentText}>{currentProfile.playlistName}</Typography>
				</div>
				<div className={classes.fieldsContainer}>
					<span className={classes.title}>מקום מגורים </span>
					<Typography className={classes.contentText}>{currentProfile.location}</Typography>
				</div>
			</div>
		</Dialog>
	)
}

export default Profile