import React, { useEffect, useMemo, useState, } from 'react';
import {
	Button,
	Typography,
	TextField,
	Dialog,
	Chip,
	Checkbox,
	Autocomplete
} from '@mui/material';

import { VariantType, useSnackbar } from 'notistack';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { AddOrUpdatePlaylistForm } from './schamaDialogCreateOrUpdate';
import { useAppSelector } from 'redux/store';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

import ADD_PLAYLIST from 'queries/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import UPDATE_PLAYLIST_NAME from 'queries/mutation/updatePlaylistName';
import DELETE_PLAYLIST_SONG from 'queries/mutation/deletePlaylistSong';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import Song from 'models/interface/song';

import AddOrUpdatePlaylistSchema from './schamaDialogCreateOrUpdate';
import SnakbarMessage from './snakbarMessage';

import findSongNameById from 'utils/findSongById';
import useStyles from './genericDialogCreateOrUpdateStyles';
import Playlist from 'models/interface/playlist';
import { difference } from 'lodash';

interface Props {
	openDialogAddPlaylist: boolean,
	currentPlaylist: Playlist | undefined,
	handleClose: () => void,
}

const GenericDialogCreateOrUpdate: React.FC<Props> = (props) => {
	const { classes } = useStyles();
	const { currentPlaylist, handleClose, openDialogAddPlaylist } = props

	const { enqueueSnackbar } = useSnackbar();
	const [mutationAddSong] = useMutation(ADD_PLAYLIST);
	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);
	const [mutationDeletePlaylistSong] = useMutation(DELETE_PLAYLIST_SONG);
	const [mutationUpdatePlaylistName] = useMutation(UPDATE_PLAYLIST_NAME);

	const songs = useAppSelector((state) => state.songs.songs);
	const currentUser = useAppSelector((state) => state.currentUser.user?.id);

	const defaultDialogValues = {
		name: currentPlaylist?.name,
		songs: currentPlaylist?.songs,
	}



	const { handleSubmit, reset, setValue, getValues, control, formState: { errors } } = useForm<AddOrUpdatePlaylistForm>({
		resolver: zodResolver(AddOrUpdatePlaylistSchema),
		defaultValues: {
			name: defaultDialogValues.name,
			songs: defaultDialogValues.songs
		},

	});


	useEffect(() => {
		// if (!openDialogAddPlaylist) {
		// 	reset({ name: '', songs: [] })
		// }
		reset(defaultDialogValues)
		// currentPlaylist ? reset(defaultDialogValues) : reset({ name: '', songs: [] })
	}, [openDialogAddPlaylist, currentPlaylist])


	const handleQueryMessage = (variant: VariantType) =>
		currentPlaylist?.name ?
			enqueueSnackbar(SnakbarMessage.UpdatePlaylist, { variant })
			:
			enqueueSnackbar(SnakbarMessage.addNewPlaylist, { variant })

	const onSubmit: SubmitHandler<AddOrUpdatePlaylistForm> = (data) => {

		const { name, songs } = data;

		if (currentPlaylist === undefined) {
			mutationAddSong({
				variables: {
					name: name,
					creatorId: currentUser,
				},
			}).then((res) => {
				const newPlaylistId = res.data.createPlaylist.playlist.id
				songs.map((song) => {
					mutationAddPlaylistSong({
						variables: {
							playlistId: newPlaylistId,
							songId: song,
						},
					})
				})
			})
				.catch((err) => console.error('Failed to add song: ', err));
		}

		else {

			const deleteSongs = difference(defaultDialogValues.songs, songs)
			const newSongs = difference(songs, defaultDialogValues.songs as string[])




			if (deleteSongs.length > 0)
				console.log('delete', deleteSongs);

			deleteSongs.map((song) => {
				mutationDeletePlaylistSong({ variables: { playlistId: currentPlaylist.id, songId: song } })
			})

			if (newSongs.length > 0)
				console.log("new", newSongs);

			newSongs.map((song) => {
				mutationAddPlaylistSong({ variables: { playlistId: currentPlaylist.id, songId: song } })
			})

			if (name !== currentPlaylist?.name)
				mutationUpdatePlaylistName({ variables: { id: currentPlaylist.id, name: name } })
		}

		handleQueryMessage('success')
		handleClose();
	};

	return (
		<>
			<Dialog
				open={openDialogAddPlaylist}
				onClose={() => { handleClose() }}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<Typography className={classes.header}>{'titelName'}</Typography>
						<Controller
							name={AddPlaylistFormFieldName.name}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									className={classes.input}
									label="שם הפלייליסט"
									variant="standard"
									{...field}
									error={!!error}
									helperText={errors.name &&
										<span className={classes.error}>
											{errors.name.message}</span>}
								/>
							)}
						/>
						<Controller
							name={AddPlaylistFormFieldName.songs}
							control={control}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<Autocomplete
									multiple
									fullWidth
									disableCloseOnSelect
									openOnFocus
									filterSelectedOptions
									options={songs.map((song) => song.id)}
									className={classes.autocomplete}
									getOptionLabel={(option) => findSongNameById(songs, option) as string}
									value={value}

									renderTags={(value, getTagProps) =>
										value.map((option, index) => (
											<Chip
												variant="outlined"
												label={findSongNameById(songs, option)}
												size="small"
												{...getTagProps({ index })}
												className={classes.selectedSong}
											/>
										))
									}
									renderOption={(props, option, { selected }) => (
										<li className={classes.checkBoxSongs} {...props} key={option}>
											<Checkbox
												className={classes.checkBoxSongs}
												icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
												checkedIcon={<CheckBoxIcon fontSize="small" />}
												checked={selected}
												key={option}
											/>
											{findSongNameById(songs, option)}
										</li>
									)}
									renderInput={(params) => (
										<TextField
											className={classes.songsInput}
											{...params}
											error={!!error}
											variant="standard"
											label="שירים"
											placeholder="Favorites"
											helperText={errors.songs && (
												<span className={classes.error}>{errors.songs.message}</span>
											)}
										/>
									)}
									onChange={(_, selectedSongs) =>
										onChange(selectedSongs)
									}
								/>
							)}
						/>
						<Button
							className={classes.submitButton}
							variant="contained"
							type="submit"
						>
							צור שיר
						</Button>
					</div>
				</form>
			</Dialog>
		</>
	);
};

export default GenericDialogCreateOrUpdate;