import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './loginStyles';
import { Button, MenuItem, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser } from 'redux/store';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import AlertUser from 'components/alert/alertUser';
export interface State extends SnackbarOrigin {
	open: boolean;
}
import GET_USERS from 'queries/query/getAllUser';
import User from 'models/interface/user';

const Login: React.FC = () => {
	const { classes } = useStyles();
	const [users, setUsers] = useState<User[]>([]);
	const currentUser = useSelector((state: CurrentUser) => state.currentUser.user?.id);
	const dispatch = useDispatch();
	const navigatoin = useNavigate();
	console.log(currentUser, "kjbkj");

	const [state, setState] = React.useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	useQuery(GET_USERS, {
		onCompleted: (data) => {
			setUsers(data.allUsers.nodes);
		},
	});

	const handleClick = (newState: SnackbarOrigin) => () => {
		if (currentUser) {
			navigatoin('firstPage/songs');
		}
		else {
			setState({ open: true, ...newState });
		}
	};

	const handleChange = (event: SelectChangeEvent) => {
		// להסתכל אצל שמואל זה אותו 
		const user: any = users.find((user) => user.id === event.target.value);
		dispatch(
			setUser({
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
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
					value={currentUser}
					label="בחר משתמש להתחברות"
					onChange={handleChange}
				>
					{users.map((user) => {
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
			<AlertUser setState={setState} state={state} />
		</div>
	);
};

export default Login;
