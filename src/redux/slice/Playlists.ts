import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
import Playlist from 'models/interface/playlist';

interface CurrentSongsSlice {
    playlist: Playlist[];
}

const initialState: CurrentSongsSlice = {
    playlist: [],
};

const Playlists = createSlice({
    name: SliceName.songs,
    initialState,
    reducers: {
        setPlaylists: (state, action: PayloadAction<Playlist[]>) => {
            state.playlist = action.payload;
        },
        addPlaylist: (state, action: PayloadAction<Playlist>) => {
            state.playlist?.push(action.payload);
        },
    },
});

export const { addPlaylist, setPlaylists } = Playlists.actions;
export default Playlists.reducer;
