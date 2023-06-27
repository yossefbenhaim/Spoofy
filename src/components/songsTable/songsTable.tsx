import React from 'react';

import { useDispatch } from 'react-redux';
import { setSongs } from 'redux/slice/songs';
import { useQuery } from '@apollo/client';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import useStyles from './songsTableStyles';
import AddSong from 'components/addSong/addSong';
import TablesIds from 'models/emuns/tablesIds';
import Song from 'models/interface/song';

import GET_SONGS from 'queries/query/songs';
import GenericTable from 'common/genericTable/genericTable';

const SongsTable: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const songs = useAppSelector((state) => state.songs.songs);

	useQuery(GET_SONGS, {
		fetchPolicy: "network-only",
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
			<GenericTable tableId={TablesIds.songsIds} genericSongs={songs} />
			<div className={classes.addSongBtnContainer}>
				<AddSong />
			</div>
		</div>
	);
};

export default SongsTable;
