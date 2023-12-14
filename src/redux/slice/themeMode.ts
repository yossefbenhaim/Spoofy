import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';

interface CurrentThemeMode {
    mode: boolean;
}

const initialState: CurrentThemeMode = {
    mode: true,
};

const ThemeMode = createSlice({
    name: SliceName.themeMode,
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<CurrentThemeMode>) => {
            state.mode = action.payload.mode;
        },
    },
});

export const { setThemeMode } = ThemeMode.actions;
export default ThemeMode.reducer;
