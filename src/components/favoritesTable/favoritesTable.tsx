import React from 'react';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import TablesIds from 'models/emuns/tablesIds';
import useStyles from './favoritesTableStyles';
import useStylesCommon from 'common/comonStyles';
import GenericTable from 'common/genericTable/genericTable';

const FavoritesTable: React.FC = () => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();
	const favorites = useAppSelector((state) => state.favorites.favorites);

	return (
		<div className={classes.fieldContainer}>
			<div className={classesCommon.headerContainer}>
				<Typography className={classesCommon.header}>מועדפים</Typography>
			</div>
			<div className={classes.dataGridContainer}>
				<GenericTable
					tableId={TablesIds.favorits}
					songsId={favorites.map((favorite) => favorite.songId)} />
			</div>
		</div>
	);
};

export default FavoritesTable;
