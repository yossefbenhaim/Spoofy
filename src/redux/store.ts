import { configureStore } from '@reduxjs/toolkit';

import allSongsReducer from './slice/allSongs';
import currentSongReducer from './slice/currentSong';
import currentUserReducer from './slice/currentUser';

const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        allSongs: allSongsReducer,
        currentSong: currentSongReducer,
    },
});

export type CurrentUser = ReturnType<typeof store.getState>;
export type AllSongs = ReturnType<typeof store.getState>;
export type CurrentSong = ReturnType<typeof store.getState>;

export default store;
