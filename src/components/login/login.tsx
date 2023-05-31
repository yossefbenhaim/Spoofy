import React, { useEffect, useState } from 'react';
import {
	Button,
	MenuItem,
	Typography,
	SnackbarOrigin,
	InputLabel,
	FormControl,
	Select,
	SelectChangeEvent
} from '@mui/material';

import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';

import FeedbackMessage from 'models/emuns/feedbackMessage';
import User from 'models/interface/user';
import PathName from 'models/emuns/pathName';

import AlertUser from 'components/alert/alertUser';
import GET_USERS from 'queries/query/users';
import useStyles from './loginStyles';

export interface State extends SnackbarOrigin {
	open: boolean;
}

const Login: React.FC = () => {
	const { classes } = useStyles();
	const navigatoin = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const [users, setUsers] = useState<User[] | undefined>([]);
	const [userSelectId, setUserSelectId] = useState<string | undefined>(undefined)
	const [openAlert, setOpenAlert] = useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	})

	useEffect(() => {
		if (currentUser?.id != undefined)
			navigatoin(PathName.mainPage + PathName.songs)
	}, [currentUser])

	useQuery(GET_USERS, {
		fetchPolicy: 'network-only',
		onCompleted: (data) => {
			const usersData = (data.allUsers.nodes as any[]).map<User>((userDB) => ({
				id: userDB.id,
				firstName: userDB.firstName,
				lastName: userDB.lastName
			}));
			setUsers(usersData);
		},
	});

	const handleConnect = (parametrMessage: SnackbarOrigin) => () => {
		const userSelect: User | undefined = users?.find((user) => user.id === userSelectId);
		if (userSelect?.id) {
			dispatch(setUser(userSelect))
			navigatoin(PathName.mainPage + PathName.songs);
		} else
			setOpenAlert({ open: true, ...parametrMessage });
	};

	const handleChange = (event: SelectChangeEvent) => {
		setUserSelectId(event.target.value)
	};

	return (
		<div className={classes.fieldsContainer}>
			<Typography className={classes.title}>Musify</Typography>
			<FormControl className={classes.formControl} fullWidth >
				<InputLabel className={classes.titleMenu} >
					בחר משתמש להתחברות
				</InputLabel>
				<Select
					className={classes.select}
					value={userSelectId || ''}
					label="בחר משתמש להתחברות"
					onChange={handleChange}
				>
					{users?.map((user) => {
						return (
							<MenuItem className={classes.menuItem} key={user.id} value={user.id}>
								{user.firstName + ' ' + user.lastName}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<Button
				onClick={handleConnect({
					vertical: 'top',
					horizontal: 'center',
				})}
				className={classes.btn}
				variant="contained"
			>
				התחבר
			</Button>
			<AlertUser massege={FeedbackMessage.mustSelectUser} openAlert={openAlert} setOpenAlert={setOpenAlert} />
		</div>
	);
};

export default Login;
