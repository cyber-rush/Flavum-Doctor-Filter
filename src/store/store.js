import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import filtersReducer from './filters/filtersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    filters: filtersReducer, // Add filters reducer to the store
  },
});


