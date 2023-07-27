import React, { useRef, useEffect, } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import useStyles from './iconHomeStyles';

const IconHome: React.FC = () => {
	const { classes } = useStyles();
	const animationRef = useRef<AnimationItem | undefined>();
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		animationRef.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/src/lottieFile/spootify.json',
		});
		return () =>
			animationRef.current && animationRef.current.destroy();
	}, []);

	return (
		<div className={classes.logo} ref={container} />
	);
};

export default IconHome;
