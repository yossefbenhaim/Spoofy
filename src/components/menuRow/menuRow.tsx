import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import useStyles from './menuRowStyles';

const MenuRow: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const { classes } = useStyles();
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				className={classes.addIcon}
				id="basic-button"
				aria-controls={openMenu ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={openMenu ? 'true' : undefined}
				onClick={handleClick}
			>
				<AddIcon></AddIcon>
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuRow;
