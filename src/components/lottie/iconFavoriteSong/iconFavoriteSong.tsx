import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import { addFavorite, deleteFavoriteFrom } from 'redux/slice/favorites';
import { VariantType, useSnackbar } from 'notistack';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { useAppSelector } from 'redux/store';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { deleteSong } from 'redux/slice/currentPlaylist';
import { Favorite } from 'models/interface/favorite';

import ADD_FAVORITE from 'queries/mutation/addFavorite';
import DELETE_FAVORITE from 'queries/mutation/deleteFavorite';

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
			path: '/src/lottieFile/like.json',
		});
		return () =>
			animref.current && animref.current.destroy();
	}, []);

	useEffect(() => {
		if (favoritesLike.some((favorite: Favorite) => favorite.songId === rowSongId)) {
			animref.current && animref.current.goToAndPlay(1000, true)
		} else {
			animref.current && animref.current.stop();
		}
	}, [rowSongId, favoritesLike.length > 0])

	const handleClikeOnLike = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (favoritesLike.some((favorite: Favorite) => favorite.songId === rowSongId)) {
			animref.current && animref.current.stop();
			heandlDeleteFavorite();
			dispatch(deleteFavoriteFrom({ songId: rowSongId }));
			dispatch(deleteSong(rowSongId))
		} else {
			animref.current && animref.current.play();
			setTimeout(() => {
				dispatch(addFavorite({ songId: rowSongId }));
				heandlAddFavorite();
			}, 1000);
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
