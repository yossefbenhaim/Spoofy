import React, { useEffect, } from 'react';
import {
	Button,
	Typography,
	TextField,
	MenuItem,
	InputLabel,
	FormHelperText,
	FormControl,
	Select,
	Dialog
} from '@mui/material';

import { AddSongFormFieldsNames } from 'models/enums/formFieldsName';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddSongForm } from './AddSongSchema';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useQuery } from '@apollo/client';
import { Dayjs } from 'dayjs';

import AddSongSchema from './AddSongSchema';
import GET_ARTIST from 'queries/query/artists';
import useStyles from './addSongStyles';
import ConvertToMilliseconds from 'utils/convertToMilliseconds';
import useStylesCommon from 'common/commonStyles';
import useAddSong from './useAddSong';

const AddSong: React.FC = () => {
	const { classes, cx } = useStyles();
	const { classes: classesCommon } = useStylesCommon();

	const {
		defaultDialogValues,
		artists,
		openDialogAddSong,
		handleClickOpen,
		handleClose,
		onSubmit,
		setArtists
	} = useAddSong()

	const { handleSubmit, formState: { errors }, reset, control } = useForm<AddSongForm>({
		resolver: zodResolver(AddSongSchema),
		defaultValues: {
			...defaultDialogValues
		},
	});

	useEffect(() => {
		if (!openDialogAddSong)
			reset({ ...defaultDialogValues })
	}, [openDialogAddSong])

	useQuery(GET_ARTIST, {
		onCompleted: (data) => {
			setArtists(data.allArtists.nodes);
		},
	});

	return (
		<>
			<Button
				variant="contained"
				onClick={handleClickOpen}
				className={classesCommon.addButton}
			>
				+ צור שיר
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
							name={AddSongFormFieldsNames.name}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									className={classesCommon.input}
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
							name={AddSongFormFieldsNames.artist}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<FormControl
									className={classes.menu}
									variant="standard"
								>
									<InputLabel error={!!error} className={classes.titleMenu} >
										בחר זמר
									</InputLabel>
									<Select
										variant="standard"
										{...field}
										className={classes.select}
										onChange={(event) => field.onChange(event.target.value)}
									>
										{artists.map((artist) => {
											return (
												<MenuItem
													className={classes.menuItem}
													key={artist.id}
													value={artist.id}
												>
													{artist.name}
												</MenuItem>
											);
										})}
									</Select>
									<FormHelperText
										className={classes.error}>
										{error &&
											<span className={classes.error}>
												{error.message}</span>}
									</FormHelperText>
								</FormControl>
							)}
						/>
						<Controller
							name={AddSongFormFieldsNames.duration}
							control={control}
							render={({ field: { onChange } }) => (
								<TimeField
									onChange={(time: Dayjs | null) => {
										const formattedTime: number =
											ConvertToMilliseconds(time?.minute(), time?.second())
										onChange(formattedTime);
									}}
									className={cx(classesCommon.input, {
										[classesCommon.errorInput]: !!errors.duration
									})}
									label="Duration"
									variant="standard"
									format='mm:ss'
									helperText={errors.duration &&
										<span className={classes.error}>
											{errors.duration.message}</span>}
								/>
							)}
						/>
						<div className={classesCommon.submitButtonContainer}>
							<Button
								className={classesCommon.submitButton}
								variant="contained"
								type="submit"
							>
								🎵 צור שיר
							</Button>
						</div>

					</div>
				</form>
			</Dialog>
		</>
	);
};

export default AddSong;