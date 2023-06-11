import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';

interface currentSongSlice {
    songId?: string | undefined;
    tableId?: string | undefined;
}

const initialState: currentSongSlice = {
    songId: undefined,
    tableId: undefined,
};

const CurrentSongId = createSlice({
    name: SliceName.currentSong,
    initialState,
    reducers: {
        setCurrentSongId(state, action: PayloadAction<string>) {
            state.songId = action.payload;
        },
        setCurrentTableId(state, action: PayloadAction<string>) {
            state.tableId = action.payload;
        },
        resetCurrentSongId(state) {
            state.songId = '';
            state.tableId = '';
        },
    },
});

export const { setCurrentSongId, resetCurrentSongId, setCurrentTableId } =
    CurrentSongId.actions;
export default CurrentSongId.reducer;
