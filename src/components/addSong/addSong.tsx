import React, { useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import useStyles from './addSongStyles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useQuery } from '@apollo/client';
import GET_ALL_ARTIST from 'queries/query/getAiiArtist';
import Select from '@mui/material/Select';
import Artist from 'models/interface/artist';
import { useMutation } from '@apollo/client';
import ADD_SONG from 'queries/mutation/addSong';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useForm, Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import ConvertToMilliseconds from 'utils/convertToMilliseconds';

interface FormAddSong {
	songName: string;
	artistName: string;
	duration: number;
}

import * as z from 'zod';
const schema = z.object({
	songName: z.string().min(2, { message: "Song name must be at least 2 characters long" }).max(50, 'Name must be at least 50 characters'),
	artistName: z.string().refine((value) => value !== '', {
		message: 'Selection cannot be an empty string',
	}),
	duration: z.number().min(30, { message: "you must pick duration" }),
});

const AddSong: React.FC = () => {
	const resolver = zodResolver(schema)
	const { classes, cx } = useStyles();
	const [open, setOpen] = useState(false);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [addSong] = useMutation(ADD_SONG);
	const { control, handleSubmit, formState: { errors } } = useForm<FormAddSong>({
		resolver
	});

	const onSubmit = (data: FormAddSong) => {
		addSong({
			variables: {
				input: {
					song: {
						name: data.songName,
						artistId: data.artistName,
						duration: data.duration,
					},
				},
			},
		})
			.then(() => console.log('Song Add successfully!'))
			.catch((err) => console.error('Failed to add song: ', err));
		handleClose();
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useQuery(GET_ALL_ARTIST, {
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
							name="songName"
							control={control}
							render={({ field }) => (
								<TextField
									className={classes.input}
									id="standard-basic"
									label="שם השיר"
									variant="standard"
									{...field}
									error={!!errors.songName}
									helperText={errors.songName && <span className={classes.error}>{errors.songName.message}</span>}
								/>
							)}
						/>
						<Controller
							name="artistName"
							control={control}
							defaultValue=''
							render={({ field }) => (
								<FormControl
									className={classes.menu}
									variant="standard"
								>
									<InputLabel className={cx(classes.titleMenu, {
										[classes.error]: errors.artistName?.message === 'Selection cannot be an empty string'
									})}>
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
													key={artist.id}
													value={artist.id}
												>
													{artist.name}
												</MenuItem>
											);
										})}
									</Select>
									<FormHelperText className={classes.error}>{errors.artistName && <span className={classes.error}>{errors.artistName.message}</span>}</FormHelperText>
								</FormControl>
							)}
						/>
						<Controller
							name="duration"
							control={control}
							render={({ field: { onChange, value = 0 } }) => (
								<TimeField
									onChange={(time: any) => {
										const formattedTime: number =
											ConvertToMilliseconds(time?.minute(), time?.second())
										onChange(formattedTime);
										console.log(formattedTime);
									}}
									value={dayjs(value).format('mm:ss')}
									className={classes.input}
									label="Duration"
									variant="standard"
									format="mm:ss"
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
