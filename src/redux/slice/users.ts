import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from 'models/interface/user';
import SliceName from 'models/emuns/sliceName';

interface currentFavoritesSlice {
    users: User[] | undefined;
}

const initialState: currentFavoritesSlice = {
    users: undefined,
};

const Users = createSlice({
    name: SliceName.favorites,
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        deleteUser: (state, action: PayloadAction<User | undefined>) => {
            state.users = state.users?.filter(
                (user) => user.id !== action.payload?.id
            );
        },
    },
});

export const { setUsers, deleteUser } = Users.actions;
export default Users.reducer;
