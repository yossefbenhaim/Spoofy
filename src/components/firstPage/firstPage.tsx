import React, { useEffect } from 'react';
import useStyles from './firstPageStyles';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import Navbar from 'components/navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from 'redux/store';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import IconMusify from 'components/lottie/iconMusify';

const FirstPage: React.FC = () => {
	const { classes } = useStyles();
	const currentUser = useSelector((state: CurrentUser) => state.currentUser.user?.id);
	const navigation = useNavigate();

	useEffect(() => {
		if (!currentUser) {
			navigation('/');
		}
	}, [currentUser]);

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.header}>
				<div className={classes.titleContainer}>
					<UserOptionMenu />
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
					<Navbar />
				</div>
			</div>
			<MusicPlayer />
		</div>
	);
};

export default FirstPage;
