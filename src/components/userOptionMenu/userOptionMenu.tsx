import React, { useState } from 'react';

import { resetUser } from 'redux/slice/currentUser';
import { IconButton } from '@mui/material/';
import { OptionUser } from '@models/enums/optionUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { resetFavorites } from 'redux/slice/favorites';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useStyles from './userOptionMenuStyles';
import DialogDeleteUser from './menuList/dialogDeleteUser';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SettingsIcon from '@mui/icons-material/Settings';

const UserOptionMenu: React.FC = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const FULL_USER_NAME =
		currentUser.user?.firstName +
		' ' +
		currentUser.user?.lastName

	const { classes } = useStyles();

	const [openDialogDelete, setOpenDialog] = React.useState(false);

	const handleClickOpenDeleteDialog = () =>
		setOpenDialog(true);

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const navigateToHome = () => {
		dispatch(resetUser());
		dispatch(resetFavorites())
		navigation('/');
	};

	return (
		<>
			<div className={classes.userIconContainer}>
				<Tooltip componentsProps={{ tooltip: { className: classes.tooltip } }} title={FULL_USER_NAME}>
					<IconButton onClick={handleOpenMenu} className={classes.userIcon}>
						<PermIdentityIcon />
					</IconButton>
				</Tooltip>
			</div>
			<Menu
				className={classes.menuContainer}
				anchorEl={anchorEl}
				open={open}
				onClose={handleCloseMenu}>
				<MenuItem
					className={classes.items}
					onClick={navigateToHome}
				>
					{/* profile => view all ditel of user {playlist , kocation , time in app} */}
					<div className={classes.containerIcons}>
						{OptionUser.profile}
						{<OpenInNewIcon className={classes.icons} />}
					</div>
				</MenuItem>
				<MenuItem
					className={classes.items}
					onClick={() => {
						handleClickOpenDeleteDialog()
						handleCloseMenu()
					}}
				>
					{/* setting => delete user , dark or lite mode */}
					<div className={classes.containerIcons}>
						{OptionUser.settings}
						{<SettingsIcon className={classes.icons} />}
					</div>
				</MenuItem>
				<MenuItem
					className={classes.disconnect}
					onClick={navigateToHome}
				>
					{OptionUser.disconnect}
				</MenuItem>
			</Menu>
			{openDialogDelete &&
				<DialogDeleteUser
					openDialogDelete={openDialogDelete}
					setOpenDialog={setOpenDialog}
					currentUser={currentUser.user}
				/>}
		</>
	);
};

export default UserOptionMenu;