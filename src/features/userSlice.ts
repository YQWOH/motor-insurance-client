import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        emailVisible: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        toggleEmailVisibility: (state) => {
            state.emailVisible = !state.emailVisible;
        },
    },
});

export const { setUser, toggleEmailVisibility } = userSlice.actions;
export default userSlice.reducer;