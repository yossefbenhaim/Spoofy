import React, { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { setFilterSongs } from 'redux/slice/currentSongId';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import { setCurrentSongId, resetCurrentSongId, setCurrentTableId } from 'redux/slice/currentSongId';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';

import RowsFieldsb from 'models/emuns/rowsField';
import Song from 'models/interface/song';

import useStyles from './genericTableStyles';
import formatDuration from 'utils/formatDuration';

interface Props {
	genericSongs: Song[];
	tableId: string;
}

const GenericTable: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { classes, cx } = useStyles();
	const { genericSongs, tableId } = props

	const currentSongId = useAppSelector((state) => state.currentSong.songId);
	const currentTableId = useAppSelector((state) => state.currentSong.tableId);
	const songs = useAppSelector((state) => state.songs.songs);
	const selectionModel = currentTableId === tableId ? currentSongId : undefined



	const updateCurrentSongView = (rowSongId: string | number) => {
		if (rowSongId === currentSongId && currentTableId === tableId)
			dispatch(resetCurrentSongId());

		else if (currentTableId || rowSongId !== undefined) {
			const newCurrentSong: Song | undefined = songs.find((song) => song.id == rowSongId)
			dispatch(setCurrentSongId(newCurrentSong?.id as string))
		}
	}

	const rows = useMemo(() => genericSongs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		artist: item.artist,
	})), [genericSongs]);

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
			renderCell: (params) => {
				const rowId: string = params.id.toString()
				return <MenuRow rowId={rowId} />
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
			// rowSelectionModel={currentSongId}
			rowSelectionModel={selectionModel}
			onRowClick={() => {
				dispatch(setCurrentTableId(tableId))
				dispatch(setFilterSongs(genericSongs))
			}}
			onRowSelectionModelChange={(row) => {
				if (row[0] !== undefined)
					updateCurrentSongView(row[0]);
			}}
		/>
	);
};

export default GenericTable;
