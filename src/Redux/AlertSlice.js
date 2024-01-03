import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnimationButtonActive: false,
  activeAnimationName: "", // Initialize the name as an empty string
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAnimationButtonActive: (state, action) => {
      state.isAnimationButtonActive = action.payload.isActive;
      state.activeAnimationName = action.payload.animationName;
    },
  },
});

export const { setAnimationButtonActive } = alertsSlice.actions;

export const getAnimationButtonActive = (state) =>
  state.alerts.isAnimationButtonActive;

export const getActiveAnimationName = (state) =>
  state.alerts.activeAnimationName;

export default alertsSlice.reducer;
