import React from 'react';

import { useAppSelector } from 'redux/store';
import { Typography } from '@mui/material';
import { TablesIds } from 'models/enums/tablesIds';
import { Song } from 'models/interface/song';

import useStyles from './songsTableStyles';
import AddSong from 'components/addSong/addSong';

import CustomSongsTable from 'common/customSongsTable/customSongsTable';
import useStylesCommon from 'common/commonStyles';

const SongsTable: React.FC = () => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();

	const songs = useAppSelector((state) => state.songs.songs);

	return (
		<div className={classes.fieldContainer}>
			<div className={classesCommon.headerContainer}>
				<Typography className={classesCommon.header}>רשימת השירים</Typography>
			</div>
			<CustomSongsTable tableId={TablesIds.songsIds} tableSongs={songs.map((song: Song) => song.id)} />
			<div className={classes.addSongBtnContainer}>
				<AddSong />
			</div>
		</div>
	);
};

export default SongsTable;
