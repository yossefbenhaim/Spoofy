import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SliceName from 'models/emuns/sliceName';
import User from 'models/interface/user';

interface CurrentUserSlice {
    user: User | undefined;
}

const initialState: CurrentUserSlice = {
    user: undefined,
};

const CurrentUser = createSlice({
    name: SliceName.currentUser,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        resettUser(state) {
            state.user = undefined;
        },
    },
});

export const { setUser, resettUser } = CurrentUser.actions;
export default CurrentUser.reducer;
