import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import useStyles from './iconEmptyRowsStyles';

const IconEmptyRows: React.FC = () => {
	const { classes } = useStyles();

	const animationRef = useRef<AnimationItem | undefined>();
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		animationRef.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			path: '/src/lottieFile/emptyRows.json',
		});
		return () =>
			animationRef.current && animationRef.current.destroy();
	}, []);

	return (
		<div className={classes.logo} ref={container} />
	);
};

export default IconEmptyRows;
