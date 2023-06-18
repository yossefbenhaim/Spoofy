import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlaylist, setPlaylists } from 'redux/slice/playlists';
import { useQuery, useSubscription } from '@apollo/client';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import useStyles from './playlistsTableStyles';
import GenericTable from 'components/genericTable/genericTable';

import AddPlaylist from 'components/addPlaylist/addPlaylist';
import Song from 'models/interface/song';
import Playlist from 'models/interface/playlist';
import GET_PLAYLIST from 'queries/query/playlists';
import SongsId from 'models/interface/songId';
import IconButton from '@mui/material/IconButton';
import ADD_PLAYLIST_SUBSCRIPTION from 'queries/subscription/addPlaylistSubscription';

const PlaylistsTable: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const playlists = useAppSelector((state) => state.playlist.playlists);
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
		return filtersongs
	}

	useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
		onSubscriptionData: (data) => {
			const playlistsInsertData = data.subscriptionData.data.relatedNode;
			const playlistId = playlistsInsertData.id;
			const playlistName = playlistsInsertData.name;
			const creatorId = playlistsInsertData.creatorId;

			dispatch(
				addPlaylist({
					id: playlistId,
					name: playlistName,
					creatorId: creatorId,
					songs: [],
				})
			);

			console.log(data.subscriptionData.data.relatedNode);
		},
	});

	return (
		<>

			<div className={classes.headerContainer}>
				<Typography className={classes.header}>פלייליסטים</Typography>
			</div>
			<div className={classes.fieldsContainer}>
				{playlists.map((playlist) => (
					<div key={playlist.id} className={classes.container}>
						<div className={classes.headerTable}>
							<IconButton className={classes.editBtn}>
								<EditIcon />
							</IconButton>
							<Typography className={classes.namePlaylist}>{playlist.name}</Typography>
						</div>
						<div className={classes.playlistTable} >
							<GenericTable tableId={playlist.id} genericSongs={findPlaylistSong(playlist.songs)} />
						</div>
					</div>
				) as React.ReactNode)
				}
			</div>
			<div className={classes.addSongBtnContainer}>
				<AddPlaylist />
			</div>
		</>
	)
}

export default PlaylistsTable;
