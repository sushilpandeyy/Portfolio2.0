import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../feature/darkmode";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    
  },
});
export default store;
