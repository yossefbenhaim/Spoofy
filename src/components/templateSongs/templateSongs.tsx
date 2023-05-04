import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllSongs, CurrentSong } from 'redux/store';
import { setSongs } from 'redux/slice/allSongs';
import { setCurrentSong } from 'redux/slice/currentSong';
import { useQuery } from '@apollo/client';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import useStyles from './templateSongsStyles';
import MenuRow from 'components/menuRow/menuRow';
import LikeSong from 'components/lottie/likeSong';
import GET_SONGS from 'queries/query/getAllSongs';
import AddSong from 'components/addSong/addSong';
import formatDuration from 'utils/formatDuration';
import RowsFieldsb from 'models/emuns/rowsField';
// import { LicenseInfo } from '@mui/x-data-grid-pro';
// LicenseInfo.setLicenseKey(
//     '6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVR1c3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU01PTj0x'
// );

const TemplateSongs: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	const allSongs = useSelector((state: AllSongs) => state.allSongs);
	const currentSongId = useSelector(
		(state: CurrentSong) => state.currentSong.id
	);

	useQuery(GET_SONGS, {
		onCompleted: (data) => {
			dispatch(setSongs(data.allSongs.nodes));
		},
	});

	const rows = allSongs.songs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(item.duration),
		nameArtist: item.artistByArtistId.name,
	}));

	const settingRowGlobal: Partial<GridColDef> = {
		sortable: false,
		resizable: false,
		headerClassName: classes.headerDataGrid,
		headerAlign: 'left',
	}

	const columns: GridColDef[] = [
		{
			field: RowsFieldsb.song,
			headerName: RowsFieldsb.song,
			width: 350,
			...settingRowGlobal
		},

		{
			field: RowsFieldsb.nameArtist,
			headerName: RowsFieldsb.nameArtist,
			width: 200,
			...settingRowGlobal

		},
		{
			field: RowsFieldsb.duration,
			headerName: RowsFieldsb.duration,
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
					<div>
						<MenuRow />
					</div>
				);
			},
		},
		{
			field: 'favorites',
			headerName: '',
			...settingRowGlobal,
			width: 70,
			renderCell: () => {
				return <LikeSong></LikeSong>;
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
				rowSelectionModel={currentSongId}
				onRowSelectionModelChange={(selectedRow) => {
					const test: any = selectedRow[0];
					if (selectedRow[0] !== undefined) {
						dispatch(setCurrentSong(test));
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
