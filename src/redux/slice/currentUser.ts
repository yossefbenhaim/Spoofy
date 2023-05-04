import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from 'models/interface/user';

interface CurrentUserSlice {
    user: User | undefined;
}

const initialState: CurrentUserSlice = {
    user: { id: '', firstName: '', lastName: '' },
};

const CurrentUser = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = CurrentUser.actions;
export default CurrentUser.reducer;
