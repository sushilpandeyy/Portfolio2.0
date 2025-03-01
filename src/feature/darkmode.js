 import { createSlice } from "@reduxjs/toolkit";
 
const getPreferredTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "Dark" : "Light";
  }
  return "Dark"; n
};

const initmode = {
   current: getPreferredTheme()
};

export const mode = createSlice({
    name: 'mode',
    initialState: initmode,
    reducers: {
      change: (state, action) => {
        state.current = action.payload.mode;
      },
    },
  });
  
export const { change } = mode.actions;
export default mode.reducer;

export const isDarkMode = (mode) => mode === "Dark";