import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './loginStyles';
import { Button, MenuItem, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import { setUsers } from 'redux/slice/users';
import AlertUser from 'components/alert/alertUser';
import FeedbackMessage from 'models/emuns/feedbackMessage';
export interface State extends SnackbarOrigin {
	open: boolean;
}
import GET_USERS from 'queries/query/users';
import User from 'models/interface/user';


const Login: React.FC = () => {
	const { classes } = useStyles();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const users = useAppSelector((state) => state.users.users);
	const dispatch = useDispatch();
	const navigatoin = useNavigate();

	const [state, setState] = useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	useQuery(GET_USERS, {
		onCompleted: (data) => {
			const usersData = (data.allUsers.nodes as any[]).map<User>((userDB) =>
			({
				id: userDB.id,
				firstName: userDB.firstName,
				lastName: userDB.lastName

			}));
			dispatch(setUsers(usersData));
		},
	});

	const handleClick = (parametrMessage: SnackbarOrigin) => () => {
		if (currentUser?.id) {
			navigatoin('firstPage/songs');
		}
		else {
			setState({ open: true, ...parametrMessage });
		}
	};

	const handleChange = (event: SelectChangeEvent) => {
		const user: User | undefined = users?.find((user) => user.id === event.target.value);
		dispatch(
			setUser({
				id: user?.id,
				firstName: user?.firstName,
				lastName: user?.lastName,
			})
		);
	};

	return (
		<div className={classes.fieldsContainer}>
			<Typography className={classes.title}>Musify</Typography>
			<FormControl className={classes.menu} fullWidth>
				<InputLabel
					className={classes.titleMenu}
					id="demo-simple-select-label"
				>
					בחר משתמש להתחברות
				</InputLabel>
				<Select
					className={classes.select}
					value={currentUser?.id || ''}
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
