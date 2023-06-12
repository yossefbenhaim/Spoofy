import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSongId, resetCurrentSongId, setCurrentTableId } from 'redux/slice/currentSongId';
import { useAppSelector } from 'redux/store';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';
import RowsFieldsb from 'models/emuns/rowsField';

import useStyles from './genericTableStyles';
import formatDuration from 'utils/formatDuration';
import Song from 'models/interface/song';
import { setFilterSongs } from 'redux/slice/filterSongsByTable';

interface Props {
	genericSongs: Song[];
	tableId: string;
}

const GenericTable: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { classes, cx } = useStyles();
	const { genericSongs, tableId } = props
	const currentSongId = useAppSelector((state) => state.currentSong.songId);
	console.log(currentSongId)
	const currentTableId = useAppSelector((state) => state.currentSong.tableId)
	const songs = useAppSelector((state) => state.songs.songs);

	const filtersongs = useMemo<Song[]>(() => {
		return songs.filter((song) =>
			genericSongs.some((songId) => song.id === songId.id))
	}, [songs]);

	const updateCurrentSongView = (rowSongId: string | number) => {
		dispatch(setFilterSongs(filtersongs))

		if (rowSongId === currentSongId && currentTableId === tableId) {
			dispatch(resetCurrentSongId());
		}
		else {
			const test: Song | undefined = songs.find((song) => song.id == rowSongId)
			dispatch(setCurrentSongId(test?.id as string))
			console.log(test?.id)
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
			className={cx(classes.dataGride, { [classes.notCurrentDataGride]: tableId != currentTableId })}
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
			onRowClick={(row) => {
				updateCurrentSongView(row.id);
				dispatch(setCurrentTableId(tableId))
			}}
		/>
	);
};


export default GenericTable;
