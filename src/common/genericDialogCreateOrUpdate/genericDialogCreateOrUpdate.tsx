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

interface Props {
	titelName: string,
	playlistName: string,
	choseSongs: Song[] | undefined,
	playlistId: string,
}

const GenericDialogCreateOrUpdate: React.FC<Props> = (props) => {
	const { classes } = useStyles();
	const { playlistName, choseSongs, titelName, playlistId } = props
	const { enqueueSnackbar } = useSnackbar();

	const [openDialogAddPlaylist, setOpenDialogAddPlaylist] = useState<boolean>(false);
	const [mutationAddSong] = useMutation(ADD_PLAYLIST);
	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);
	const [mutationDeletePlaylistSong] = useMutation(DELETE_PLAYLIST_SONG);
	const [mutationUpdatePlaylistName] = useMutation(UPDATE_PLAYLIST_NAME);

	const songs = useAppSelector((state) => state.songs.songs);
	const currentUser = useAppSelector((state) => state.currentUser.user?.id);

	const indexOfChoseSongs = useMemo<number[] | undefined>(() => {
		return choseSongs?.map((choseSong) =>
			songs.findIndex((song) => song.id === choseSong.id)
		)
	}, [choseSongs])

	const songsId = useMemo<string[]>(() => {
		return songs.map((song) => song.id)
	}, [songs])

	const defaultDialogValues = {
		[AddPlaylistFormFieldName.name]: playlistName,
		[AddPlaylistFormFieldName.songs]: choseSongs ? indexOfChoseSongs?.map((index) =>
			songsId[index]) : [],
	}

	useEffect(() => {
		if (!openDialogAddPlaylist)
			reset({ ...defaultDialogValues })
	}, [openDialogAddPlaylist])

	const { handleSubmit, formState: { errors }, reset, control } = useForm<AddOrUpdatePlaylistForm>({
		resolver: zodResolver(AddOrUpdatePlaylistSchema),
		defaultValues: {
			...defaultDialogValues
		},
	});

	const handleQueryMessage = (variant: VariantType) =>
		playlistName ?
			enqueueSnackbar(SnakbarMessage.UpdatePlaylist, { variant })
			:
			enqueueSnackbar(SnakbarMessage.addNewPlaylist, { variant })

	const handleClickOpen = () =>
		setOpenDialogAddPlaylist(true);

	const handleClose = () =>
		setOpenDialogAddPlaylist(false);

	//  return new songs that not was in chose
	const newAddedSongs = (newSongs: string[]) => {
		return newSongs.filter((newSong) =>
			!choseSongs?.some((song) => song.id === newSong)
		);
	}

	//  return delete songs
	const oldSongsToDelete = (newSongs: string[]) => {
		return choseSongs?.filter((song) =>
			!newSongs.some((newSong) => song.id === newSong)
		);
	}

	const onSubmit: SubmitHandler<AddOrUpdatePlaylistForm> = (data) => {
		const { name, songs } = data;
		if (name && !playlistId && !playlistName) {
			mutationAddSong({
				variables: {
					name: name,
					creatorId: currentUser,
				},
			}).then((resAddPlaylist) => {
				songs.map((song) => {
					mutationAddPlaylistSong({
						variables: {
							playlistId: resAddPlaylist.data.createPlaylist.playlist.id,
							songId: song,
						},
					})
				})
			})
				.catch((err) => console.error('Failed to add song: ', err));
		}
		else {
			const deleteSongs = oldSongsToDelete(songs)
			const newSongs = newAddedSongs(songs)

			if (deleteSongs)
				deleteSongs.map((song) => {
					mutationDeletePlaylistSong({ variables: { playlistId: playlistId, songId: song.id } })
				})

			if (newSongs)
				newSongs.map((song) => {
					mutationAddPlaylistSong({ variables: { playlistId: playlistId, songId: song } })
				})

			if (name !== playlistName)
				mutationUpdatePlaylistName({ variables: { id: playlistId, name: name } })
		}
		handleQueryMessage('success')
		handleClose();
	};

	return (
		<>
			{
				Boolean(playlistId) ?
					<EditIcon onClick={handleClickOpen} />
					:
					<Button
						variant="contained"
						onClick={handleClickOpen}
						className={classes.addSongBtn}
					>
						+ צור פלייליסט חדש
					</Button>
			}
			<Dialog
				open={openDialogAddPlaylist}
				onClose={handleClose}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<Typography className={classes.header}>{titelName}</Typography>
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
									freeSolo
									options={songsId}
									className={classes.autocomplete}
									getOptionLabel={(option) => findSongNameById(songs, option) as string}
									value={value}
									onChange={(event, selectedSongs) => {
										onChange(selectedSongs)
									}}
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