import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import SliceName from 'models/emuns/sliceName';
import Playlist from 'models/interface/playlist';
import PlaylistSong from 'models/interface/addPlaylistSong';

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
            // make shore that function added one playlist with same id
            const findPlaylistId = state.playlists.find(
                (playlist) => playlist.id === action.payload.id
            );
            if (!findPlaylistId) state.playlists?.push(action.payload);
        },
        updatePlaylistName: (state, action: PayloadAction<Playlist>) => {
            const { id, name } = action.payload;
            const currentPlaylist: Playlist | undefined = state.playlists.find(
                (playlist) => playlist.id === id
            );
            if (currentPlaylist) currentPlaylist.name = name;
        },
        updatePlaylistSongs: (state, action: PayloadAction<PlaylistSong>) => {
            const { playlistId, songsId } = action.payload;
            const CurrentPlaylist: Playlist | undefined = state.playlists.find(
                (playlist) => playlist.id === playlistId
            );
            if (CurrentPlaylist)
                CurrentPlaylist.songs.push({ songId: songsId });
        },
        deleteSongsPlaylist: (state, action: PayloadAction<PlaylistSong>) => {
            const { playlistId, songsId } = action.payload;
            const CurrentPlaylist: Playlist | undefined = state.playlists.find(
                (playlist) => playlist.id === playlistId
            );

            if (CurrentPlaylist) {
                const index = CurrentPlaylist.songs.findIndex(
                    (song) => song.songId === songsId
                );
                if (index !== -1) CurrentPlaylist.songs.splice(index, 1);
            }
        },
    },
});

export const {
    addPlaylist,
    setPlaylists,
    updatePlaylistSongs,
    updatePlaylistName,
    deleteSongsPlaylist,
} = Playlists.actions;
export default Playlists.reducer;
