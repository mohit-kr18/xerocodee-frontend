import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/auth";


const initialState = {
    token: localStorage.getItem('token') || null,
    error: null,
    loading: false,
    provider: localStorage.getItem('provider') || null,
    user: null
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await authService.login(data.email, data.password);
            dispatch(login(response));

            
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
)


export const registerUser = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            
            const response = await authService.register(data.firstName, data.lastName, data.email, data.password);
            dispatch(login(response));
            // console.log(response);
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.accessToken;
            let provider;
            if(action.payload.provider){
                provider = action.payload.provider;
            }
            else{
                provider = "authService";
            }
            state.provider = provider;
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('provider', provider)
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        },
        resetError: (state) => {
            state.error = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state ) => {
            state.loading = true;
        })
        builder.addCase(loginUser.fulfilled, (state ) => {
            state.loading = false;
            state.error = null;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    
    }
})

export const { login, logout,resetError,setUser } = authSlice.actions;
export default authSlice.reducer;