import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoggedInUser } from '../../types/user';

export interface UserState extends LoggedInUser {
    token: string | null;
    lastSession: 'string' | null;
}

const initialState: UserState = {
    id: null,
    token: null,
    user_name: 'Guest',
    full_name: null,
    lastSession: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        register: (state, action: PayloadAction<{ user_name: string; full_name: string }>) => {},
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
