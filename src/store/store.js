import { configureStore, createSlice } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const counterStore = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default counterStore;
