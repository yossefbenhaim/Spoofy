import React, { useRef, useEffect, useState, useMemo } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconMusifyStyles';
import { useSelector } from 'react-redux';
import { CurrentSong, CurrentUser } from 'redux/store';
import { useMutation } from '@apollo/client';
import ADD_FAVORITE from 'queries/mutation/addFavorite';
const LikeSong: React.FC = () => {
	const { classes } = useStyles();

	const container = useRef<HTMLDivElement>(null);
	const animref = useRef<AnimationItem | undefined>();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [addFavorite] = useMutation(ADD_FAVORITE);

	const currentUserId = useSelector((state: CurrentUser) => state.currentUser.user?.id);
	const currentSongId = useSelector(
		(state: CurrentSong) => state.currentSong.id
	);

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
			animref.current && animref.current.stop();
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
