import React, { Dispatch, SetStateAction, useState } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Typography,
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


const MenuList: React.FC = () => {
	const [openDialogDelete, setOpen] = React.useState(false);
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const handleCloseDeleteDialog = () =>
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
		<div>
			<>

				<Dialog
					open={openDialogDelete}
					keepMounted
					onClose={handleCloseDeleteDialog}
					className={classes.exitAccountContainer}
				>
					<DialogTitle className={classes.exitAccountTitle}>
						<Typography> ?האם אתה בטוח שאתה רוצה למחוק את החשבון</Typography>
					</DialogTitle>

					<DialogActions className={classes.exitAccountContent}>
						<Button
							onClick={handleCloseDeleteDialog}
							className={classes.exitBtn}
						>
							לא
						</Button>
						<Button
							className={classes.exitBtn}
							onClick={() => {
								handleCloseDeleteDialog();
								navigateToHome();
								handleDeleteUser(currentUser.user);
							}}
						>
							כן
						</Button>
					</DialogActions>
				</Dialog>
			</>
		</div>
	)
}

export default MenuList