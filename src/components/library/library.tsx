import React, { useEffect } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import getSubscription from 'hooks/getSubscription';
import useStyles from './libraryStyles';

import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import Navbar from 'components/navbar/navbar';
import IconMusify from 'components/lottie/iconMusify/iconMusify';
import getUseQuery from 'hooks/getUseQuery';

const Library: React.FC = () => {
	const { classes } = useStyles();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const navigation = useNavigate();

	useEffect(() => {
		if (!currentUser?.id)
			navigation('/');
	}, [currentUser]);

	getSubscription();
	getUseQuery();

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.header}>
				<div className={classes.titleContainer}>
					<UserOptionMenu />
					<div className={classes.logoContainer}>
						<IconMusify />
						<Typography className={classes.textLogo}>musify </Typography>
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
			<div className={classes.musicPlayerContainer}>
				<MusicPlayer />
			</div>
		</div>
	);
};

export default Library;
