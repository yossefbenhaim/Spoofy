import React, { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { setSongs } from 'redux/slice/currentPlaylist';
import {
	DataGridPro, GridColDef
} from '@mui/x-data-grid-pro';
import { setCurrentSongId, resetCurrentSongId, setCurrentTableId } from 'redux/slice/currentPlaylist';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';

import RowsFieldsb from 'models/emuns/rowsField';
import Song from 'models/interface/song';

import useStyles from './customSongsTableStyles';
import formatDuration from 'utils/formatDuration';
import IconEmptyRows from 'components/lottie/emptyRowsScrean/icomEmptyRows';
import RowsGroup from 'common/rowsGroup/rowsGroup';
interface Props {
	tableSongs: string[];
	tableId: string;
}

const CustomSongsTable: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const { tableSongs, tableId } = props

	const currentSongId = useAppSelector((state) => state.currentPlaylist.songId);
	const currentTableId = useAppSelector((state) => state.currentPlaylist.tableId);
	const songs = useAppSelector((state) => state.songs.songs);
	const selectionModel = currentTableId === tableId ? currentSongId : ''

	const filteredSongs = useMemo<Song[]>(() => (
		tableSongs.map((tableSong) => songs.find((song: Song) => song.id === tableSong)!)
	), [tableSongs]);

	const updateCurrentSongView = (rowSongId: string | number) => {
		if (rowSongId === currentSongId && currentTableId === tableId)
			dispatch(resetCurrentSongId());

		else if (currentTableId || rowSongId !== undefined) {
			const newCurrentSong: Song | undefined = songs.find((song: Song) => song.id == rowSongId)
			dispatch(setCurrentSongId(newCurrentSong?.id as string))
		}
	}

	const CustomNoRowsOverlay = () => (
		<div className={classes.iconEmptyRows}>
			<IconEmptyRows />
		</div>
	);

	const rows = useMemo(() => filteredSongs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		artist: item.artist,
	})), [tableSongs]);

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



	return (<>
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
			disableColumnFilter
			disableColumnPinning

			slots={{
				toolbar: RowsGroup,
				noRowsOverlay: CustomNoRowsOverlay,
			}}
			rowSelectionModel={selectionModel}
			onRowClick={() => {
				dispatch(setCurrentTableId(tableId))
				dispatch(setSongs(filteredSongs))
			}}
			onRowSelectionModelChange={(row) => {
				if (row[0] !== undefined)
					updateCurrentSongView(row[0]);
			}}
		/>
	</>
	);
};

export default CustomSongsTable;
