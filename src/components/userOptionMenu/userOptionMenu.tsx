import React from 'react';
import useStyles from './userOptionMenuStyles';
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { currentUser } from 'redux/store';
import { useMutation } from '@apollo/client';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch, useSelector } from 'react-redux';

import DELETE_USER from 'queries/mutation/deleteUser';

const UserOptionMenu: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const navigation = useNavigate();
	const { classes } = useStyles();
	const currentUser = useSelector((state: currentUser) => state.currentUser);
	const [deleteUser] = useMutation(DELETE_USER);
	const dispatch = useDispatch();

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

	const handleDeleteUser = (userId: string) => {
		deleteUser({ variables: { id: userId } })
			.then(() => console.log('User deleted successfully!'))
			.catch((err) => console.error('Failed to delete user: ', err));
	};

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.title}>
				{currentUser.firstName +
					' ' +
					currentUser.lastName +
					'   היי  '}
			</div>
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
					open={open}
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
								handleDeleteUser(currentUser.id);
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
