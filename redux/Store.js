import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./StoreHandler";
// import { enableMapSet } from "immer";
// enableMapSet();
const store = configureStore({
  reducer: {
    reduxHandler: postsReducer,
  },
});
export default store;
