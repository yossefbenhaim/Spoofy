import { configureStore } from '@reduxjs/toolkit';
import CurrentUser from './slice/currentUser';
import AllSongs from './slice/allSongs';
import CurrentSong from './slice/currentSong';
const store = configureStore({
    reducer: {
        currentUser: CurrentUser,
        allSongs: AllSongs,
        currentSong: CurrentSong,
    },
});

export type currentUser = ReturnType<typeof store.getState>;
export type allSongs = ReturnType<typeof store.getState>;
export type currentSong = ReturnType<typeof store.getState>;

export default store;
