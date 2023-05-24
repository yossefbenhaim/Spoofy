import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import { useAppSelector } from 'redux/store';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavoriteFrom } from 'redux/slice/favorites';
import { VariantType, useSnackbar } from 'notistack';

import ADD_FAVORITE from 'queries/mutation/addFavorite';
import DELETE_FAVORITE from 'queries/mutation/deleteFavorite';

import FeedbackMessage from 'models/emuns/feedbackMessage';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconFavoriteSongStyles';

interface Props {
	rowSongId: string;
}
const IconFavoriteSong: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { rowSongId } = props
	const { classes } = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const [addFavoriteMutation] = useMutation(ADD_FAVORITE);
	const [deleteFavorite] = useMutation(DELETE_FAVORITE);

	const currentUserId = useAppSelector((state) => state.currentUser.user?.id);
	const favoritesLike = useAppSelector((state) => state.favorites.favorites);
	const container = useRef<HTMLDivElement>(null);
	const animref = useRef<AnimationItem | undefined>();

	const handleQueryMessage = (variant: VariantType) => {
		if (variant == 'success')
			enqueueSnackbar(FeedbackMessage.addingSongToFavorite, { variant });
		if (variant == 'info')
			enqueueSnackbar(FeedbackMessage.deletingSongToFavorite, { variant });
	}

	useEffect(() => {
		animref.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/src/like.json',
		});
		return () =>
			animref.current && animref.current.destroy();
	}, []);

	useEffect(() => {
		if (favoritesLike?.some((favorite) => favorite.songId === rowSongId))
			animref.current && animref.current.goToAndPlay(1000, true);
		else
			animref.current && animref.current.stop();
	}, [rowSongId, favoritesLike])

	const handleClikeOnLike = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (favoritesLike?.some((favorite) => favorite.songId === rowSongId)) {

			animref.current && animref.current.stop();
			heandlDeleteFavorite();
			dispatch(deleteFavoriteFrom({ songId: rowSongId }));

		} else {
			new Promise((resolve) => {
				animref.current && animref.current.play();
				setTimeout(resolve, 1000);

			}).then(() => {
				dispatch(addFavorite({ songId: rowSongId }));
				heandlAddFavorite();

			}).catch(error => {
				console.error('Error occurred:', error);
			});
		}
	};

	const heandlDeleteFavorite = () => {
		deleteFavorite({ variables: { userId: currentUserId, songId: rowSongId } })
			.then(() => handleQueryMessage('info'))
			.catch((err) => console.error('Failed to delete user: ', err));
	}

	const heandlAddFavorite = () => {
		addFavoriteMutation({
			variables: {
				input: {
					favorite: {
						userId: currentUserId,
						songId: rowSongId
					},
				},
			},
		})
			.then(() => { handleQueryMessage('success') })
			.catch((err) => console.error('Failed to add song: ', err));
	}

	return (
		<IconButton className={classes.iconBotton} onClick={handleClikeOnLike}>
			<div className={classes.logo} ref={container} />
		</IconButton>
	);
};

export default IconFavoriteSong;