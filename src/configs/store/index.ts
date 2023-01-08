import { configureStore, Middleware, createListenerMiddleware } from '@reduxjs/toolkit';

import monitorReducersEnhancer from 'src/enhancers/monitorReducer';
import listenerMiddleware from 'src/listeners';
import rootReducer from 'src/reducers';
import counterReducer, { increment } from 'src/features/counter/counterSlice';
import { pokemonApi } from 'src/services/pokemon';

type RootState = ReturnType<typeof rootReducer>;

const middlewares: Middleware[] = [pokemonApi.middleware];

//(getDefaultMiddleware: any) => getDefaultMiddleware().concat(pokemonApi.middleware);

export default function configureAppStore(preloadedState: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware().prepend(listenerMiddleware.middleware), ...middlewares] as any,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('src/reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
