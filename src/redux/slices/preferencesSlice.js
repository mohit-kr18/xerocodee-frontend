import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    prefs: null
}


const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setPreferences: (state, action) => {
            if(action.payload)
            state.prefs = {
                accountType: action.payload.accountType,
                accountName: action.payload.accountName,
                developmentOption: action.payload.developmentOption
            }
        },
        setAccountTypeName: (state, action) => {
            const accountName = action.payload.accountName;
            const accountType = action.payload.accountType;


            state.prefs = {
                ...state.prefs,
                accountType: accountType===''?'Developer':accountType,
                accountName: accountName===''?'developer':accountName
            }
        },
        setDevelopmentOption: (state, action) => {
            state.prefs = {
                ...state.prefs,
                developmentOption: action.payload.developmentOption
            }
        }
    }
})


export const { setPreferences, setAccountTypeName,setDevelopmentOption } = preferencesSlice.actions;
export default preferencesSlice.reducer;