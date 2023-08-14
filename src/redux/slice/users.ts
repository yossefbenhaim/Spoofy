import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';
import { User } from 'models/interface/user';

interface CurrentSongsSlice {
    users: User[];
}

const initialState: CurrentSongsSlice = {
    users: [],
};

const Users = createSlice({
    name: SliceName.users,
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = Users.actions;
export default Users.reducer;
