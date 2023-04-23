import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Song from 'models/interface/song';

interface Songs {
    songs: Song[];
}

const initialState: Songs = {
    songs: [],
};

const AllSongs = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        addSong: (state, action: PayloadAction<Song>) => {
            state.songs.push(action.payload);
        },
        setSongs: (state, action: PayloadAction<Song[]>) => {
            state.songs = action.payload;
        },
    },
});

export const { addSong, setSongs } = AllSongs.actions;
export default AllSongs.reducer;
