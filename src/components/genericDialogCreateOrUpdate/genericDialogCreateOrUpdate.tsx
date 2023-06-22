import React, { useEffect, useMemo, useState, } from 'react';
import {
	Button,
	Typography,
	TextField,
	Dialog,
	Chip
} from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { VariantType, useSnackbar } from 'notistack';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useSubscription } from '@apollo/client';
import { AddOrUpdatePlaylistForm } from './schamaDialogCreateOrUpdate';
import { useAppSelector } from 'redux/store';
import { addPlaylist, updatePlaylistSongs, deleteSongsPlaylist, updatePlaylistName } from 'redux/slice/playlists';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import ADD_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/addPlaylistSongSubscription';
import ADD_PLAYLIST_SUBSCRIPTION from 'queries/subscription/addPlaylistSubscription';
import DELETE_PLAYLIST_SONG_SUBSCRIPTION from 'queries/subscription/deletePlaylistSongSubscription';
import UPDATE_PLAYLIST_NAME_SUBSCRIPTION from 'queries/subscription/updatePlaylistNameSubscription';

import ADD_PLAYLIST from 'queries/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from 'queries/mutation/addPlaylistSong';
import UPDATE_PLAYLIST_NAME from 'queries/mutation/updatePlaylistName';
import FeedbackMessage from 'models/emuns/feedbackMessage';
import AddPlaylistFormFieldName from 'models/emuns/addPlaylistFormFieldName';
import useStyles from './genericDialogCreateOrUpdateStyles';

import AddOrUpdatePlaylistSchema from './schamaDialogCreateOrUpdate';
import Song from 'models/interface/song';
import DELETE_PLAYLIST_SONG from 'queries/mutation/deleteFavorite';

interface Props {
	titelName: string,
	playlistName: string,
	choseSongs: Song[],
	playlistId: string,
}

const AddPlaylist: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const { playlistName, choseSongs, titelName, playlistId } = props
	const { enqueueSnackbar } = useSnackbar();
	const songs = useAppSelector((state) => state.songs.songs);
	const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);

	const defaultDialogValues = {
		[AddPlaylistFormFieldName.name]: playlistName,
		[AddPlaylistFormFieldName.songs]: [],
	}

	const currentUser = useAppSelector((state) => state.currentUser.user?.id);
	const [mutationAddSong] = useMutation(ADD_PLAYLIST);
	const [mutationAddPlaylistSong] = useMutation(ADD_PLAYLIST_SONG);
	const [mutationDeletePlaylistSong] = useMutation(DELETE_PLAYLIST_SONG);
	const [mutationUpdatePlaylistName] = useMutation(UPDATE_PLAYLIST_NAME);

	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	const { handleSubmit, formState: { errors }, reset, control } = useForm<AddOrUpdatePlaylistForm>({
		resolver: zodResolver(AddOrUpdatePlaylistSchema),
		defaultValues: {
			...defaultDialogValues
		},
	});

	const songsId = useMemo<string[]>(() => {
		return songs.map((song) => song.id)
	}, [songs])

	const indexOfChoseSongs = useMemo<number[]>(() => {
		return choseSongs.map((choseSong) =>
			songs.findIndex((song) => song.id === choseSong.id)
		)
	}, [choseSongs])

	useEffect(() => {
		if (!openDialogAddSong)
			reset({ ...defaultDialogValues })
	}, [openDialogAddSong])

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.createdSong, { variant });


	//  return new songs that not was in chose
	const newAddedSongs = (newSongs: string[]) => {
		return newSongs.filter((newSong) =>
			!choseSongs.some((song) => song.id === newSong)
		);
	}

	//  return delete songs
	const oldSongsToDelete = (newSongs: string[]) => {
		return choseSongs.filter((song) =>
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
			handleQueryMessage('success')
		}

		else {
			const deleteSongs = oldSongsToDelete(songs)
			const newSongs = newAddedSongs(songs)

			if (deleteSongs) {
				deleteSongs.map((song) => {
					mutationDeletePlaylistSong({
						variables: {
							playlistId: playlistId,
							songId: song.id
						}
					})
				})
			}

			if (newSongs) {
				newSongs.map((song) => {
					mutationAddPlaylistSong({
						variables: {
							playlistId: playlistId,
							songId: song
						}
					})
				})
			}
			if (name !== playlistName) {
				mutationUpdatePlaylistName({
					variables: {
						id: playlistId,
						name: name
					}
				})
			}

		}

		handleClose();
	};


	useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
		onData: (data) => {
			const playlistsInsertData = data.data.data.listen.relatedNode;
			const playlistId = playlistsInsertData.id;
			const playlistName = playlistsInsertData.name;
			const creatorId = playlistsInsertData.creatorId;

			dispatch(
				addPlaylist({
					id: playlistId,
					name: playlistName,
					creatorId: creatorId,
					songs: [],
				})
			);

		},
	});

	useSubscription(DELETE_PLAYLIST_SONG_SUBSCRIPTION, {
		onData: (data) => {
			const decodedText = window.atob(data.data.data.listen.relatedNodeId as string);
			const parsedData = JSON.parse(decodedText);
			const playlistId = parsedData[1]
			const songId = parsedData[2]
			dispatch(deleteSongsPlaylist({
				playlistId: playlistId,
				songsId: songId
			}))

		},
	});



	useSubscription(ADD_PLAYLIST_SONG_SUBSCRIPTION, {
		onData: (data) => {
			const playlistSongInsertData = data.data.data.listen.relatedNode;
			const playlistId = playlistSongInsertData.playlistId;
			const songId = playlistSongInsertData.songId;

			dispatch(updatePlaylistSongs({
				playlistId: playlistId,
				songsId: songId,
			}))
		},
	});
	// 
	useSubscription(UPDATE_PLAYLIST_NAME_SUBSCRIPTION, {
		onData: (data) => {
			const playlistSongInsertData = data.data.data.listen.relatedNode;
			const id = playlistSongInsertData.id;
			const name = playlistSongInsertData.name;

			dispatch(updatePlaylistName({
				id: id,
				name: name,
				creatorId: '',
				songs: []

			}))
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
				open={openDialogAddSong}
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
							render={({ field: { onChange }, fieldState: { error } }) => (

								<Autocomplete
									multiple
									fullWidth
									disableCloseOnSelect
									openOnFocus
									freeSolo
									options={songsId}
									className={classes.autocomplete}
									getOptionLabel={(option) => findSongById(option) as string}
									defaultValue={indexOfChoseSongs.map((index) =>
										songsId[index]
									)}
									onChange={(event, selectedSongs) => {
										onChange(selectedSongs)
									}}
									renderTags={(value, getTagProps) =>
										value.map((option, index) => (
											<Chip
												variant="outlined"
												label={findSongById(option)}
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
												icon={icon}
												checkedIcon={checkedIcon}
												checked={selected}
												key={option}
											/>
											{findSongById(option)}
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

export default AddPlaylist;