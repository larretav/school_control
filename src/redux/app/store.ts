import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import layoutReducer from "../features/layout/layoutSlice";
import { emptyApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [emptyApi.reducerPath]: emptyApi.reducer,

    auth: authReducer,
    counter: counterReducer,
    layout: layoutReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptyApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch