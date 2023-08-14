import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';

import usersReduser from './slice/users';
import songsReducer from './slice/songs';
import currentSongReducer from './slice/currentPlaylist';
import currentUserReducer from './slice/currentUser';
import favoritesSongReduser from './slice/favorites';
import PlaylistsReduser from './slice/playlists';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    type: storage,
    storage,
    whitelist: [
        SliceName.currentUser,
        SliceName.songs,
        SliceName.favorites,
        SliceName.playlists,
        SliceName.users,
    ],
};

const rootReducer = combineReducers({
    [SliceName.currentUser]: currentUserReducer,
    [SliceName.currentPlaylist]: currentSongReducer,
    [SliceName.favorites]: favoritesSongReduser,
    [SliceName.songs]: songsReducer,
    [SliceName.users]: usersReduser,
    [SliceName.playlists]: PlaylistsReduser,
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
