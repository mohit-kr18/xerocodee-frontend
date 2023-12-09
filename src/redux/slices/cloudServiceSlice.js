import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: null,
};



const cloudServiceSlice = createSlice({
    name: 'cloudService',
    initialState,
    reducers: {
        setCloudServiceData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default cloudServiceSlice.reducer;
export const { setCloudServiceData } = cloudServiceSlice.actions;