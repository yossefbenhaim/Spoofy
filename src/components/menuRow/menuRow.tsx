import React from 'react';

import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { VariantType, useSnackbar } from 'notistack';
import { useAppSelector } from 'redux/store';
import { ErrorMessage } from './errorMassege';
import { useMutation } from '@apollo/client';
import { Playlist } from 'models/interface/playlist';

import findSongNameById from 'utils/findSongById';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './menuRowStyles';
import useStylesCommon from 'common/commonStyles';

interface Props {
	rowId: string
}

const MenuRow: React.FC<Props> = (props) => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();
	const { rowId } = props

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);

	const openMenu = Boolean(anchorEl);
	const playlists = useAppSelector((state) => state.playlists.playlists);
	const songs = useAppSelector((state) => state.songs.songs);
	const { enqueueSnackbar } = useSnackbar();

	const handleQueryMessage = (variant: VariantType, songName: string, playlistName: string) => {
		variant == 'success' ?
			enqueueSnackbar(playlistName + ErrorMessage.songAddToPlaylist + songName, { variant })
			:
			enqueueSnackbar(playlistName + ErrorMessage.songAlreadyFound + songName, { variant })
	}

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () =>
		setAnchorEl(null);

	const handlePlaylistSelect = (playlisId: string, playlistName: string) => {
		const songName = findSongNameById(songs, rowId)
		mutationAddPlaylistSong({
			variables: {
				playlistId: playlisId,
				songId: rowId
			},
			onCompleted: () => {

				handleQueryMessage('success', songName as string, playlistName)
			},
			onError: () => {
				handleQueryMessage('error', songName as string, playlistName)
			}
		})
		handleClose();
	};

	return (
		<>
			<IconButton
				className={classes.addIcon}
				onClick={handleMenuClick}
			>
				<AddIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				className={`${classes.menuContainer} ${classesCommon.scrollbar}`}
			>
				<Typography className={classes.menuTitle}>הוסף לפלייליסט</Typography>
				{playlists.map((playlist: Playlist) =>
					<MenuItem
						divider
						className={classes.item}
						key={playlist.id}
						onClick={() =>
							handlePlaylistSelect(
								playlist.id as string, playlist.name
							)}>
						{playlist.name}
					</MenuItem>
				)}
			</Menu>
		</>
	);
};

export default MenuRow;
