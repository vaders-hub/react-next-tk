import { setupListeners } from '@reduxjs/toolkit/query';
import { store } from 'src/configs/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
