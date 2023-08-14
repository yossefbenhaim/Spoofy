import React, { useMemo } from 'react';

import { DataGridPremium, GridColDef } from '@mui/x-data-grid-premium';
import { setCurrentTableId } from 'redux/slice/currentPlaylist';
import { ColumnsNames } from 'models/enums/columnsNames';
import { RowsFieldsb } from 'models/enums/rowsField';
import { useDispatch } from 'react-redux';
import { setSongs } from 'redux/slice/currentPlaylist';

import MenuRow from 'components/menuRow/menuRow';
import IconFavoriteSong from 'components/lottie/iconFavoriteSong/iconFavoriteSong';

import useStyles from './customSongsTableStyles';
import useStylesCommon from 'common/commonStyles';
import formatDuration from 'utils/formatDuration';
import IconEmptyRows from 'components/lottie/emptyRowsScrean/icomEmptyRows';
import RowsGroup from 'common/rowsGroup/rowsGroup';
import useCoustomSongsTable from './useCoustomSongsTable';

interface Props {
	tableSongs: string[];
	tableId: string;
}

const CustomSongsTable: React.FC<Props> = (props) => {
	const { tableSongs, tableId } = props
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();
	const dispatch = useDispatch();

	const {
		filteredSongs,
		selectionModel,
		groupingRows,
		columnVisibilityModel,
		setGroupingRows,
		updateCurrentSongView,
	} = useCoustomSongsTable
			({ tableId, tableSongs })

	const CustomNoRowsOverlay = () => (
		<div className={classes.iconEmptyRows}>
			<IconEmptyRows />
		</div>
	);

	const rowsGroupButton = () => {
		return filteredSongs.length === 0 ? undefined
			:
			<RowsGroup
				groupingRows={groupingRows}
				setGroupingRows={setGroupingRows}
			/>
	}

	const settingRowGlobal: Partial<GridColDef> = {
		sortable: false,
		resizable: false,
		headerAlign: 'left',
	}

	const rows = useMemo(() => filteredSongs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		artist: item.artist,
	})), [tableSongs]);

	const columns: GridColDef[] = [
		{
			field: RowsFieldsb.song,
			headerName: ColumnsNames.song,
			width: groupingRows ? 400 : 360,
			headerClassName: classes.headerDataGridSong,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.artist,
			headerName: ColumnsNames.artist,
			width: 150,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.duration,
			headerName: ColumnsNames.duration,
			width: 130,
			headerClassName: classes.headerDataGridArtistDuration,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.menu,
			headerAlign: 'left',
			headerName: '',
			width: 50,
			sortable: false,
			resizable: false,
			renderCell: (params) => {
				if (params.rowNode.type == 'group') {
					return undefined
				} else {
					const rowId: string = params.id.toString()
					return <MenuRow rowId={rowId} />
				}
			},
		},
		{
			field: RowsFieldsb.favorites,
			headerAlign: 'left',
			headerName: '',
			width: 50,
			sortable: false,
			resizable: false,
			renderCell: (params) => {
				if (params.rowNode.type == 'group') {
					return undefined
				} else {
					const rowId: string = params.id.toString()
					return <IconFavoriteSong rowSongId={rowId} />;
				}
			},
		},
	];

	return (<>
		<DataGridPremium
			className={`${classes.dataGride} ${classesCommon.scrollbar}`}
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
			columnVisibilityModel={columnVisibilityModel}
			disableRowGrouping={groupingRows}
			initialState={{
				rowGrouping: {
					model: [RowsFieldsb.artist],
				},
				columns: {
					columnVisibilityModel,
				},
			}}
			slots={{
				toolbar: rowsGroupButton,
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

export default React.memo(CustomSongsTable);
