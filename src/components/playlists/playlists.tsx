import React, { useEffect, useMemo, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from 'redux/store';
import { Typography, IconButton, Button } from '@mui/material';

import useStyles from './playlistsTableStyles';
import GenericTable from 'common/genericTable/genericTable';
import GenericDialogCreateOrUpdate from 'common/genericDialogCreateOrUpdate/genericDialogCreateOrUpdate';
import { setCurrentTableId } from 'redux/slice/currentPlaylist';
import SongsId from 'models/interface/songId';
import Song from 'models/interface/song';
import Playlist from 'models/interface/playlist';
import { useDispatch } from 'react-redux';
import PlaylistTable from './playlistTable';
import playlists from 'redux/slice/playlists';

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

	console.log('current', currentPlaylist);

	const handleClose = () => setOpenDialogAddPlaylist(false);

	return (
		<>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>פלייליסטים</Typography>
			</div>
			<div className={classes.fieldsContainer}>
				<PlaylistTable playlists={playlists} handleClickOpen={handleClickOpen} />
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
