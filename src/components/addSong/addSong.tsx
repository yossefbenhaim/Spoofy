import React, { useEffect, useState, } from 'react';
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

import { addSong } from 'redux/slice/songs';
import { VariantType, useSnackbar } from 'notistack';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useMutation } from '@apollo/client';

import GET_ARTIST from 'queries/query/artists';
import ADD_SONG from 'queries/mutation/addSong';

import Artist from 'models/interface/artist';
import FeedbackMessage from 'models/emuns/feedbackMessage';
import FormFieldsNames from 'models/emuns/formFieldsName';

import useStyles from './addSongStyles';
import ConvertToMilliseconds from 'utils/convertToMilliseconds';

import SchemaValidationAddSong from './validationAddSong';
import { FormAddSong } from './validationAddSong';

const defaultDialogValues = {
	[FormFieldsNames.name]: '',
	[FormFieldsNames.artist]: '',
	[FormFieldsNames.duration]: 0,
}

const AddSong: React.FC = () => {
	const dispatch = useDispatch();
	const { classes, cx } = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [mutationAddSong] = useMutation(ADD_SONG);

	const { handleSubmit, formState: { errors }, reset, control } = useForm<FormAddSong>({
		resolver: zodResolver(SchemaValidationAddSong),
		defaultValues: {
			...defaultDialogValues
		},
	});

	useEffect(() => {
		if (!openDialogAddSong)
			reset({ ...defaultDialogValues })
	}, [openDialogAddSong])

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.createdSong, { variant });

	const onSubmit: SubmitHandler<FormAddSong> = (data) => {
		const { name, artist, duration } = data;
		const song: FormAddSong = data;
		if (song) {
			mutationAddSong({
				variables: {
					name: name,
					artistId: artist,
					duration: duration,
				},
			})
				.then((responsFromMutation) => {
					dispatch(addSong({
						id: responsFromMutation.data.createSong.song.id,
						name: name,
						duration: duration,
						artist: responsFromMutation.data.createSong.song.artistByArtistId.name,
					}))
					handleQueryMessage('success')
				})
				.catch((err) => console.error('Failed to add song: ', err));
		}

		handleClose();
	};

	const handleClickOpen = () =>
		setOpenDialogAddSong(true);

	const handleClose = () =>
		setOpenDialogAddSong(false);

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
				className={classes.addSongBtn}
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
							name={FormFieldsNames.name}
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
							name={FormFieldsNames.artist}
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
							name={FormFieldsNames.duration}
							control={control}
							render={({ field: { onChange } }) => (
								<TimeField
									onChange={(time: Dayjs | null) => {
										const formattedTime: number =
											ConvertToMilliseconds(time?.minute(), time?.second())
										onChange(formattedTime);
									}}
									className={cx(classes.input, {
										[classes.errorInput]: !!errors.duration
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

export default AddSong;