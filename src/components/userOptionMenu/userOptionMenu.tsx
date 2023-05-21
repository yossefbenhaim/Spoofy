import React from 'react';
import useStyles from './userOptionMenuStyles';
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/store';
import { useMutation } from '@apollo/client';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';
import { deleteUser } from 'redux/slice/users';
import FeedbackMessage from 'models/emuns/feedbackMessage';
import DELETE_USER from 'queries/mutation/deleteUser';
import User from 'models/interface/user';

const UserOptionMenu: React.FC = () => {
	const [openDialogDelete, setOpen] = React.useState(false);
	const navigation = useNavigate();
	const { classes } = useStyles();
	const currentUser = useAppSelector((state) => state.currentUser);
	const [deleteUserMutation] = useMutation(DELETE_USER);
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();


	const handleQueryMessage = (variant: VariantType) => {
		enqueueSnackbar(FeedbackMessage.deleteUser, { variant });
	}


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const navigateToHome = () => {
		dispatch(
			setUser({
				id: '',
				firstName: '',
				lastName: '',
			})
		);
		navigation('/');
	};

	const handleDeleteUser = (userId: User | undefined) => {
		deleteUserMutation({ variables: { id: userId?.id } })
			.then(() => {
				dispatch(deleteUser(userId))
				handleQueryMessage('info')
			})
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
			<div>
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
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle className={classes.ExitAccountTitle}>
						{' ?האם אתה בטוח שאתה רוצה למחוק את החשבון'}
					</DialogTitle>

					<DialogContentText
						className={classes.ExitAccountHeader}
						id="alert-dialog-slide-description"
					>
						...במידה ותלחץ החשבון ימחק
					</DialogContentText>

					<DialogActions className={classes.ExitAccountContent}>
						<Button
							onClick={handleClose}
							className={classes.ExitBtn}
						>
							לא
						</Button>
						<Button
							className={classes.ExitBtn}
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
