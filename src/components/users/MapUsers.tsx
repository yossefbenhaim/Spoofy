import { Typography } from '@mui/material';

import React from 'react';
import useStyles from './mapUsersStyles';
import useStylesCommon from 'common/commonStyles';
import Map from 'components/map/Map';

const MapUsers: React.FC = () => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();

	return (
		<div className={classes.fieldContainer}>
			<div className={classesCommon.headerContainer}>
				<Typography className={classesCommon.header}>משתמשים</Typography>
			</div>
			<>
				<Map />
			</>
		</div>
	);
};

export default MapUsers;
