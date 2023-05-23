import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setSongs } from 'redux/slice/songs';
import { setCurrentSongId } from 'redux/slice/currentSongId';
import { useQuery } from '@apollo/client';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';
import AddSong from 'components/addSong/addSong';

import RowsFieldsb from 'models/emuns/rowsField';
import Song from 'models/interface/song';

import GET_SONGS from 'queries/query/songs';
import formatDuration from 'utils/formatDuration';
import useStyles from './tableSongsStyles';

const TableSongs: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const songs = useAppSelector((state) => state.songs.songs);
	const currentSongId = useAppSelector((state) => state.currentSong.id);

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

	const rows = useMemo(() => songs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		artist: item.artist,
	})), [songs]);

	const settingRowGlobal: Partial<GridColDef> = {
		sortable: false,
		resizable: false,
		headerAlign: 'left',
	}

	const columns: GridColDef[] = [
		{
			field: RowsFieldsb.song,
			headerName: 'שיר',
			width: 250,
			headerClassName: classes.headerDataGridSong,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.artist,
			headerName: 'זמר',
			width: 200,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.duration,
			headerName: "משך שיר",
			width: 150,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal
		},
		{
			field: 'menu',
			headerName: '',
			width: 50,
			renderCell: () => {
				return (
					<MenuRow />
				);
			},
		},
		{
			field: 'favorites',
			headerName: '',
			width: 70,
			renderCell: (params) => {
				const rowId: string = params.id.toString()
				return <IconFavoriteSong rowSongId={rowId} />;
			},
		},
	];

	return (
		<div className={classes.fieldContainer}>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>רשימת השירים</Typography>
			</div>
			<DataGridPro
				className={classes.dataGride}
				disableColumnMenu
				rows={rows}
				columns={columns}
				hideFooter
				hideFooterRowCount
				hideFooterPagination
				hideFooterSelectedRowCount
				disableColumnSelector
				disableColumnReorder
				disableColumnResize
				rowSelectionModel={currentSongId}
				onRowSelectionModelChange={(selectedRow) => {
					const test: string | number = selectedRow[0];
					if (selectedRow[0] !== undefined)
						dispatch(setCurrentSongId(test.toString()));

					if (selectedRow[0] === currentSongId)
						dispatch(setCurrentSongId(''));
				}}
			/>
			<div className={classes.addSongBtnContainer}>
				<AddSong />
			</div>
		</div>
	);
};

export default TableSongs;
