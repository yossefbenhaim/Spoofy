import React, { useState } from 'react';
import useStyles, { MaterialUISwitch } from './settingStyles';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStylesCommon from 'common/commonStyles';
import FormControlLabel from '@mui/material/FormControlLabel';

import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/slice/themeMode';
import { useAppSelector } from 'redux/store';
import DialogDeleteUser from 'components/setting/dialogDeleteUser/dialogDeleteUser';

const Settings: React.FC = () => {
	const { classes } = useStyles()
	const { classes: classesCommon } = useStylesCommon();
	const dispatch = useDispatch();

	const [openDialogDelete, setOpenDialog] = useState<boolean>(false);
	const [checked, setChecked] = React.useState(true);

	const isDrakMode = useAppSelector((state) => state.themeMode.mode);
	const currentUser = useAppSelector((state) => state.currentUser);

	const handleChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
		setChecked(checked);
		dispatch(setThemeMode({ mode: !isDrakMode }))
	};

	const handleClickOpenDeleteDialog = () =>
		setOpenDialog(true);

	return <div className={classes.containerFields}>
		<div className={classes.titleContainer}>
			<Typography className={classes.title}>הגדרות</Typography>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>מחק משתמש</Typography>
				<Typography className={classes.content}>לחיצה על מחיקה תמחק את התמשתמש לצמיתות</Typography>
			</div>
			<Button onClick={handleClickOpenDeleteDialog} className={classesCommon.genericButton}>
				<Typography >מחק</Typography>
				<DeleteOutlineIcon />
			</Button>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>שנה צבע</Typography>
				<Typography className={classes.content} >בחר מצב תצוגת צבעים</Typography>
			</div>
			<FormControlLabel
				control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
				label=""
				checked={checked}
				onChange={handleChange}
			/>
		</div>
		<DialogDeleteUser
			openDialogDelete={openDialogDelete}
			setOpenDialog={setOpenDialog}
			currentUser={currentUser.user}
		/>
	</div>;
};

export default Settings;
