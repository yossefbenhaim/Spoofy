import React from 'react';
import useStyles from './firstPageStyles';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import ButtonsNavigation from 'components/buttomsNavigation/buttonsNavigation';
import { Outlet } from 'react-router-dom';
import IconMusify from 'components/lottie/iconMusify';

const FirstPage: React.FC = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.header}>
				<div className={classes.titleContainer}>
					<UserOptionMenu></UserOptionMenu>
					<div className={classes.logoContainer}>
						<IconMusify></IconMusify>
						<div>musify </div>
					</div>
				</div>
			</div>
			<div className={classes.navigation}>
				<div className={classes.tableValuse}>
					<Outlet />
				</div>
				<div className={classes.buttonsContainer}>
					<ButtonsNavigation />
				</div>
			</div>
			<MusicPlayer />
		</div>
	);
};

export default FirstPage;
