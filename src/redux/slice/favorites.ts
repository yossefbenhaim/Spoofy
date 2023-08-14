import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Favorite } from 'models/interface/favorite';
import { SliceName } from 'models/enums/sliceName';

interface currentFavoritesSlice {
    favorites: Favorite[];
}

const initialState: currentFavoritesSlice = {
    favorites: [],
};

const FavoritesSong = createSlice({
    name: SliceName.favorites,
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<Favorite[]>) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action: PayloadAction<Favorite>) => {
            state.favorites.push(action.payload);
        },
        deleteFavoriteFrom: (state, action: PayloadAction<Favorite>) => {
            state.favorites = state.favorites.filter(
                (favorite) => favorite.songId !== action.payload.songId
            );
        },
        resetFavorites: () => {
            return initialState;
        },
    },
});

export const { setFavorites, addFavorite, deleteFavoriteFrom, resetFavorites } =
    FavoritesSong.actions;
export default FavoritesSong.reducer;
