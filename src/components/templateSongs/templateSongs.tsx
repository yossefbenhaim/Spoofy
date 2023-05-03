import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import useStyles from './templateSongsStyles';
import MenuRow from 'components/menuRow/menuRow';
import { useDispatch, useSelector } from 'react-redux';
import { allSongs, currentSong } from 'redux/store';
import { setSongs } from 'redux/slice/allSongs';
import { setCurrentSong } from 'redux/slice/currentSong';
import { useQuery } from '@apollo/client';
import LikeSong from 'components/lottie/likeSong';
import GET_SONGS from 'queries/query/getAllSongs';
import AddSong from 'components/addSong/addSong';
import formatDuration from 'utils/formatDuration';
// import { LicenseInfo } from '@mui/x-data-grid-pro';
// LicenseInfo.setLicenseKey(
//     '6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVR1c3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU01PTj0x'
// );

const TemplateSongs: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	const allSongs = useSelector((state: allSongs) => state.allSongs);
	const currentSongId = useSelector(
		(state: currentSong) => state.currentSong.id
	);

	useQuery(GET_SONGS, {
		onCompleted: (data) => {
			dispatch(setSongs(data.allSongs.nodes));
		},
	});

	const rows = allSongs.songs.map((item) => ({
		id: item.id,
		song: item.name,
		duration: formatDuration(parseInt(item.duration)),
		name_artist: item.artistByArtistId.name,
	}));

	const columns: GridColDef[] = [
		{
			field: 'song',
			headerName: 'Song',
			width: 350,
			sortable: false,
			resizable: false,
			headerClassName: classes.headerDataGrid,
			headerAlign: 'left',
		},

		{
			field: 'name_artist',
			headerName: 'Artist',
			width: 200,
			sortable: false,
			resizable: false,
			headerClassName: classes.headerDataGrid,
			headerAlign: 'left',
		},
		{
			field: 'duration',
			headerName: 'Duration',
			width: 150,
			sortable: false,
			resizable: false,
			headerClassName: classes.headerDataGrid,
			headerAlign: 'left',
		},
		{
			field: 'menu',
			headerName: '',
			headerClassName: classes.headerDataGrid,
			sortable: false,
			resizable: false,
			width: 50,
			headerAlign: 'left',
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
			headerClassName: classes.headerDataGrid,
			sortable: false,
			resizable: false,
			width: 70,
			headerAlign: 'left',
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
				onRowSelectionModelChange={(selectedRoe) => {
					const test: any = selectedRoe[0];
					if (selectedRoe[0] !== undefined) {
						dispatch(setCurrentSong(test));
					}
					if (selectedRoe[0] === currentSongId) {
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
