import React from 'react';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { useAppSelector } from 'redux/store';
import { useMutation, useSubscription, OnDataOptions } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';
import ErrorMessage from './errorMassege';

import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './menuRowStyles';
import Song from 'models/interface/song';

interface Props {
	rowId: string
}

const MenuRow: React.FC<Props> = (props) => {
	const { classes } = useStyles();
	const { rowId } = props
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const playlists = useAppSelector((state) => state.playlist.playlists);
	const songs = useAppSelector((state) => state.songs.songs);

	const { enqueueSnackbar } = useSnackbar();

	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);


	const findSongsByid = (songId: string) => {
		const song: Song | undefined = songs.find((song) => song.id === songId);
		return song?.name as string;
	}
	const handleQueryMessage = (variant: VariantType, songName: string, playlistName: string) =>
		enqueueSnackbar(playlistName + ErrorMessage.songAlreadyFound + songName, { variant });

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () =>
		setAnchorEl(null);

	const handlePlaylistSelect = (playlisId: string, playlistName: string) => {
		const songName = findSongsByid(rowId)
		mutationAddPlaylistSong({
			variables: {
				playlistId: playlisId,
				songId: rowId
			},
			onError: (error) => {
				handleQueryMessage('info', songName, playlistName)
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
				className={classes.menuContainer}

			>

				<Typography className={classes.menuTitle}>הוסף לפלייליסט</Typography>
				{playlists.map((playlist) =>
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
