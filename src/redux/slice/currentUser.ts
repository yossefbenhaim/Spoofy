import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from 'models/interface/user';
const initialState: User = {
    id: '',
    firstName: '',
    lastName: '',
};

const CurrentUser = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { setUser: setUser } = CurrentUser.actions;
export default CurrentUser.reducer;
