import { setupListeners } from '@reduxjs/toolkit/query';
import configureAppStore from 'src/configs/store';

export const store = configureAppStore({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
