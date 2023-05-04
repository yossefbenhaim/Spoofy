import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface currentSong {
    id?: string;
}

const initialState: currentSong = {
    id: undefined,
};

const CurrentSong = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCurrentSong(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
    },
});

export const { setCurrentSong: setCurrentSong } = CurrentSong.actions;
export default CurrentSong.reducer;
