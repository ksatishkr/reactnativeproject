import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "posts",
  initialState: {
    ids: [],
    allUser: [],
    userIds: [],
    userEmails: [],
  },
  reducers: {
    allUsers: (state, action) => {
      state.allUser = action.payload;
    },
    getUserEmails: (state, action) => {
      //   console.log(state.allUser);
      state.userEmails = state.allUser.filter(
        (user) => user.key === action.payload
      );
    },
    replayToUser: (state, action) => {
      state.userEmails = [action.payload, ...state.userEmails];
    },
  },
});

export const allUsers = slice.actions.allUsers;
export const getUserEmails = slice.actions.getUserEmails;

export default slice.reducer;
