import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllSongs, CurrentSong } from 'redux/store';
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
import { setFavorites } from 'redux/slice/favorites';
import { FavoritesSong, CurrentUser } from 'redux/store';
import Song from 'models/interface/song';
import FAVORITES_BY_USER from 'queries/query/favoritesByUser';
import Favorite from 'models/interface/favorite';


const TemplateSongs: React.FC = () => {
	const { classes } = useStyles();
	const favoritesLike = useSelector((state: FavoritesSong) => state.favoritesSong.favorites);
	const currentUserId = useSelector((state: CurrentUser) => state.currentUser.user?.id);

	const dispatch = useDispatch();
	const allSongs = useSelector((state: AllSongs) => state.songs.songs);
	const currentSongId = useSelector(
		(state: CurrentSong) => state.currentSong.id
	);

	useQuery(GET_SONGS, {
		onCompleted: (data) => {
			dispatch(setSongs(data.allSongs.nodes));
		},
	});

	const { data } = useQuery(FAVORITES_BY_USER, {
		variables: {
			"userId": currentUserId
		},
	});
	dispatch(setFavorites(data?.allFavorites.nodes));


	const favoriteSongs: Song[] = allSongs.filter((song) =>
		favoritesLike?.some((favorite) => favorite.songId === song.id)
	);
	const rows = allSongs.map((item) => ({
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
				return <LikeSong liked={favoritesLike?.some((favorite) => favorite.songId === tesst) ? true : false} />;
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
