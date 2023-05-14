import React, { useEffect } from 'react';
import useStyles from './firstPageStyles';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import Navbar from 'components/navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { RootReducer } from 'redux/store';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FAVORITES_BY_USER from 'queries/query/favoritesByUser';
import { setFavorites } from 'redux/slice/favorites';
import IconMusify from 'components/lottie/iconMusify';
import { useQuery } from '@apollo/client';

const FirstPage: React.FC = () => {
	const { classes } = useStyles();
	const currentUser = useSelector((state: RootReducer) => state.currentUser.user);
	const navigation = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!currentUser?.id) {
			navigation('/');
		}
	}, [currentUser]);

	const { refetch } = useQuery(FAVORITES_BY_USER, {
		variables: {
			"userId": currentUser?.id
		},
		onCompleted: (data) => {
			console.log('aaa', data?.allFavorites.nodes);
			dispatch(setFavorites(data?.allFavorites.nodes));
		}
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
