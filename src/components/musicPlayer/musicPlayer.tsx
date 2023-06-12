import React, { useState, useEffect, useMemo, useRef } from 'react';

import { Slide, Slider, IconButton, Typography } from '@mui/material/';
import { setCurrentSongId } from 'redux/slice/currentSongId';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';

import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import useStyles from './musicPlayerStyles';
import formatDuration from 'utils/formatDuration';
import Song from 'models/interface/song';

const MusicPlayer: React.FC = () => {
	const dispatch = useDispatch();
	const { classes } = useStyles();
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);

	const intarval = useRef<NodeJS.Timer | undefined>(undefined)
	const currentSongId = useAppSelector((state) => state.currentSong.songId);
	const currentTableId = useAppSelector((state) => state.currentSong.tableId);


	const filterSongs = useAppSelector((state) => state.filterSongsByTable.songs);


	useEffect(() => {
		setCurrentTime(0);
		setIsPlaying(true);
	}, [currentSongId])

	const currentSong = useMemo(() => {
		return filterSongs?.find((song) => song.id === currentSongId);
	}, [currentSongId, filterSongs]);

	const currentSongDuration: number = currentSong?.duration as number;


	const createNewIntervalForSlider = () => {
		if (!intarval.current) {
			intarval.current = setInterval(() => {
				setCurrentTime((currentTime) => currentTime + 1);
			}, 1000);
		}
	}




	const clearIntervalOfSlider = () => {
		intarval.current && clearInterval(intarval.current);
		intarval.current = undefined;
	}

	useEffect(() => {
		isPlaying ?
			createNewIntervalForSlider() :
			clearIntervalOfSlider()
	}, [isPlaying])

	useEffect(() => {
		if (currentTime === currentSongDuration + 1) {
			setCurrentTime(0);
			diractionNextSong(1);
		}
	}, [currentTime])

	const handleClickPlay = () =>
		setIsPlaying(prev => !prev);

	const handleSliderChange = (newValue: number) =>
		setCurrentTime(newValue);


	const diractionNextSong = (direction: 1 | -1): void => {
		const currentSongIndex: number | undefined = filterSongs?.findIndex(
			(song) => song.id === currentSongId
		);
		if (currentSongIndex === filterSongs?.length - 1 || currentSongIndex === 0 && direction == -1) {
			const firstSong: Song = filterSongs[0];
			dispatch(setCurrentSongId(firstSong.id));
		} else {
			const next: Song = filterSongs[currentSongIndex + direction];
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
							{isPlaying ?
								<PauseRoundedIcon className={classes.sizeSvg} />
								:
								<PlayArrowRoundedIcon className={classes.sizeSvg} />
							}
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
							{formatDuration(currentSongDuration)}
						</Typography>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default MusicPlayer;
