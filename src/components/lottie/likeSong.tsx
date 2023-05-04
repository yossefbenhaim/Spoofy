import React, { useRef, useEffect, useState } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconMusifyStyles';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';

const LikeSong: React.FC = () => {
	const container = useRef<HTMLDivElement>(null);
	const animref = useRef<AnimationItem | undefined>();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const { classes } = useStyles();
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
