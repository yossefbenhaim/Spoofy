import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import songsReducer from './slice/songs';
import currentSongReducer from './slice/currentSongId';
import currentUserReducer from './slice/currentUser';
import favoritesSongReduser from './slice/favorites';
import PlaylistsReduser from './slice/Playlists';
import SliceName from 'models/emuns/sliceName';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const persistConfig = {
    key: 'root',
    type: storage,
    storage,
    whitelist: [
        SliceName.currentUser,
        SliceName.songs,
        SliceName.favorites,
        SliceName.playlist,
    ],
};

const rootReducer = combineReducers({
    [SliceName.currentUser]: currentUserReducer,
    [SliceName.currentSong]: currentSongReducer,
    [SliceName.favorites]: favoritesSongReduser,
    [SliceName.songs]: songsReducer,
    [SliceName.playlist]: PlaylistsReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistodStore = persistStore(store);
export type AddDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
export { store, persistodStore };
