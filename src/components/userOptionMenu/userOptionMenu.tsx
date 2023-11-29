import React, { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Typography,
	IconButton,
} from '@mui/material/';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { VariantType, useSnackbar } from 'notistack';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { useAppSelector } from 'redux/store';
import { resetFavorites } from 'redux/slice/favorites';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { resetUser } from 'redux/slice/currentUser';
import { User } from 'models/interface/user';

import DELETE_USER from 'queries/mutation/deleteUser';
import useStyles from './userOptionMenuStyles';


enum OptionUser {
	account = 'חשבון',
	settings = 'הגדרות',
	profile = 'פרופיל',
	disconnect = 'התנתקות'
}

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
	const { enqueueSnackbar } = useSnackbar();

	const [openDialogDelete, setOpen] = React.useState(false);
	const [deleteUserMutation] = useMutation(DELETE_USER);

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.deleteUser, { variant });

	const handleClickOpenDeleteDialog = () =>
		setOpen(true);

	const handleCloseDeleteDialog = () =>
		setOpen(false);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
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
				<Tooltip title={FULL_USER_NAME}>
					<IconButton onClick={handleClick} className={classes.userIcon}>
						<PermIdentityIcon />
					</IconButton>
				</Tooltip>
			</div>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}>
				<MenuItem
					onClick={navigateToHome}
				>
					{OptionUser.account}
				</MenuItem>
				<MenuItem
					onClick={navigateToHome}
				>
					{OptionUser.profile}
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClickOpenDeleteDialog()
						handleClose()
					}}
				>
					{OptionUser.settings}
				</MenuItem>
				<MenuItem
					onClick={navigateToHome}
				>
					{OptionUser.disconnect}
				</MenuItem>
			</Menu>
		</>
	);
};

export default UserOptionMenu;


{/* {
				flag &&
				<div className={classes.fieldsContainer}>
					<Typography className={classes.title}>
						{currentUser.user?.firstName +
							' ' +
							currentUser.user?.lastName +
							'   היי  '}
					</Typography>
					<div className={classes.body}>
						<Button
							onClick={handleClickOpenDeleteDialog}
							className={classes.btnDelete}
							variant="contained"
						>
							מחק חשבון
						</Button>
						<Button
							onClick={navigateToHome}
							className={classes.btnDisconect}
							variant="contained"
						>
							התנתקות
						</Button>
					</div>
				</div>

			} */}
