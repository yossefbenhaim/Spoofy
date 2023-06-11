import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
import Song from 'models/interface/song';
import CurrentSpng from 'models/interface/currentSong';

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
            state.songs?.push(action.payload);
        },
        // uodateTableId: (state, action: PayloadAction<CurrentSpng>) => {
        //     const { tableId, songId } = action.payload;
        //     const song = state.songs.find(
        //         (song) => song.id  === songId
        //     );
        //     if (song) {
        //         song.tableId = tableId;
        //     }
        // },
    },
});

export const { addSong, setSongs } = Songs.actions;
export default Songs.reducer;
