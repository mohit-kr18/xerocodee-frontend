import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: null,
};

const sourceCodeServiceSlice = createSlice({
    name: 'sourceCodeService',
    initialState,
    reducers: {
        setSourceCodeServiceData: (state, action) => {
            state.data = action.payload;
        }
    },
});

export default sourceCodeServiceSlice.reducer;
export const {setSourceCodeServiceData} = sourceCodeServiceSlice.actions;