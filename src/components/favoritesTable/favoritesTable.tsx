import React from 'react';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';
import { TablesIds } from 'models/enums/tablesIds';
import { Favorite } from 'models/interface/favorite';

import useStyles from './favoritesTableStyles';
import useStylesCommon from 'common/commonStyles';
import CustomSongsTable from 'common/customSongsTable/customSongsTable';

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
				<CustomSongsTable
					tableId={TablesIds.favorits}
					tableSongs={favorites.map((favorite: Favorite) => favorite.songId)} />
			</div>
		</div>
	);
};

export default FavoritesTable;
