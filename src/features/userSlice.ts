import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        visibleEmailUserIds: [] as number[],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        toggleEmailVisibility: (state, action) => {
            const userId = action.payload;
            if (state.visibleEmailUserIds.includes(userId)) {
                state.visibleEmailUserIds = state.visibleEmailUserIds.filter(id => id !== userId);
            } else {
                state.visibleEmailUserIds.push(userId);
            }
        },
    },
});

export const { setUser, toggleEmailVisibility } = userSlice.actions;
export default userSlice.reducer;