import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from 'src/features/counter/counterSlice';
import { emptyPokemonApi } from 'src/services/pokemon-api';
import { emptyMemberApi } from 'src/services/member-api';

const rootReducer = combineReducers({
  counter: counterReducer,
  [emptyPokemonApi.reducerPath]: emptyPokemonApi.reducer,
  [emptyMemberApi.reducerPath]: emptyMemberApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
