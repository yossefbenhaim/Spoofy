import React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import useStyles from './menuRowStyles';

const MenuRow: React.FC = () => {
	const { classes } = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const handleClose = () =>
		setAnchorEl(null);

	return (
		<>
			<IconButton
				className={classes.addIcon}
				onClick={handleMenuClick}
			>
				<AddIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</>
	);
};

export default MenuRow;
