import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TypeTimerState = {
  isTimerFinished: boolean;
};

const initialState: TypeTimerState = {
  isTimerFinished: false,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimerStatus: (state) => {
      state.isTimerFinished = true;
    },
  },
});

export const getTimerStatus = (state: RootState) => state.timer.isTimerFinished;
export const { setTimerStatus } = timerSlice.actions;

export const reducer = timerSlice.reducer;

export default reducer;
