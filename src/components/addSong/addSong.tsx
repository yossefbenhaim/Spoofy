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
import DialogFieldsName from 'models/emuns/dialogFieldsName';
import * as z from 'zod';


interface FormAddSong {
	name: string,
	artist: string,
	duration: number,
}

const schema = z.object({
	[DialogFieldsName.name]: z.string().min(2, { message: "חייב לבחור שם של שיר לפחות מ 2 תווים" }).max(50, 'שם של שיר יכול להיות מקסימום 50 תווים'),
	[DialogFieldsName.artist]: z.string().refine((value) => value !== '', {
		message: 'חייב לבחור אומן כדי ליצור שיר ',
	}),
	[DialogFieldsName.duration]: z.number().min(30, { message: "שיר חייב להיות מינמום 30 שניות" }),
});

const AddSong: React.FC = () => {
	const { classes, cx } = useStyles();
	const [open, setOpen] = useState(false);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [mutationAddSong] = useMutation(ADD_SONG);
	const { enqueueSnackbar } = useSnackbar();
	const { handleSubmit, formState: { errors }, reset, control } = useForm<FormAddSong>({
		resolver: zodResolver(schema),
		defaultValues: {
			[DialogFieldsName.name]: '',
			[DialogFieldsName.artist]: '',
			[DialogFieldsName.duration]: 0,
		},
	});

	useEffect(() => {
		if (!open) {
			reset({
				[DialogFieldsName.name]: '',
				[DialogFieldsName.artist]: '',
				[DialogFieldsName.duration]: 0,
			})
		}
	}, [open])


	const handleQueryMessage = (variant: VariantType) => {
		enqueueSnackbar(FeedbackMessage.createdSong, { variant });
	}

	const dispatch = useDispatch();
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
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
				open={open}
				onClose={handleClose}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<div className={classes.header}>יצירת שיר</div>
						<Controller
							name={DialogFieldsName.name}
							control={control}
							render={({ field }) => (
								<TextField
									className={classes.input}
									id="standard-basic"
									label="שם השיר"
									variant="standard"
									{...field}
									error={!!errors.name}
									helperText={errors.name && <span className={classes.error}>{errors.name.message}</span>}
								/>
							)}
						/>
						<Controller
							name={DialogFieldsName.artist}
							control={control}
							render={({ field }) => (
								<FormControl
									className={classes.menu}
									variant="standard"
								>
									<InputLabel error={!!errors.artist} className={classes.titleMenu} >
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
										{errors.artist &&
											<span className={classes.error}>
												{errors.artist.message}</span>}
									</FormHelperText>
								</FormControl>
							)}
						/>
						<Controller
							name={DialogFieldsName.duration}
							control={control}
							render={({ field: { onChange } }) => (
								<TimeField
									onChange={(time: Dayjs | null) => {
										const formattedTime: number =
											ConvertToMilliseconds(time?.minute(), time?.second())
										onChange(formattedTime);
									}}
									className={cx(classes.input, {
										[classes.errorInput]: errors.duration?.message === "שיר חייב להיות מינמום 30 שניות"
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