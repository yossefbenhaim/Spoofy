import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSongs } from 'redux/slice/songs';
import { setCurrentSong } from 'redux/slice/currentSong';
import { useQuery } from '@apollo/client';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import useStyles from './templateSongsStyles';
import MenuRow from 'components/menuRow/menuRow';
import LikeSong from 'components/lottie/likeSong';
import GET_SONGS from 'queries/query/songs';
import AddSong from 'components/addSong/addSong';
import formatDuration from 'utils/formatDuration';
import RowsFieldsb from 'models/emuns/rowsField';
import { RootReducer } from 'redux/store';

const TemplateSongs: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	const allSongs = useSelector((state: RootReducer) => state.songs.songs);
	const currentSongId = useSelector(
		(state: RootReducer) => state.currentSong.id
	);

	useQuery(GET_SONGS, {
		onCompleted: (data) => {
			dispatch(setSongs(data.allSongs.nodes));
		},
	});

	const rows = useMemo(() => allSongs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		nameArtist: item.artistByArtistId.name,
	})), [allSongs]);

	const settingRowGlobal: Partial<GridColDef> = {
		sortable: false,
		resizable: false,
		headerClassName: classes.headerDataGrid,
		headerAlign: 'left',
	}

	const columns: GridColDef[] = [
		{
			field: RowsFieldsb.song,
			headerName: 'שירים',
			width: 250,
			...settingRowGlobal
		},

		{
			field: RowsFieldsb.nameArtist,
			headerName: 'זמר',
			width: 200,
			...settingRowGlobal
		},
		{
			field: RowsFieldsb.duration,
			headerName: "משך שיר",
			width: 150,
			...settingRowGlobal
		},
		{
			field: 'menu',
			headerName: '',

			...settingRowGlobal,
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
			...settingRowGlobal,
			width: 70,

			renderCell: (params) => {
				const tesst: string = params.id.toString()
				return <LikeSong liked={tesst} />;
			},
		},
	];

	return (
		<div className={classes.fieldContainer}>
			<div className={classes.header}>רשימת השירים</div>
			<DataGridPro
				className={classes.dataGride}
				disableColumnMenu
				rows={rows}
				columns={columns}
				hideFooter
				hideFooterRowCount
				hideFooterPagination
				hideFooterSelectedRowCount
				disableVirtualization
				rowSelectionModel={currentSongId}
				onRowSelectionModelChange={(selectedRow) => {
					const test: string | number = selectedRow[0];
					if (selectedRow[0] !== undefined) {
						dispatch(setCurrentSong(test.toString()));

					}
					if (selectedRow[0] === currentSongId) {
						dispatch(setCurrentSong(''));
					}
				}}
			/>

			<div className={classes.addSongBtnContainer}>
				<AddSong />
			</div>
		</div>
	);
};

export default TemplateSongs;
