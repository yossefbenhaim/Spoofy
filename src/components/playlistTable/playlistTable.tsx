import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setPlaylists } from 'redux/slice/Playlists';
import { setCurrentSongId, resetCurrentSongId } from 'redux/slice/currentSongId';
import { useQuery } from '@apollo/client';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';
import AddSong from 'components/addSong/addSong';

import RowsFieldsb from 'models/emuns/rowsField';
import Playlist from 'models/interface/Playlist';
import GET_SONGS_BY_PLAYLIST_ID from 'queries/query/songsByPlaylistId';
import formatDuration from 'utils/formatDuration';
import useStyles from './playlistTableStyles';

const PlaylistTable: React.FC = () => {
	// const dispatch = useDispatch();
	// const { classes } = useStyles();

	// const playlist = useAppSelector((state) => state.playlist.playlist);



	// useQuery(GET_SONGS_BY_PLAYLIST_ID, {
	// 	onCompleted: (data) => {
	// 		const songsData = (data.allSongs.nodes as any[]).map<Playlist>((songDB) =>
	// 		({
	// 			id: songDB.id,
	// 			name: songDB.name,
	// 			creatorId: songDB.creatorId
	// 		}));
	// 		// dispatch(setSongs(songsData));
	// 	},
	// });



	// const rows = useMemo(() => songs.map((item) => ({
	// 	id: item.id,
	// 	song: item.name,
	// 	duration: formatDuration(item.duration),
	// 	artist: item.artist,
	// })), [songs]);

	// const settingRowGlobal: Partial<GridColDef> = {
	// 	sortable: false,
	// 	resizable: false,
	// 	headerAlign: 'left',
	// }

	// const columns: GridColDef[] = [
	// 	{
	// 		field: RowsFieldsb.song,
	// 		headerName: 'שיר',
	// 		width: 400,
	// 		headerClassName: classes.headerDataGridSong,
	// 		...settingRowGlobal
	// 	},
	// 	{
	// 		field: RowsFieldsb.artist,
	// 		headerName: 'זמר',
	// 		width: 150,
	// 		headerClassName: classes.headerDataGridArtistDuration,
	// 		...settingRowGlobal
	// 	},
	// 	{
	// 		field: RowsFieldsb.duration,
	// 		headerName: "משך שיר",
	// 		width: 130,
	// 		headerClassName: classes.headerDataGridArtistDuration,
	// 		...settingRowGlobal

	// 	},
	// 	{
	// 		field: 'menu',
	// 		headerName: '',
	// 		width: 50,
	// 		sortable: false,
	// 		resizable: false,
	// 		renderCell: () => {
	// 			return <MenuRow />
	// 		},
	// 	},
	// 	{
	// 		field: 'favorites',
	// 		headerName: '',
	// 		width: 50,
	// 		sortable: false,
	// 		resizable: false,
	// 		renderCell: (params) => {
	// 			const rowId: string = params.id.toString()
	// 			return <IconFavoriteSong rowSongId={rowId} />;
	// 		},
	// 	},
	// ];

	// return (
	// 	<div className={classes.fieldContainer}>
	// 		<div className={classes.headerContainer}>
	// 			<Typography className={classes.header}>רשימת השירים</Typography>
	// 		</div>
	// 		<DataGridPro
	// 			className={classes.dataGride}
	// 			disableColumnMenu
	// 			rows={rows}
	// 			columns={columns}
	// 			hideFooter
	// 			hideFooterRowCount
	// 			hideFooterPagination
	// 			hideFooterSelectedRowCount
	// 			disableColumnSelector
	// 			disableColumnReorder
	// 			disableColumnResize
	// 			disableColumnFilter
	// 			disableColumnPinning



	// 			rowSelectionModel={currentSongId}
	// 			onRowSelectionModelChange={(selectedRow) => {
	// 				updateCurrentSongView(selectedRow[0]);
	// 			}}
	// 		/>
	// 		<div className={classes.addSongBtnContainer}>
	// 			<AddSong />
	// 		</div>
	// 	</div>
	// );

	return <div>playlist</div>
};

export default PlaylistTable;
