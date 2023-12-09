import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    quantity:0
}

const progressAmountslice = createSlice({
    name:"progressAmount",
    initialState,
    reducers:{
        setProgressAmount: (state,action) =>{
            state.quantity = action.payload;
            // console.log(state.quantity)
        }
    }
})

export default progressAmountslice.reducer;
export const {setProgressAmount} = progressAmountslice.actions;