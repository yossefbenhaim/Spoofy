import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SliceName from 'models/emuns/sliceName';
import Song from 'models/interface/song';

interface currentSongSlice {
    songId?: string | undefined;
    tableId?: string | undefined;
    songs: Song[];
}

const initialState: currentSongSlice = {
    songId: undefined,
    tableId: undefined,
    songs: [],
};

const CurrentSongId = createSlice({
    name: SliceName.currentSong,
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
        setFilterSongs: (state, action: PayloadAction<Song[]>) => {
            state.songs = action.payload;
        },
        deleteSongfromFilterSong: (state, action: PayloadAction<string>) => {
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
    setFilterSongs,
    deleteSongfromFilterSong,
} = CurrentSongId.actions;
export default CurrentSongId.reducer;
