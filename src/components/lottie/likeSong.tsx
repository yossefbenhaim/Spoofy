import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconMusifyStyles';
import { RootReducer } from 'redux/store';
import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavoriteFrom } from 'redux/slice/favorites';
import ADD_FAVORITE from 'queries/mutation/addFavorite';
import DELETE_FAVORITE from 'queries/mutation/deleteFavorite';
interface Props {
	liked: string;
}
const LikeSong: React.FC<Props> = (props) => {
	const { liked } = props
	const { classes } = useStyles();
	const [addFavoriteMutation] = useMutation(ADD_FAVORITE);
	const currentUserId = useSelector((state: RootReducer) => state.currentUser.user?.id);
	const favoritesLike = useSelector((state: RootReducer) => state.favorites.favorites);
	const container = useRef<HTMLDivElement>(null);
	const animref = useRef<AnimationItem | undefined>();
	const [deleteFavorite] = useMutation(DELETE_FAVORITE);
	const dispatch = useDispatch();

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

	const handleClikeOnLike = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (favoritesLike?.some((favorite) => favorite.songId === liked)) {
			dispatch(deleteFavoriteFrom({ songId: liked }))
			heandlDeleteFavorite();
			animref.current && animref.current.stop();
		} else {
			dispatch(addFavorite({ songId: liked }))
			heandlAddFavorite();
			animref.current && animref.current.play();
		}
	};

	const heandlDeleteFavorite = () => {
		deleteFavorite({ variables: { userId: currentUserId, songId: liked } })
			.then(() => console.log('User deleted successfully!'))
			.catch((err) => console.error('Failed to delete user: ', err));
	}

	const heandlAddFavorite = () => {
		addFavoriteMutation({
			variables: {
				input: {
					favorite: {
						userId: currentUserId,
						songId: liked
					},
				},
			},
		})
			.then(() => console.log('Song Add successfully!'))
			.catch((err) => console.error('Failed to add song: ', err));
	}

	useEffect(() => {
		if (favoritesLike?.some((favorite) => favorite.songId === liked)) {
			animref.current && animref.current.goToAndPlay(1000, true);
		} else {
			animref.current && animref.current.stop();
		}
	}, [liked, favoritesLike])

	return (
		<div>
			<IconButton className={classes.iconBotton} onClick={handleClikeOnLike}>
				<div className={classes.logo} ref={container} />
			</IconButton>
		</div>
	);
};

export default LikeSong;
