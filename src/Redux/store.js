import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "./AlertSlice";

const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    // other reducers if you have them
  },
});

export default store;
