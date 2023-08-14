import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';
import { Song } from 'models/interface/song';

interface CurrentSongsSlice {
    songs: Song[];
}

const initialState: CurrentSongsSlice = {
    songs: [],
};

const Songs = createSlice({
    name: SliceName.songs,
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
