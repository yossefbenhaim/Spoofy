import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
interface currentSongSlice {
    id?: string | undefined;
}

const initialState: currentSongSlice = {
    id: undefined,
};

const CurrentSongId = createSlice({
    name: SliceName.currentSong,
    initialState,
    reducers: {
        setCurrentSongId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
    },
});

export const { setCurrentSongId } = CurrentSongId.actions;
export default CurrentSongId.reducer;
