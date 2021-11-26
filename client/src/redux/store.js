import { configureStore } from "@reduxjs/toolkit";
import votesReducer from "./votesSlice";

export default configureStore({
  reducer: {
    votes: votesReducer,
  },
});
