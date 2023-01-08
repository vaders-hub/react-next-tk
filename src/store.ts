import { setupListeners } from '@reduxjs/toolkit/query';
import configureAppStore from 'src/configs/store';

export const store = configureAppStore({});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
