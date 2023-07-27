import React, { useRef, useEffect, useState } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import IconButton from '@mui/material/IconButton';
import useStyles from '../iconFavoriteSong/iconFavoriteSongStyles';

const IconMusify: React.FC = () => {
	const { classes } = useStyles();
	const [isVisible, setIsVisible] = useState<boolean>(true);

	const animationRef = useRef<AnimationItem | undefined>();
	const container = useRef<HTMLDivElement>(null);

	const handleClose = () =>
		setIsVisible(!isVisible);

	useEffect(() => {
		animationRef.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/src/lottieFile/iconHome.json',
		});
		return () =>
			animationRef.current && animationRef.current.play();
	}, []);

	return (
		<IconButton className={classes.iconBotton} onClick={handleClose}>
			<div className={classes.logo} ref={container} />
		</IconButton>
	);
};

export default IconMusify;
