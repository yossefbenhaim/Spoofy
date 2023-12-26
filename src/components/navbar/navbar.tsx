import React, { ReactElement } from 'react';
import { PathName } from '@models/enums/pathName';
import { IconButton } from '@mui/material';

import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useStyles from './navbarStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import MapIcon from '@mui/icons-material/Map';
import Drawer from '@mui/material/Drawer';
import { useLocation, useNavigate } from 'react-router';

interface Navbar {
	item: string,
	path: string,
	icon: ReactElement<any, any>,
}
const MENU_BUTTONS: Navbar[] = [
	{ item: 'שירים', path: PathName.songs, icon: <LibraryMusicIcon /> },
	{ item: 'פלייליסטים', path: PathName.playlist, icon: <QueueMusicIcon /> },
	{ item: 'מועדפים', path: PathName.favorites, icon: <FavoriteIcon /> },
	{ item: 'משתמשים', path: PathName.users, icon: <MapIcon /> }
];

const Navbar: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const navigation = useNavigate();
	const location = useLocation();

	const { classes, cx } = useStyles()

	const navigationPage = (path: string) => {
		console.log(path);

		navigation(path);
	}

	const handleDrawerClose = () => {
		setOpen(prev => !prev);
	};
	return (
		<>
			<Drawer
				style={{ width: open ? '100%' : '21%' }}
				className={classes.drawerContainer} variant="permanent" open={open}>
				<div style={{ justifyContent: open ? 'start' : 'center' }} className={classes.openDrawBtn} >
					<IconButton style={{ marginLeft: open ? '21px' : '0px' }} className={classes.cheveronIcon} onClick={handleDrawerClose}>
						{open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<List className={classes.listContainer}>
					{MENU_BUTTONS.map((btn) => (
						<ListItem key={btn.item} disablePadding >
							<ListItemButton onClick={() => navigationPage(btn.path)}
								className={classes.listNavButton}
							>
								<ListItemIcon
									className={cx(classes.textBtn, {
										[classes.iconActive]:
											PathName.library + btn.path === location.pathname,
									})}
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
									}}
								>
									{btn.icon}
								</ListItemIcon>
								<ListItemText className={cx(classes.textBtn, {
									[classes.iconActiveText]:
										PathName.library + btn.path === location.pathname,
								})} primary={btn.item} sx={{ opacity: open ? 1 : 0, width: open ? '100%' : '0px' }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer >
		</>
	);
}

export default Navbar;