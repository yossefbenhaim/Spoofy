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
import { setUsers } from 'redux/slice/users';

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
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const users = useAppSelector((state) => state.users.users);
	const [userSelect, setUserSelect] = useState<User | undefined>(undefined)
	const dispatch = useDispatch();
	const navigatoin = useNavigate();

	const [state, setState] = useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	useEffect(() => {
		if (currentUser?.id != '')
			navigatoin(PathName.firstPage + PathName.songs)
	}, [currentUser])

	useQuery(GET_USERS, {
		onCompleted: (data) => {
			const usersData = (data.allUsers.nodes as any[]).map<User>((userDB) => ({
				id: userDB.id,
				firstName: userDB.firstName,
				lastName: userDB.lastName
			}));
			dispatch(setUsers(usersData));
		},
	});

	const handleClick = (parametrMessage: SnackbarOrigin) => () => {
		if (userSelect?.id) {
			dispatch(
				setUser({
					id: userSelect?.id,
					firstName: userSelect?.firstName,
					lastName: userSelect?.lastName,
				})
			);
			navigatoin(PathName.firstPage + PathName.songs);
		} else
			setState({ open: true, ...parametrMessage });
	};

	const handleChange = (event: SelectChangeEvent) => {
		const user: User | undefined = users?.find((user) => user.id === event.target.value);
		setUserSelect(user)
	};

	return (
		<div className={classes.fieldsContainer}>
			<Typography className={classes.title}>Musify</Typography>
			<FormControl className={classes.menu} fullWidth>
				<InputLabel className={classes.titleMenu} >
					בחר משתמש להתחברות
				</InputLabel>
				<Select
					className={classes.select}
					value={userSelect?.id || ''}
					label="בחר משתמש להתחברות"
					onChange={handleChange}
				>
					{users?.map((user) => {
						return (
							<MenuItem key={user.id} value={user.id}>
								{user.firstName + ' ' + user.lastName}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<Button
				onClick={handleClick({
					vertical: 'top',
					horizontal: 'center',
				})}
				className={classes.btn}
				variant="contained"
			>
				התחבר
			</Button>
			<AlertUser massege={FeedbackMessage.mustSelectUser} setState={setState} state={state} />
		</div>
	);
};

export default Login;
