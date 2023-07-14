import React from "react";

import { IconButton, Typography } from "@mui/material";
import CustomSongsTable from "common/customSongsTable/customSongsTable";
import useStyles from './playlistsTableStyles';
import EditIcon from '@mui/icons-material/Edit';
import Playlist from "models/interface/playlist";
import isEqual from "lodash/isEqual";
import { useAppSelector } from "redux/store";
import User from "models/interface/user";

interface Props {
	handleClickOpen: (playlistId: Playlist | undefined) => void;
	playlist: Playlist;
}
const PlaylistTable: React.FC<Props> = (props) => {
	const { handleClickOpen, playlist } = props;
	const { classes } = useStyles();
	const users = useAppSelector((state) => state.users.users);

	const findCreatorName = (creator: string) => {
		const creatorName = users.find((user: User) => user.id === creator)!
		return (creatorName.firstName + " " + creatorName.lastName)
	}

	return (
		<div key={playlist.id} className={classes.container}>
			<div className={classes.headerTable}>
				<IconButton className={classes.editBtn}
					onClick={() =>
						handleClickOpen(playlist)
					}>
					<EditIcon />
				</IconButton>
				<div className={classes.namePlaylistContainer}>
					<Typography className={classes.namePlaylist}>{playlist.name}</Typography>
					<Typography className={classes.nameCreator}>{findCreatorName(playlist.creatorId)}</Typography>
				</div>
			</div>
			<div className={classes.playlistTable}>

				<CustomSongsTable tableId={playlist.id} tableSongs={playlist.songs.map((song) => song)} />
			</div>
		</div>
	)
}

export default React.memo(PlaylistTable, (prevProps, nextProps) => {
	return isEqual(prevProps.playlist, nextProps.playlist);
}
);
