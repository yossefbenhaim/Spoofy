import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentSongId } from 'redux/slice/currentSongId';

import Button from '@mui/material/Button';
import useStyles from './navbarStyles';
import PathName from 'models/emuns/pathName';

interface Navbar {
	item: string,
	path: string
}

const MENU_BUTTONS: Navbar[] = [
	{ item: 'שירים', path: PathName.songs },
	{ item: 'פלייליסטים', path: PathName.playlist },
	{ item: 'מועדפים', path: PathName.favorites },
];
const Navbar: React.FC = () => {
	const { classes, cx } = useStyles();
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const navigationPage = (path: string) => {
		if (path != PathName.songs)
			dispatch(setCurrentSongId(''));
		navigation(path);
	}

	return (
		<div className={classes.btnContainer}>
			{MENU_BUTTONS.map((btn) => (
				<Button
					key={btn.item}
					variant="contained"
					className={cx(classes.btnMenu, {
						[classes.activeBtn]:
							PathName.firstPage + btn.path === location.pathname,
					})}
					onClick={() => navigationPage(btn.path)}
				>
					{btn.item}
				</Button>
			))}
		</div>
	);
};

export default Navbar;
