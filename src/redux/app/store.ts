import { configureStore } from "@reduxjs/toolkit";
import { emptyApi } from "./services/api";

import authReducer from "../features/auth/authSlice";
import layoutReducer from "../features/layout/layoutSlice";
import loginReducer from "../features/login/loginSlice";
import counterReducer from "../features/counter/counterSlice";
import schoolSubjectsReducer from "../features/school_subjects/schoolSubjectsSlice";

export const store = configureStore({
  reducer: {
    [emptyApi.reducerPath]: emptyApi.reducer,

    auth: authReducer,
    layout: layoutReducer,
    login: loginReducer,
    counter: counterReducer,
    schoolSubjects: schoolSubjectsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(emptyApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch