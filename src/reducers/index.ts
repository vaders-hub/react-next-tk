import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from 'src/features/counter/counterSlice';
import { pokemonApi } from 'src/services/pokemon';

const rootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
