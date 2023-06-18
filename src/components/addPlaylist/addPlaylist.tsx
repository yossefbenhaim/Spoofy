import React, { useEffect, useMemo, useState, } from 'react';
import {
	Button,
	Typography,
	TextField,
	Dialog
} from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { VariantType, useSnackbar } from 'notistack';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useSubscription, OnDataOptions } from '@apollo/client';
import { AddPlaylistForm } from './addPlaylistSchema';
import { useAppSelector } from 'redux/store';
import { addPlaylist, updateSongsPlaylist } from 'redux/slice/playlists';

import ADD_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/addPlaylistSongSubscription';
import ADD_PLAYLIST_SUBSCRIPTION from 'queries/subscription/addPlaylistSubscription';
import ADD_PLAYLIST from 'queries/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import FeedbackMessage from 'models/emuns/feedbackMessage';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import useStyles from './addPlaylistStyles';

import AddPlaylistSong from 'models/interface/addPlaylistSong';
import AddPlaylistSchema from './addPlaylistSchema';
import AddSongFormFieldsNames from 'models/emuns/formFieldsName';
import Song from 'models/interface/song';

const defaultDialogValues = {
	[AddPlaylistFormFieldName.name]: '',
	[AddSongFormFieldsNames.name]: '',
	[AddSongFormFieldsNames.artist]: '',
	[AddSongFormFieldsNames.duration]: 0,
}

const AddPlaylist: React.FC = () => {
	const dispatch = useDispatch();
	const { classes, cx } = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const songs = useAppSelector((state) => state.songs.songs);
	const currentUser = useAppSelector((state) => state.currentUser.user?.id);


	const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);
	const [mutationAddSong] = useMutation(ADD_PLAYLIST);
	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);


	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	const { handleSubmit, formState: { errors }, reset, control } = useForm<AddPlaylistForm>({
		resolver: zodResolver(AddPlaylistSchema),
		defaultValues: {
			...defaultDialogValues
		},
	});

	const songsId = useMemo<string[]>(() => {
		return songs.map((song) => song.id)
	}, [songs])

	useEffect(() => {
		if (!openDialogAddSong)
			reset({ ...defaultDialogValues })
	}, [openDialogAddSong])

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.createdSong, { variant });

	const onSubmit: SubmitHandler<AddPlaylistForm> = (data) => {
		const { name, songs } = data;

		if (name) {
			mutationAddSong({
				variables: {
					name: name,
					creatorId: currentUser,
				},
			})
			handleQueryMessage('success')

		}

		handleClose();
	};


	useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
		onData: (data) => {
			console.log(data)
		},
	});


	const findSongById = (songId: string) => {
		const song: Song | undefined = songs.find((song) => song.id === songId);

		return song?.name;
	};

	const handleClickOpen = () =>
		setOpenDialogAddSong(true);

	const handleClose = () =>
		setOpenDialogAddSong(false);


	return (
		<>
			<Button
				variant="contained"
				onClick={handleClickOpen}
				className={classes.addSongBtn}
			>
				+ צור פלייליסט חדש
			</Button>
			<Dialog
				open={openDialogAddSong}
				onClose={handleClose}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<Typography className={classes.header}>יצירת שיר</Typography>
						<Controller
							name={AddPlaylistFormFieldName.name}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									className={classes.input}
									label="שם השיר"
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
									value={value || []}
									onChange={(event, selectedSongs) => {
										onChange(selectedSongs)
									}}
									options={songsId}

									getOptionLabel={(option) => findSongById(option) as string}
									openOnFocus
									disableCloseOnSelect
									renderOption={(props, option, { selected }) => (
										<li {...props} key={option}>
											<Checkbox
												icon={icon}
												checkedIcon={checkedIcon}
												checked={selected}
												key={option}
											/>
											{findSongById(option)}
										</li>
									)}
									style={{ width: 500 }}
									renderInput={(params) => (
										<TextField
											{...params}
											error={!!error}

											label="Songs"
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

export default AddPlaylist;