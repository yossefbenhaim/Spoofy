import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
interface currentSong {
    id?: string;
}

const initialState: currentSong = {
    id: undefined,
};

const CurrentSong = createSlice({
    name: SliceName.currentSong,
    initialState,
    reducers: {
        setCurrentSong(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
    },
});

export const { setCurrentSong: setCurrentSong } = CurrentSong.actions;
export default CurrentSong.reducer;
