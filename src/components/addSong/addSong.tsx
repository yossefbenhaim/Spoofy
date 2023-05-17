import React, { useState, useRef, useEffect } from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import ConvertToMilliseconds from 'utils/convertToMilliseconds';
import { addSong } from 'redux/slice/songs';
import Song from 'models/interface/song';

enum ControllerName {
	songName = 'songName',
	artistName = 'artistName',
	duration = 'duration'
}

interface FormAddSong {
	songName: string,
	artistName: string,
	duration: number,
}

import * as z from 'zod';
const schema = z.object({
	songName: z.string().min(2, { message: "חייב לבחור שם של שיר לפחות מ 2 תווים" }).max(50, 'שם של שיר יכול להיות מקסימום 50 תווים'),
	artistName: z.string().refine((value) => value !== '', {
		message: 'חייב לבחור אומן כדי ליצור שיר ',
	}),
	duration: z.number().min(30, { message: "שיר חייב להיות מינמום 30 שניות" }),
});

const AddSong: React.FC = () => {
	const resolver = zodResolver(schema)
	const { classes, cx } = useStyles();
	const [open, setOpen] = useState(false);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [mutationAddSong] = useMutation(ADD_SONG);
	const { control, handleSubmit, formState: { errors } } = useForm<FormAddSong>({
		resolver,
		defaultValues: {
			[ControllerName.songName]: '',
			[ControllerName.artistName]: '',
			[ControllerName.duration]: 0,
		},
	});
	const dispatch = useDispatch();
	const openId = useRef<number>(1);

	useEffect(() => {
		console.log(open);
		if (open === false) { // Increment id each time modal closes
			console.log('yes');
			openId.current = openId.current + 1;
		}
		console.log(openId.current);

	}, [open]);

	const onSubmit = (data: FormAddSong) => {
		mutationAddSong({
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

		const newSong: Song | undefined = {
			id: '',
			name: data.songName,
			duration: data.duration,
			artistByArtistId: { name: data.artistName }
		}

		dispatch(addSong(newSong))
		handleClose();
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		openId.current = openId.current + 1;
		console.log(openId.current);

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
				key={openId.current}
				open={open}
				onClose={handleClose}
				className={classes.dialogContainer}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={classes.dialog}>
						<div className={classes.header}>יצירת שיר</div>
						<Controller
							name={ControllerName.songName}
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
							name={ControllerName.artistName}
							control={control}
							render={({ field }) => (
								<FormControl
									className={classes.menu}
									variant="standard"
								>
									<InputLabel error={!!errors.artistName} className={classes.titleMenu} >
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
										{errors.artistName &&
											<span className={classes.error}>
												{errors.artistName.message}</span>}
									</FormHelperText>
								</FormControl>
							)}
						/>
						<Controller
							name={ControllerName.duration}
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