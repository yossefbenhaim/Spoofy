import React, { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { Typography, IconButton } from '@mui/material';

import useStyles from './playlistsTableStyles';
import GenericTable from 'common/genericTable/genericTable';
import GenericDialogCreateOrUpdate from 'common/genericDialogCreateOrUpdate/genericDialogCreateOrUpdate';

import SongsId from 'models/interface/songId';

const PlaylistsTable: React.FC = () => {
	const { classes } = useStyles();
	const playlists = useAppSelector((state) => state.playlist.playlists);
	const songs = useAppSelector((state) => state.songs.songs);


	const findPlaylistSong = (items: SongsId[]) => {
		const songsIds: SongsId[] = items.map((song) => ({ songId: song.songId }));
		const filteredSongs = songs.filter((song) =>
			songsIds.some((songId) => song.id === songId.songId));

		return filteredSongs;
	}

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
								<GenericDialogCreateOrUpdate
									choseSongs={findPlaylistSong(playlist.songs)}
									playlistName={playlist.name}
									titelName='עריכת פלייליסט'
									playlistId={playlist.id}
								/>
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
				<GenericDialogCreateOrUpdate
					choseSongs={[]}
					playlistName=''
					titelName='צור פלייליסט'
					playlistId=''
				/>
			</div>
			<GenericDialogCreateOrUpdate
				choseSongs={[]}
				playlistName=''
				titelName='צור פלייליסט'
				playlistId=''
			/>
		</>
	)
}

export default PlaylistsTable;
