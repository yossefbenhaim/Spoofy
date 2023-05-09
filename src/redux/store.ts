import { configureStore } from '@reduxjs/toolkit';

import songsReducer from './slice/songs';
import currentSongReducer from './slice/currentSong';
import currentUserReducer from './slice/currentUser';
import favoritesSongReduser from './slice/favorites';
const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        songs: songsReducer,
        currentSong: currentSongReducer,
        favoritesSong: favoritesSongReduser,
    },
});

export type CurrentUser = ReturnType<typeof store.getState>;
export type AllSongs = ReturnType<typeof store.getState>;
export type CurrentSong = ReturnType<typeof store.getState>;
export type FavoritesSong = ReturnType<typeof store.getState>;

export default store;
