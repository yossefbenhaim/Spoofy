import * as React from 'react';
import useStyles from './userOptionMenuStyles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { currentUser } from 'redux/store';
import { gql, useMutation } from '@apollo/client';
import DELETE_USER from 'queries/mu/deleteUser';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UserOptionMenu: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigate();
    const { classes } = useStyles();
    const currentUser = useSelector((state: currentUser) => state.currentUser);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigateToHome = () => {
        navigation('/');
        handleDeleteUser(currentUser.id);
    };

    const [deleteUser, { loading, error }] = useMutation(DELETE_USER);

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
                    TransitionComponent={Transition}
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
