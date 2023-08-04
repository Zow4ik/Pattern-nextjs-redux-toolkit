import { configureStore } from "@reduxjs/toolkit";
import countReducer from './actions/countSlice';

export default configureStore({
   reducer: {
      count: countReducer,
   }
})