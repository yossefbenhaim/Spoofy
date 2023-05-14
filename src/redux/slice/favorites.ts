import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Favorite from 'models/interface/favorite';
import SliceName from 'models/emuns/sliceName';

interface currentFavoritesSlice {
    favorites: Favorite[] | undefined;
}

const initialState: currentFavoritesSlice = {
    favorites: undefined,
};

const FavoritesSong = createSlice({
    name: SliceName.favorites,
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<Favorite[]>) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action: PayloadAction<Favorite>) => {
            state.favorites?.push(action.payload);
        },
        deleteFavoriteFrom: (state, action: PayloadAction<Favorite>) => {
            state.favorites = state.favorites?.filter(
                (favorite) => favorite.songId !== action.payload.songId
            );
        },
    },
});

export const { setFavorites, addFavorite, deleteFavoriteFrom } =
    FavoritesSong.actions;
export default FavoritesSong.reducer;
