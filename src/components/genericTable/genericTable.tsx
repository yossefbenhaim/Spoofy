import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSongId, resetCurrentSongId } from 'redux/slice/currentSongId';
import { useAppSelector } from 'redux/store';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';

import RowsFieldsb from 'models/emuns/rowsField';

import useStyles from './genericTableStyles';
import formatDuration from 'utils/formatDuration';
import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery';
import Song from 'models/interface/song';
import SongsId from 'models/interface/songId';
import songs from 'redux/slice/songs';

interface Props {
	songs: Song[];
}



const GenericTable: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const { songs } = props
	const currentSongId = useAppSelector((state) => state.currentSong.id);

	const updateCurrentSongView = (rowSongId: string | number) => {
		if (rowSongId === currentSongId)
			dispatch(resetCurrentSongId());
		else
			dispatch(setCurrentSongId(rowSongId.toString()));
	}

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
			width: 400,
			headerClassName: classes.headerDataGridSong,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.artist,
			headerName: 'זמר',
			width: 150,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.duration,
			headerName: "משך שיר",
			width: 130,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal

		},
		{
			field: 'menu',
			headerName: '',
			width: 50,
			sortable: false,
			resizable: false,
			renderCell: () => {
				return <MenuRow />
			},
		},
		{
			field: 'favorites',
			headerName: '',
			width: 50,
			sortable: false,
			resizable: false,
			renderCell: (params) => {
				const rowId: string = params.id.toString()
				return <IconFavoriteSong rowSongId={rowId} />;
			},
		},
	];

	return (
		<DataGridPro
			className={classes.dataGride}
			disableColumnMenu
			rows={rows || []}
			columns={columns}
			hideFooter
			hideFooterRowCount
			hideFooterPagination
			hideFooterSelectedRowCount
			disableColumnSelector
			disableColumnReorder
			disableColumnResize
			disableColumnFilter
			disableColumnPinning
			rowSelectionModel={currentSongId}
			onRowSelectionModelChange={(selectedRow) => {
				updateCurrentSongView(selectedRow[0]);
			}}
		/>
	);
};


export default GenericTable;
