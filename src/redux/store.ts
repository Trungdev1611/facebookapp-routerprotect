import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import NotifyReducer from "./Slice/ToastSlice";

export const rootReducer = combineReducers({ notify: NotifyReducer });
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>; //type cuar rootReducer trong redux
