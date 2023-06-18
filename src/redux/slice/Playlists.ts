import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
import Playlist from 'models/interface/playlist';
import AddPlaylistSong from 'models/interface/addPlaylistSong';

interface CurrentSongsSlice {
    playlists: Playlist[];
}

const initialState: CurrentSongsSlice = {
    playlists: [],
};

const Playlists = createSlice({
    name: SliceName.songs,
    initialState,
    reducers: {
        setPlaylists: (state, action: PayloadAction<Playlist[]>) => {
            state.playlists = action.payload;
        },
        addPlaylist: (state, action: PayloadAction<Playlist>) => {
            state.playlists?.push(action.payload);
        },
        updateSongsPlaylist: (
            state,
            action: PayloadAction<AddPlaylistSong>
        ) => {
            const { playlistId, songsId } = action.payload;
            const playlist: Playlist | undefined = state.playlists.find(
                (playlist) => playlist.id === playlistId
            );

            if (playlist) {
                playlist.songs.push({ songId: songsId });
            }
        },
    },
});

export const { addPlaylist, setPlaylists, updateSongsPlaylist } =
    Playlists.actions;
export default Playlists.reducer;
