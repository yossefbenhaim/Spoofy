import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SliceName from 'models/emuns/sliceName';
import Song from 'models/interface/song';

interface currentSongSlice {
    songId: string | undefined;
    tableId: string | undefined;
    songs: Song[];
}

const initialState: currentSongSlice = {
    songId: undefined,
    tableId: undefined,
    songs: [],
};

const CurrentPlaylist = createSlice({
    name: SliceName.currentPlaylist,
    initialState,
    reducers: {
        setCurrentSongId(state, action: PayloadAction<string>) {
            state.songId = action.payload;
        },
        setCurrentTableId(state, action: PayloadAction<string>) {
            state.tableId = action.payload;
        },
        resetCurrentSongId(state) {
            state.songId = undefined;
            state.tableId = undefined;
        },
        setSongs: (state, action: PayloadAction<Song[]>) => {
            state.songs = action.payload;
        },
        deleteSong: (state, action: PayloadAction<string>) => {
            state.songs = state.songs.filter(
                (song) => song.id !== action.payload
            );
        },
    },
});

export const {
    setCurrentSongId,
    resetCurrentSongId,
    setCurrentTableId,
    setSongs,
    deleteSong,
} = CurrentPlaylist.actions;
export default CurrentPlaylist.reducer;
