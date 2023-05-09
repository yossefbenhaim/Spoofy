import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Song from 'models/interface/song';

interface Songs {
    songs: Song[];
}

const initialState: Songs = {
    songs: [],
};

const Songs = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs: (state, action: PayloadAction<Song[]>) => {
            state.songs = action.payload;
        },
        addSong: (state, action: PayloadAction<Song>) => {
            state.songs.push(action.payload);
        },
    },
});

export const { addSong, setSongs } = Songs.actions;
export default Songs.reducer;
