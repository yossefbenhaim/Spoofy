import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Typography
} from '@mui/material/';

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

const UserOptionMenu: React.FC = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser);

	const { classes } = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const [openDialogDelete, setOpen] = React.useState(false);
	const [deleteUserMutation] = useMutation(DELETE_USER);

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.deleteUser, { variant });

	const handleClickOpen = () =>
		setOpen(true);

	const handleClose = () =>
		setOpen(false);

	const navigateToHome = () => {
		dispatch(resetUser());
		dispatch(resetFavorites())
		navigation('/');
	};

	const handleDeleteUser = (userId: User | undefined) => {
		deleteUserMutation({ variables: { id: userId?.id } })
			.then(() => { handleQueryMessage('info') })
			.catch((err) => console.error('Failed to delete user: ', err));
	};

	return (
		<div className={classes.fieldsContainer}>
			<Typography className={classes.title}>
				{currentUser.user?.firstName +
					' ' +
					currentUser.user?.lastName +
					'   היי  '}
			</Typography>
			<div className={classes.body}>
				<Button
					onClick={handleClickOpen}
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
				<Dialog
					open={openDialogDelete}
					keepMounted
					onClose={handleClose}
					className={classes.exitAccountContainer}
				>
					<DialogTitle className={classes.exitAccountTitle}>
						<Typography> ?האם אתה בטוח שאתה רוצה למחוק את החשבון</Typography>
					</DialogTitle>

					<DialogActions className={classes.exitAccountContent}>
						<Button
							onClick={handleClose}
							className={classes.exitBtn}
						>
							לא
						</Button>
						<Button
							className={classes.exitBtn}
							onClick={() => {
								handleClose();
								navigateToHome();
								handleDeleteUser(currentUser.user);
							}}
						>
							כן
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
};

export default UserOptionMenu;
