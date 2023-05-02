import React, { useState, useEffect, useMemo } from 'react';

import { Typography } from '@mui/material';

import Slider from '@mui/material/Slider';

import IconButton from '@mui/material/IconButton';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useStyles from './musicPlayerStyles';
import Slide from '@mui/material/Slide';
import { useSelector, useDispatch } from 'react-redux';
import { currentSong, allSongs } from 'redux/store';
import formatDuration from 'utils/formatDuration';
import { setCurrentSong } from 'redux/slice/currentSong';
import Song from 'models/interface/song';

const MusicPlayer: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);

	const allSongs = useSelector((state: allSongs) => state.allSongs);
	const currentSongId = useSelector(
		(state: currentSong) => state.currentSong
	);

	const currentSong = useMemo(() => {
		return allSongs.songs.find((song) => song.id === currentSongId.id);
	}, [currentSongId, allSongs]);

	const duration: any = currentSong?.duration; // seconds

	useEffect(() => {
		let interval: any = null;
		if (isPlaying) {
			if (currentTime !== duration + 1) {
				interval = setInterval(() => {
					setCurrentTime((currentTime) => currentTime + 1);
				}, 1000);
			} else {
				setCurrentTime(0);
				nextSong(1);
			}
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isPlaying, currentTime]);

	const handleClickPlay = () => {
		setIsPlaying(!isPlaying);
	};

	const handleSliderChange = (newValue: number) => {
		setCurrentTime(newValue);
	};

	const nextSong = (direction: number): void => {
		const currentSongIndex = allSongs.songs.findIndex(
			(song) => song.id === currentSongId.id
		);
		const next: Song = allSongs.songs[currentSongIndex + direction];
		dispatch(setCurrentSong(next.id));
		setCurrentTime(0);
	};

	let flagTimeChange: any = false;
	if (Boolean(currentSongId.id)) {
		flagTimeChange = Boolean(currentSongId.id);
	}
	const icon = (
		<div className={classes.sliderContainer}>
			<div className={classes.playContainer}>
				<div className={classes.playSong}>
					<IconButton
						onClick={() => nextSong(-1)}
						className={classes.sizeIcon}
					>
						<SkipPreviousIcon className={classes.sizeSvg} />
					</IconButton>
					<IconButton
						className={classes.sizeIcon}
						onClick={handleClickPlay}
					>
						{isPlaying ? (
							<PlayArrowIcon className={classes.sizeSvg} />
						) : (
							<PauseIcon className={classes.sizeSvg} />
						)}
					</IconButton>
					<IconButton
						onClick={() => nextSong(1)}
						className={classes.sizeIcon}
					>
						<SkipNextIcon className={classes.sizeSvg} />
					</IconButton>
				</div>
				<div className={classes.titleSong}>
					<div className={classes.artistSize}>
						{currentSong?.name}
					</div>
					<div>{currentSong?.artistByArtistId.name} </div>
				</div>
			</div>

			<Slider
				className={classes.slider}
				size="small"
				value={currentTime}
				min={0}
				step={1}
				max={duration}
				onChange={(_, value) => handleSliderChange(value as number)}
			/>
			<div className={classes.songTime}>
				<Typography className={classes.tinyText}>
					{formatDuration(currentTime)}
				</Typography>
				<Typography className={classes.tinyText}>
					{formatDuration(
						flagTimeChange ? duration - currentTime : currentTime
					)}
				</Typography>
			</div>
		</div>
	);

	return (
		<div className={classes.slide}>
			<Slide direction="up" in={Boolean(currentSongId.id)}>
				{icon}
			</Slide>
		</div>
	);
};

export default MusicPlayer;
