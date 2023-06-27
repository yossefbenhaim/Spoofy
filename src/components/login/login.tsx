import React, { useEffect, useState } from 'react';
import {
	Button,
	MenuItem,
	Typography,
	InputLabel,
	FormControl,
	Select,
	SelectChangeEvent
} from '@mui/material';

import { VariantType, useSnackbar } from 'notistack';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/slice/currentUser';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';

import FeedbackMessage from 'models/emuns/feedbackMessage';
import User from 'models/interface/user';
import PathName from 'models/emuns/pathName';

import IconHome from 'components/lottie/iconHome/iconHome';
import GET_USERS from 'queries/query/users';
import useStyles from './loginStyles';

const Login: React.FC = () => {
	const { classes } = useStyles();
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const [users, setUsers] = useState<User[] | undefined>([]);
	const [userSelectId, setUserSelectId] = useState<string | undefined>(undefined)
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		if (currentUser?.id != undefined)
			navigation(PathName.library + PathName.songs)
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

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.mustSelectUser, { variant });


	const handleConnect = () => {
		const userSelect: User | undefined = users?.find((user) => user.id === userSelectId);
		if (userSelect?.id) {
			dispatch(setUser(userSelect))
			navigation(PathName.library + PathName.songs);
		} else
			handleQueryMessage('error')
	};

	const handleChange = (event: SelectChangeEvent) =>
		setUserSelectId(event.target.value)

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.titleContainer}>
				<div className={classes.iconHomeContainer}>
					<IconHome />
				</div>
				<div className={classes.titleNameContainer}>
					<Typography className={classes.title}>Musify</Typography>
				</div>
			</div>
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
				onClick={handleConnect}
				className={classes.btn}
				variant="contained"
			>
				התחבר
			</Button>
		</div>
	);
};

export default Login;
