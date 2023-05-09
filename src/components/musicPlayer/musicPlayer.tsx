import React, { useState, useEffect, useMemo } from 'react';

import { Typography } from '@mui/material';
import { setCurrentSong } from 'redux/slice/currentSong';
import { useSelector, useDispatch } from 'react-redux';
import { CurrentSong, AllSongs } from 'redux/store';
import { Slide, Slider, IconButton } from '@mui/material/';

import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useStyles from './musicPlayerStyles';
import formatDuration from 'utils/formatDuration';
import Song from 'models/interface/song';

const MusicPlayer: React.FC = () => {
	const { classes } = useStyles();
	const dispatch = useDispatch();

	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);

	const allSongs = useSelector((state: AllSongs) => state.songs);
	const currentSongId = useSelector(
		(state: CurrentSong) => state.currentSong.id
	);


	const currentSong = useMemo(() => {
		return allSongs.songs.find((song) => song.id === currentSongId);
	}, [currentSongId, allSongs]);

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
				nextSong(1);
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

	const nextSong = (direction: number): void => {
		const currentSongIndex = allSongs.songs.findIndex(
			(song) => song.id === currentSongId
		);
		const isEndOfListSong = currentSongIndex === allSongs.songs.length - 1;

		if (isEndOfListSong) {
			const firstSong: Song = allSongs.songs[0];
			dispatch(setCurrentSong(firstSong.id));
			setCurrentTime(0);
		} else {
			const next: Song = allSongs.songs[currentSongIndex + direction];
			dispatch(setCurrentSong(next.id));
			setCurrentTime(0);
		}


	};

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
							<PauseIcon className={classes.sizeSvg} />
						) : (
							<PlayArrowIcon className={classes.sizeSvg} />

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
	);

	return (
		<div className={classes.slide}>
			<Slide direction="up" in={Boolean(currentSongId)}>
				{icon}
			</Slide>
		</div>
	);
};

export default MusicPlayer;
