import React from 'react';
import Button from '@mui/material/Button';
import useStyles from './navbarStyles';
import { useLocation, useNavigate } from 'react-router-dom';

const MENU_BUTTONS: any[] = [//change type
	{ item: 'שירים', path: 'songs', color: '', id: 1 },
	{ item: 'פלייליסטים', path: 'playlist', color: '', id: 2 },
	{ item: 'מועדפים', path: 'favorites', color: '', id: 3 },
];
const Navbar: React.FC = () => {
	const location = useLocation();
	const navigation = useNavigate();

	const { classes, cx } = useStyles();

	return (
		<div className={classes.btnContainer}>
			{MENU_BUTTONS.map((btn) => (
				<Button
					key={btn.id}
					variant="contained"
					className={cx(classes.btnMenu, {
						[classes.activeBtn]:
							'/firstPage/' + btn.path === location.pathname,
					})}
					onClick={() => {
						navigation(btn.path);
					}}
				>
					{btn.item}
				</Button>
			))}
		</div>
	);
};

export default Navbar;