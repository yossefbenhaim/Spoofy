import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Favorite from 'models/interface/favorite';
interface currentFavoritesSlice {
    favorites: Favorite[] | undefined;
}

const initialState: currentFavoritesSlice = {
    favorites: undefined,
};

const FavoritesSong = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<any[]>) => {
            state.favorites = action.payload;
        },
    },
});

export const { setFavorites } = FavoritesSong.actions;
export default FavoritesSong.reducer;
