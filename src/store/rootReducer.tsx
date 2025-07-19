import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "@modules/Home/api/slice";

export default combineReducers({
    home: homeSlice.reducer
})