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
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { useAppSelector } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PathName } from 'models/enums/pathName';
import { setUser } from 'redux/slice/currentUser';
import { User } from 'models/interface/user';

import IconHome from 'components/lottie/iconHome/iconHome';
import useStyles from './loginStyles';
import usersQuery from './usersQueary';

const Login: React.FC = () => {
	usersQuery();
	const { classes } = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const [userSelectId, setUserSelectId] = useState<string | undefined>(undefined)

	const navigation = useNavigate();
	const dispatch = useDispatch();

	const users = useAppSelector((state) => state.users.users);
	const currentUser = useAppSelector((state) => state.currentUser.user);

	useEffect(() => {
		if (currentUser?.id != undefined)
			navigation(PathName.library + PathName.songs)
	}, [currentUser])

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.mustSelectUser, { variant });


	const handleConnect = () => {
		const userSelect: User | undefined = users?.find((user: User) => user.id === userSelectId);
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
					{users?.map((user: User) => {
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