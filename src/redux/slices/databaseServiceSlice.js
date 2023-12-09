import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: null,
};

const databaseServiceSlice = createSlice({
    name: 'databaseService',
    initialState,
    reducers: {
        setDatabaseServiceData: (state, action) => {
            state.data = action.payload;
        }
    },
});

export default databaseServiceSlice.reducer;
export const { setDatabaseServiceData } = databaseServiceSlice.actions;