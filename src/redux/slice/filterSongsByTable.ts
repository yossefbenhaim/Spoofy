import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
import Song from 'models/interface/song';

interface CurrentSongsSlice {
    songs: Song[];
}

const initialState: CurrentSongsSlice = {
    songs: [],
};

const FilterSongsByTable = createSlice({
    name: SliceName.songs,
    initialState,
    reducers: {
        setFilterSongs: (state, action: PayloadAction<Song[]>) => {
            state.songs = action.payload;
        },
    },
});

export const { setFilterSongs } = FilterSongsByTable.actions;
export default FilterSongsByTable.reducer;
