import { Store } from 'redux';
import { configureStore, Middleware, createListenerMiddleware } from '@reduxjs/toolkit';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import monitorReducersEnhancer from 'src/enhancers/monitorReducer';
import listenerMiddleware from 'src/listeners';
import rootReducer from 'src/reducers';

import { pokemonApi } from 'src/services/pokemon';
import { todoApi } from 'src/services/todo';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// TODO: injectEndpoints 직접 사용 여부 확인
const middlewares: Middleware[] = [pokemonApi.middleware, todoApi.middleware];

//(getDefaultMiddleware: any) => getDefaultMiddleware().concat(pokemonApi.middleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware: gDM => [...gDM().prepend(listenerMiddleware.middleware), ...middlewares] as any,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
  // enhancers: [monitorReducersEnhancer],
});

export const makeStore = (context: Context) => store;

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('src/reducers', () => store.replaceReducer(rootReducer));
}

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: false });
