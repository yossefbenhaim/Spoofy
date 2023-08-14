import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { PathName } from 'models/enums/pathName';

import Button from '@mui/material/Button';
import useStyles from './navbarStyles';

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
	const location = useLocation();

	const navigationPage = (path: string) => {
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
							PathName.library + btn.path === location.pathname,
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
