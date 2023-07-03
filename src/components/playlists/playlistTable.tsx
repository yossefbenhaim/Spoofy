import { IconButton, Typography } from "@mui/material";
import GenericTable from "common/genericTable/genericTable";
import React, { useMemo } from "react";
import useStyles from './playlistsTableStyles';
import { useAppSelector } from 'redux/store';
import EditIcon from '@mui/icons-material/Edit';
import Playlist from "models/interface/playlist";
import isEqual from "lodash/isEqual";

interface Props {
	handleClickOpen: (playlistId: Playlist | undefined) => void;
	playlists: Playlist[];
}

const PlaylistTable: React.FC<Props> = React.memo((props) => {
	const { handleClickOpen, playlists } = props;
	const { classes } = useStyles();
	const test: Playlist | undefined = { id: '1', creatorId: '1', name: 'tets', songs: ['asa', 'sd'] }
	return (
		<>
			{playlists.map((playlist) => (
				<div key={playlist.id} className={classes.container}>
					<div className={classes.headerTable}>
						<IconButton className={classes.editBtn}
							onClick={() =>
								handleClickOpen(playlist)
							}>
							<EditIcon />
						</IconButton>
						<Typography className={classes.namePlaylist}>{playlist.name}</Typography>
					</div>
					<div className={classes.playlistTable}>
						<GenericTable tableId={playlist.id} genericSongs={playlist.songs.map((song) => song)} />
					</div>
				</div>
			))}
		</>
	);
}, (prevProps, nextProps) => isEqual(prevProps.playlists, nextProps.playlists));

export default PlaylistTable;
