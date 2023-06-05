import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSongs } from 'redux/slice/songs';
import { useQuery } from '@apollo/client';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import AddSong from 'components/addSong/addSong';

import Song from 'models/interface/song';

import GET_SONGS from 'queries/query/songs';
import useStyles from './songsTableStyles';
import GenericTable from 'components/genericTable/genericTable';


const SongsTable: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const songs = useAppSelector((state) => state.songs.songs);

	useQuery(GET_SONGS, {
		onCompleted: (data) => {
			const songsData = (data.allSongs.nodes as any[]).map<Song>((songDB) =>
			({
				id: songDB.id,
				name: songDB.name,
				duration: songDB.duration,
				artist: songDB.artistByArtistId.name,
			}));
			dispatch(setSongs(songsData));
		},
	});

	return (
		<div className={classes.fieldContainer}>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>רשימת השירים</Typography>
			</div>
			<GenericTable songs={songs} />
			<div className={classes.addSongBtnContainer}>
				<AddSong />
			</div>
		</div>
	);
};

export default SongsTable;
