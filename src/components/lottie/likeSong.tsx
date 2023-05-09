import React, { useRef, useEffect, useState, useMemo } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconMusifyStyles';
import { useSelector, useDispatch } from 'react-redux';
import { CurrentSong, CurrentUser, AllSongs } from 'redux/store';
import { useMutation, useQuery } from '@apollo/client';
// import { FavoritesSong } from 'redux/store';
// import { setFavorites } from 'redux/slice/favorites';
import ADD_FAVORITE from 'queries/mutation/addFavorite';
// import Song from 'models/interface/song';
// import FAVORITES_BY_USER from 'queries/query/favoritesByUser';

interface Props {
	liked: boolean;
}

const LikeSong: React.FC<Props> = (props) => {
	const { liked } = props
	const { classes } = useStyles();
	const [addFavorite] = useMutation(ADD_FAVORITE);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	// const favoritesLike = useSelector((state: FavoritesSong) => state.favoritesSong.favorites);
	const currentUserId = useSelector((state: CurrentUser) => state.currentUser.user?.id);
	const currentSongId = useSelector(
		(state: CurrentSong) => state.currentSong.id
	);
	// const allSongs = useSelector((state: AllSongs) => state.songs.songs);
	// const dispatch = useDispatch();
	const container = useRef<HTMLDivElement>(null);
	const animref = useRef<AnimationItem | undefined>();

	// const { data } = useQuery(FAVORITES_BY_USER, {
	// 	variables: {
	// 		"userId": currentUserId
	// 	},
	// });
	// dispatch(setFavorites(data?.allFavorites.nodes));


	// const favoriteSongs: Song[] = allSongs.filter((song) =>
	// 	favoritesLike?.some((favorite) => favorite.songId === song.id)
	// );





	const handleClose = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		animref.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/src/like.json',
		});


		return () => {
			animref.current && animref.current.destroy();
		};
	}, []);


	useEffect(() => {
		if (isVisible) {
			addFavorite({
				variables: {
					input: {
						favorite: {
							userId: currentUserId,
							songId: currentSongId
						},
					},
				},
			})
				.then(() => console.log('Song Add successfully!'))
				.catch((err) => console.error('Failed to add song: ', err));
			animref.current && animref.current.play();
		} else {
			{
				liked ? animref.current && animref.current.play()
					: animref.current && animref.current.stop()
			}
		}
	}, [isVisible]);


	return (
		<div>
			<IconButton className={classes.iconBotton} onClick={handleClose}>
				<div className={classes.logo} ref={container} />
			</IconButton>
		</div>
	);
};

export default LikeSong;
