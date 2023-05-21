import React, { useEffect, useState, } from 'react';
import { Button, MenuItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import useStyles from './addSongStyles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useQuery } from '@apollo/client';
import GET_ARTIST from 'queries/query/artists';
import Select from '@mui/material/Select';
import Artist from 'models/interface/artist';
import { useMutation } from '@apollo/client';
import ADD_SONG from 'queries/mutation/addSong';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import ConvertToMilliseconds from 'utils/convertToMilliseconds';
import { addSong } from 'redux/slice/songs';
import { VariantType, useSnackbar } from 'notistack';
import FeedbackMessage from 'models/emuns/feedbackMessage';
import DialogFieldsNames from 'models/emuns/dialogFieldsName';
import ErrorMessageDialogAddSong from 'models/emuns/errorMessage';
import * as z from 'zod';


interface FormAddSong {
	name: string,
	artist: string,
	duration: number,
}

const schema = z.object({
	[DialogFieldsNames.name]:
		z.string
			().nonempty({
				message: ErrorMessageDialogAddSong.requiredError
			})
			.min(2, { message: ErrorMessageDialogAddSong.songNameMin })
			.max(50, ErrorMessageDialogAddSong.songNameMax)
	,
	[DialogFieldsNames.artist]:
		z.string({ required_error: ErrorMessageDialogAddSong.requiredError }).nonempty({
			message: ErrorMessageDialogAddSong.requiredError
		}),
	[DialogFieldsNames.duration]:
		z.number({ invalid_type_error: ErrorMessageDialogAddSong.duration })
			.min(20, { message: ErrorMessageDialogAddSong.duration }),
})

const AddSong: React.FC = () => {
	const { classes, cx } = useStyles();
	const [openDialogAddSong, setOpenDialogAddSong] = useState(false);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [mutationAddSong] = useMutation(ADD_SONG);
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();
	const { handleSubmit, formState: { errors }, reset, control, getValues } = useForm<FormAddSong>({
		resolver: zodResolver(schema),
		defaultValues: {
			[DialogFieldsNames.name]: '',
			[DialogFieldsNames.artist]: '',
			[DialogFieldsNames.duration]: 0,
		},
	});

	useEffect(() => {
		if (!openDialogAddSong) {
			reset({
				[DialogFieldsNames.name]: '',
				[DialogFieldsNames.artist]: '',
				[DialogFieldsNames.duration]: 0,
			})
		}
	}, [openDialogAddSong])


	const handleQueryMessage = (variant: VariantType) => {
		enqueueSnackbar(FeedbackMessage.createdSong, { variant });
	}

	const onSubmit: SubmitHandler<FormAddSong> = (data) => {
		const { name: name, artist, duration } = data;
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
		handleClose();
	};

	const handleClickOpen = () => {
		setOpenDialogAddSong(true);
	};

	const handleClose = () => {
		setOpenDialogAddSong(false);
	};

	useQuery(GET_ARTIST, {
		onCompleted: (data) => {
			setArtists(data.allArtists.nodes);
		},
	});

	return (
		<div>
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
						<div className={classes.header}>יצירת שיר</div>
						<Controller
							name={DialogFieldsNames.name}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<TextField
									className={classes.input}
									label="שם השיר"
									variant="standard"
									{...field}
									error={!!error}
									helperText={errors.name && <span className={classes.error}>{errors.name.message}</span>}
								/>
							)}
						/>
						<Controller
							name={DialogFieldsNames.artist}
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
							name={DialogFieldsNames.duration}
							control={control}
							render={({ field: { onChange } }) => (
								<TimeField
									onChange={(time: Dayjs | null) => {
										const formattedTime: number =
											ConvertToMilliseconds(time?.minute(), time?.second())
										onChange(formattedTime);
									}}
									className={cx(classes.input, {
										[classes.errorInput]: errors.duration?.message === ErrorMessageDialogAddSong.duration
									})}
									label="Duration"
									variant="standard"
									format='mm:ss'
									helperText={errors.duration && <span className={classes.error}>{errors.duration.message}</span>}
								/>
							)}
						/>
						<Button
							className={classes.btn}
							variant="contained"
							type="submit"
						>
							צור שיר
						</Button>
					</div>
				</form>
			</Dialog>
		</div>
	);
};

export default AddSong;