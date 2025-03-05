import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../../features/profileSlice';
import authReducer from '../../features/authSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, profiles: profilesState}
export type AppDispatch = AppStore['dispatch'];
