import React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { useAppSelector } from 'redux/store';
import { useMutation, useSubscription, OnDataOptions } from '@apollo/client';
import { useDispatch } from 'react-redux';

import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './menuRowStyles';

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

	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();

		setAnchorEl(event.currentTarget);
	}

	const handleClose = () =>
		setAnchorEl(null);

	const handlePlaylistSelect = (playlisId: string) => {
		mutationAddPlaylistSong({
			variables: {
				playlistId: playlisId,
				songId: rowId
			},
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
			>
				{playlists.map((playlist) =>
					<MenuItem key={playlist.id} onClick={() => handlePlaylistSelect(playlist.id as string)}>{playlist.name}</MenuItem>
				)}
			</Menu>
		</>
	);
};

export default MenuRow;
