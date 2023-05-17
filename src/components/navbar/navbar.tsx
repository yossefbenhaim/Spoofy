import React from 'react';
import Button from '@mui/material/Button';
import useStyles from './navbarStyles';
import PathName from 'models/emuns/pathName';
import { useLocation, useNavigate } from 'react-router-dom';




const MENU_BUTTONS: any[] = [
	{ item: 'שירים', path: PathName.songs },
	{ item: 'פלייליסטים', path: PathName.playlist },
	{ item: 'מועדפים', path: PathName.favorites },
];
const Navbar: React.FC = () => {
	const location = useLocation();
	const navigation = useNavigate();

	const { classes, cx } = useStyles();

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
