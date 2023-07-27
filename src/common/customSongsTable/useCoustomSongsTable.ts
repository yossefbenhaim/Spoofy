import { Song } from 'models/interface/song';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { GridColumnVisibilityModel } from '@mui/x-data-grid-premium';
import { useEffect, useMemo, useState } from 'react';
import {
    setCurrentSongId,
    resetCurrentSongId,
} from 'redux/slice/currentPlaylist';

interface Props {
    tableSongs: string[];
    tableId: string;
}

const useCoustomSongsTable = (props: Props) => {
    const { tableSongs, tableId } = props;
    const dispatch = useDispatch();

    const currentSongId = useAppSelector(
        (state) => state.currentPlaylist.songId
    );
    const currentTableId = useAppSelector(
        (state) => state.currentPlaylist.tableId
    );
    const songs = useAppSelector((state) => state.songs.songs);

    const [groupingRows, setGroupingRows] = useState<boolean>(true);
    const [columnVisibilityModel, setColumnVisibilityModel] =
        useState<GridColumnVisibilityModel>({
            id: true,
            song: true,
            duration: true,
            artist: true,
        });
    const selectionModel = currentTableId === tableId ? currentSongId : '';

    const filteredSongs = useMemo<Song[]>(
        () =>
            tableSongs.map(
                (tableSong) =>
                    songs.find((song: Song) => song.id === tableSong)!
            ),
        [tableSongs]
    );

    const updateCurrentSongView = (rowSongId: string | number) => {
        if (rowSongId === currentSongId && currentTableId === tableId)
            dispatch(resetCurrentSongId());
        else if (currentTableId || rowSongId !== undefined) {
            const newCurrentSong: Song | undefined = songs.find(
                (song: Song) => song.id == rowSongId
            );
            dispatch(setCurrentSongId(newCurrentSong?.id as string));
        }
    };

    useEffect(() => {
        if (groupingRows) {
            setColumnVisibilityModel({
                ...columnVisibilityModel,
                artist: true,
            });
        } else {
            setColumnVisibilityModel({
                ...columnVisibilityModel,
                artist: false,
            });
        }
    }, [groupingRows]);

    return {
        updateCurrentSongView,
        setGroupingRows,
        groupingRows,
        filteredSongs,
        selectionModel,
        columnVisibilityModel,
    };
};

export default useCoustomSongsTable;
