import React, {
	useRef,
	useEffect,
	useState
} from 'react';

import Lottie, { AnimationItem } from 'lottie-web';

import IconButton from '@mui/material/IconButton';
import useStyles from './iconEmptyRowsStyles';

const IconEmptyRows: React.FC = () => {
	const { classes } = useStyles();
	const [isVisible, setIsVisible] = useState<boolean>(true);

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
