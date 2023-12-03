import React, { Dispatch } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Typography,
} from '@mui/material/';
import { VariantType, useSnackbar } from 'notistack';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { resetFavorites } from 'redux/slice/favorites';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { resetUser } from 'redux/slice/currentUser';
import { User } from 'models/interface/user';

import useStyles from './dialogDeleteUserStyles';
import DELETE_USER from 'queries/mutation/deleteUser';

interface Props {
	currentUser: User | undefined,
	setOpenDialog: Dispatch<React.SetStateAction<boolean>>,
	openDialogDelete: boolean
}

const DialogDeleteUser: React.FC<Props> = (props) => {
	const { currentUser, setOpenDialog, openDialogDelete } = props
	const { classes } = useStyles()
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const [deleteUserMutation] = useMutation(DELETE_USER);
	const { enqueueSnackbar } = useSnackbar();

	const handleCloseDeleteDialog = () =>
		setOpenDialog(false);

	const navigateToHome = () => {
		dispatch(resetUser());
		dispatch(resetFavorites())
		navigation('/');
	};

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.deleteUser, { variant });
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
								handleDeleteUser(currentUser);
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

export default DialogDeleteUser