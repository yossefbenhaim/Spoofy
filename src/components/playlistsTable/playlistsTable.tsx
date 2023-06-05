import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPlaylists } from 'redux/slice/Playlists';
import { useQuery } from '@apollo/client';
import { useAppSelector } from 'redux/store';

import useStyles from './playlistsTableStyles';
import GenericTable from 'components/genericTable/genericTable';

import Song from 'models/interface/song';
import Playlist from 'models/interface/Playlist';
import GET_PLAYLIST from 'queries/query/playlists';
import SongsId from 'models/interface/songId';

const PlaylistsTable: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const playlists = useAppSelector((state) => state.playlist.playlist);
	const songs = useAppSelector((state) => state.songs.songs);

	useQuery(GET_PLAYLIST, {
		fetchPolicy: 'network-only',
		onCompleted: (data) => {
			const playlistsSong = (data.allPlaylists.nodes as any[]).map<Playlist>((songDB) =>
			({
				id: songDB.id,
				name: songDB.name,
				creatorId: songDB.creatorId,
				songs: songDB.playlistsongsByPlaylistId.nodes,
			}));
			dispatch(setPlaylists(playlistsSong));
		},
	});


	const findPlaylistSong = (items: SongsId[]) => {
		const songsIds: SongsId[] = items.map((song) => ({ songId: song.songId }));
		const filtersongs: Song[] = songs.filter((song) =>
			songsIds.some((songId) => song.id === songId.songId))
		console.log('filter', filtersongs);
		return filtersongs
	}

	return (
		<div className={classes.fieldsContainer}>
			{playlists.map((playlist) => (
				<GenericTable key={playlist.id} songs={findPlaylistSong(playlist.songs)} />
			) as React.ReactNode)}
		</div>
	)
}

export default PlaylistsTable;
