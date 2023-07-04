import React, { useState } from 'react';

import { useAppSelector } from 'redux/store';
import { Typography, Button } from '@mui/material';

import useStyles from './playlistsTableStyles';
import GenericDialogCreateOrUpdate from 'common/genericDialogCreateOrUpdate/genericDialogCreateOrUpdate';
import Playlist from 'models/interface/playlist';
import PlaylistsTables from './playlistsTables';

enum VariablesDialogAddPlaylist {
	create = 'צור פלייליסט',
	update = 'עדכן פלייליסט',
}

const Playlists: React.FC = () => {
	const { classes } = useStyles();
	const [openDialogAddPlaylist, setOpenDialogAddPlaylist] = useState<boolean>(false);
	const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | undefined>();
	const playlists = useAppSelector((state) => state.playlist.playlists);

	const handleClickOpen = (newCurrentPlaylist: Playlist | undefined) => {

		if (newCurrentPlaylist !== undefined) {
			setCurrentPlaylist(newCurrentPlaylist)
		} else {
			setCurrentPlaylist(undefined)
		}
		setOpenDialogAddPlaylist(true);
	}


	const handleClose = () => setOpenDialogAddPlaylist(false);

	return (
		<>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>פלייליסטים</Typography>
			</div>
			<div className={classes.fieldsContainer}>
				<PlaylistsTables playlists={playlists} handleClickOpen={handleClickOpen} />
			</div>
			<div className={classes.addSongBtnContainer}>
				<Button
					variant="contained"
					className={classes.addSongBtn}
					onClick={() => { handleClickOpen(undefined) }}
				>
					+ צור פלייליסט חדש
				</Button>
			</div>
			<GenericDialogCreateOrUpdate
				openDialogAddPlaylist={openDialogAddPlaylist}
				handleClose={handleClose}
				currentPlaylist={currentPlaylist}
			/>
		</>
	)
}

export default Playlists;
