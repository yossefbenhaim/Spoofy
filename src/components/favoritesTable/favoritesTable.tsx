import React, { useMemo } from 'react';
import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';

import TablesIds from 'models/emuns/tablesIds';
import Song from 'models/interface/song';

import useStyles from './favoritesTableStyles';
import GenericTable from 'common/genericTable/genericTable';

const FavoritesTable: React.FC = () => {
	const { classes } = useStyles();
	const songs = useAppSelector((state) => state.songs.songs);
	const favorites = useAppSelector((state) => state.favorites.favorites);

	const filterFavoritesSong = useMemo<Song[]>(() => (
		songs.filter((song) =>
			favorites?.some((favorite) => song.id === favorite.songId)
		)
	), [favorites, songs])

	return (
		<div className={classes.fieldContainer}>
			<div className={classes.headerContainer}>
				<Typography className={classes.header}>מועדפים</Typography>
			</div>
			<GenericTable tableId={TablesIds.favorits} genericSongs={filterFavoritesSong} />
			<div className={classes.spaceDivBettwenSlider}>
			</div>
		</div>
	);
};

export default FavoritesTable;
