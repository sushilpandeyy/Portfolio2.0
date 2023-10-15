import { createSlice } from "@reduxjs/toolkit";

const initmode = {
   current: "Light"
};

export const mode = createSlice({
    name: 'mode',
    initialState: initmode,
    reducers: {
      change: (state, action) => {
        state.current = action.payload.mode; // Update the 'current' property directly
      },
    },
  });
  
export const { change } = mode.actions; // Corrected this line
export default mode.reducer;
