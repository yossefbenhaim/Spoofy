import React from 'react';
import useStyles from './settingStyles';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStylesCommon from 'common/commonStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/slice/themeMode';
import { useAppSelector } from 'redux/store';

const Settings: React.FC = () => {
	const { classes } = useStyles()
	const { classes: classesCommon } = useStylesCommon();
	const dispatch = useDispatch();

	const [checked, setChecked] = React.useState(true);
	const isDrakMode = useAppSelector((state) => state.themeMode.isDrakMode);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		console.log('test');

		dispatch(setThemeMode({ isDrakMode: !isDrakMode }))
	};



	return <div className={classes.containerFields}>
		<div className={classes.titleContainer}>
			<Typography className={classes.title}>הגדרות</Typography>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>מחק משתמש</Typography>
				<Typography className={classes.content}>לחיצה על מחיקה תמחק את התמשתמש לצמיתות</Typography>
			</div>
			<Button className={classesCommon.addButton}>
				<Typography >מחק</Typography>
				<DeleteOutlineIcon />
			</Button>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>שנה צבע</Typography>
				<Typography className={classes.content} >בחר מצב תצוגת צבעים</Typography>
			</div>
			{/* <FormControlLabel
				control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
				label="MUI switch"
			/> */}
			<Switch
				className={classes.switchColor}
				checked={checked}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'controlled' }}
			/>
		</div>

	</div>;
};

export default Settings;
