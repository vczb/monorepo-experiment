import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import userSlice from "features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
