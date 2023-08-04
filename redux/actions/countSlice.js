import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
   name: "count",
   initialState: {
      num: 1,
   },
   reducers: {
      inc: (state) => {
         state.num += 1;
      },
      dec: (state) => {
         state.num -= 1;
      },
   }
})

export const {inc, dec} = countSlice.actions;

export const selectCount = (state) => state.count.num;

export default countSlice.reducer;