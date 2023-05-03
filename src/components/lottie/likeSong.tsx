import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-web';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import useStyles from './iconMusifyStyle';

const LikeSong: React.FC = () => {
	const container: any = useRef(null);
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const { classes } = useStyles();
	const handleClose = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		const animation = Lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			path: '/src/like.json',
		});

		animation.play();

		return () => {
			animation.destroy();
		};
	}, [isVisible]);

	return (
		<div>
			<IconButton className={classes.iconBotton} onClick={handleClose}>
				{isVisible ? (
					<FavoriteBorderIcon className={classes.icon2} />
				) : (
					<div className={classes.logo} ref={container} />
				)}
			</IconButton>
		</div>
	);
};

export default LikeSong;
