import React, { useState, useEffect, useMemo } from 'react';

import { Typography } from '@mui/material';
import { setCurrentSongId } from 'redux/slice/currentSongId';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { Slide, Slider, IconButton } from '@mui/material/';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';

import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import useStyles from './musicPlayerStyles';
import formatDuration from 'utils/formatDuration';
import Song from 'models/interface/song';

const MusicPlayer: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();

	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);

	const songs = useAppSelector((state) => state.songs.songs);
	const currentSongId = useAppSelector(
		(state) => state.currentSong.id
	);


	const currentSong = useMemo(() => {
		setCurrentTime(0);
		setIsPlaying(true);
		return songs?.find((song) => song.id === currentSongId);
	}, [currentSongId, songs]);

	const currentSongDuration: any = currentSong?.duration; // seconds

	useEffect(() => {
		let interval: NodeJS.Timer | undefined = undefined;
		if (isPlaying) {
			if (currentTime !== currentSongDuration + 1) {
				interval = setInterval(() => {
					setCurrentTime((currentTime) => currentTime + 1);
				}, 1000);
			} else {
				setCurrentTime(0);
				diractionNextSong(1);
			}
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isPlaying, currentTime]);

	const handleClickPlay = () => {
		setIsPlaying(prev => !prev);
	};

	const handleSliderChange = (newValue: number) => {
		setCurrentTime(newValue);
	};

	const diractionNextSong = (direction: number): void => {
		const currentSongIndex: number | undefined = songs?.findIndex(
			(song) => song.id === currentSongId
		);

		if (currentSongIndex === songs?.length - 1 || currentSongIndex === 0 && direction == -1) {
			const firstSong: Song = songs[0];
			dispatch(setCurrentSongId(firstSong.id));
			setCurrentTime(0);
		} else {
			const next: Song = songs[currentSongIndex + direction];
			dispatch(setCurrentSongId(next.id));
			setCurrentTime(0);
		}
	};


	return (
		<Slide direction="up" in={Boolean(currentSongId)}>
			<div className={classes.sliderContainer}>
				<div className={classes.playContainer}>
					<div className={classes.playSong}>
						<IconButton
							onClick={() => diractionNextSong(-1)}
							className={classes.sizeIcon}
						>
							<SkipPreviousRoundedIcon className={classes.sizeSvg} />
						</IconButton>
						<IconButton
							className={classes.sizeIcon}
							onClick={handleClickPlay}
						>
							{isPlaying ? (
								<PauseRoundedIcon className={classes.sizeSvg} />
							) : (
								<PlayArrowRoundedIcon className={classes.sizeSvg} />
							)}
						</IconButton>
						<IconButton
							onClick={() => diractionNextSong(1)}
							className={classes.sizeIcon}
						>
							<SkipNextRoundedIcon className={classes.sizeSvg} />
						</IconButton>
					</div>
					<div className={classes.titleSong}>
						<Typography className={classes.songSize}>{currentSong?.name}</Typography>
						<Typography className={classes.artistSize}>{currentSong?.artist} </Typography>
					</div>
				</div>

				<div className={classes.bodySong}>
					<Slider
						className={classes.slider}
						size="small"
						value={currentTime}
						min={0}
						step={1}
						max={currentSongDuration}
						onChange={(_, value) => handleSliderChange(value as number)}
					/>
					<div className={classes.songTime}>
						<Typography className={classes.tinyText}>
							{formatDuration(currentTime)}
						</Typography>
						<Typography className={classes.tinyText}>
							{formatDuration(
								Boolean(currentSongId) ? currentSongDuration - currentTime : currentTime
							)}
						</Typography>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default MusicPlayer;
