import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    id: number | null;
    token: string | null;
    user_name: string | null;
    full_name: string | null;
}

const initialState: UserState = {
    id: null,
    token: null,
    user_name: 'Guest',
    full_name: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateToken: state => {
            console.log(state);
        },
        logout: state => {
            console.log(state);
        },
        updateUserInfo: (state, action: PayloadAction<{ user_name: string; full_name: string }>) => {
            console.log(state, action);
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateToken, logout, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
