import React, { useEffect } from 'react';

import {
	Button,
	Typography,
	TextField,
	Dialog,
	Chip,
	Checkbox,
	Autocomplete
} from '@mui/material';

import { GenericPlaylistDialogForm } from './schamaGenericPlaylistDialog';
import { AddPlaylistFormFieldName } from 'models/enums/addPlaylistFormFieldName';
import { VariablesDialogPlaylist } from 'models/enums/variablesDialogPlaylist';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Playlist } from 'models/interface/playlist';
import { Song } from 'models/interface/song';


import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import GenericPlaylistDialogSchema from './schamaGenericPlaylistDialog';

import findSongNameById from 'utils/findSongById';
import useStyles from './genericPlaylistDialogStyles';
import useStylesCommon from 'common/commonStyles';
import useGenericDialogPlaylist from './useGenericDialogPlaylist';

interface Props {
	openDialogAddPlaylist: boolean,
	currentPlaylist: Playlist | undefined,
	handleClose: () => void,
}

const GenericPlaylistDialog: React.FC<Props> = (props) => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();
	const { currentPlaylist, handleClose, openDialogAddPlaylist } = props
	const {
		defaultDialogValues,
		onSubmit,
		IS_EDIT,
		songs
	} = useGenericDialogPlaylist({ currentPlaylist, handleClose })

	const { handleSubmit, reset, control, formState: { errors } } = useForm<GenericPlaylistDialogForm>({
		resolver: zodResolver(GenericPlaylistDialogSchema),
		defaultValues: {
			name: defaultDialogValues.name,
			songs: defaultDialogValues.songs
		},
	});

	useEffect(() => {
		if (!openDialogAddPlaylist) {
			reset({ name: '', songs: [] })
		}
		reset(defaultDialogValues)
	}, [openDialogAddPlaylist])

	return (
		<>
			<Dialog
				open={openDialogAddPlaylist}
				onClose={() => { handleClose() }}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<Typography className={classes.header}>{
							IS_EDIT ?
								VariablesDialogPlaylist.update
								:
								VariablesDialogPlaylist.create}
						</Typography>
						<Controller
							name={AddPlaylistFormFieldName.name}
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									className={classesCommon.input}
									label="שם הפלייליסט"
									variant="standard"
									value={value || ''}
									onChange={onChange}
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
									options={songs.map((song: Song) => song.id)}
									className={classes.autocomplete}
									getOptionLabel={(option) => findSongNameById(songs, option) as string}
									value={value || []}
									renderTags={(value, getTagProps) =>
										value.map((option, index) => (
											<Chip
												variant="outlined"
												label={findSongNameById(songs, option)}
												size="small"
												{...getTagProps({ index })}
												className={classes.selectedPlaylist}
											/>
										))
									}
									renderOption={(props, option, { selected }) => (
										<li className={classes.checkBoxPlaylists} {...props} key={option}>
											<Checkbox
												className={classes.checkBoxPlaylists}
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
											className={classes.playlistInput}
											{...params}
											error={!!error}
											variant="standard"
											label="שירים"
											helperText={errors.songs && (
												<span
													className={classes.error}
												>
													{errors.songs.message}
												</span>
											)}
										/>
									)}
									onChange={(_, selectedSongs) =>
										onChange(selectedSongs as [string, ...string[]])
									}
								/>
							)}
						/>
						<div className={classesCommon.submitButtonContainer}>
							<Button
								className={classesCommon.submitButton}
								variant="contained"
								type="submit"
							>
								{IS_EDIT ?
									'✔ ' + VariablesDialogPlaylist.update
									:
									'🎧 ' + VariablesDialogPlaylist.create
								}
							</Button>
						</div>
					</div>
				</form>
			</Dialog>
		</>
	);
};

export default GenericPlaylistDialog;