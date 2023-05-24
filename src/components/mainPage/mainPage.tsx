import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'redux/store';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setFavorites } from 'redux/slice/favorites';

import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import Navbar from 'components/navbar/navbar';
import IconMusify from 'components/lottie/iconMusify/iconMusify';

import FAVORITES_BY_USER from 'queries/query/favoritesByUser';
import useStyles from './mainPageStyles';

const MainPage: React.FC = () => {
	const { classes } = useStyles();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const navigation = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!currentUser?.id)
			navigation('/');
	}, [currentUser]);

	const { refetch } = useQuery(FAVORITES_BY_USER, {
		variables: {
			userId: currentUser?.id
		},
		onCompleted: (data) =>
			dispatch(setFavorites(data?.allFavorites.nodes))
	});

	useEffect(() => {
		refetch();
	});

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.header}>
				<div className={classes.titleContainer}>
					<UserOptionMenu />
					<div className={classes.logoContainer}>
						<IconMusify />
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
			<div className={classes.musicPlayerContainer}>
				<MusicPlayer />
			</div>
		</div>
	);
};

export default MainPage;
