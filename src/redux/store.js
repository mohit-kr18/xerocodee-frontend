import { configureStore } from "@reduxjs/toolkit";
import cloudServiceReducer from "./slices/cloudServiceSlice";
import databaseServiceReducer from "./slices/databaseServiceSlice";
import sourceCodeServiceReducer from "./slices/souceCodeServiceSlice";
import progressAmountReducer from "./slices/progressAmountSlice";
import authReducer from "./slices/authSlice";
import preferencesReducer from "./slices/preferencesSlice";

const store = configureStore({
    reducer: {
        cloudService: cloudServiceReducer,
        databaseService: databaseServiceReducer,
        sourceCodeService: sourceCodeServiceReducer,
        progressAmount: progressAmountReducer,
        auth: authReducer,
        preferences: preferencesReducer
    }
})

export default store;