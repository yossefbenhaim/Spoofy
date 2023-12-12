import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';

interface CurrentThemeMode {
    isDrakMode: boolean;
}

const initialState: CurrentThemeMode = {
    isDrakMode: true,
};

const ThemeMode = createSlice({
    name: SliceName.themeMode,
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<CurrentThemeMode>) => {
            state.isDrakMode = action.payload.isDrakMode;
        },
    },
});

export const { setThemeMode } = ThemeMode.actions;
export default ThemeMode.reducer;
