import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from 'src/features/common/themeSlice';
import counterReducer from 'src/features/counter/counterSlice';
import { emptyPokemonApi } from 'src/services/pokemon-api';
import { emptyTodoApi } from 'src/services/todo-api';

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  [emptyPokemonApi.reducerPath]: emptyPokemonApi.reducer,
  [emptyTodoApi.reducerPath]: emptyTodoApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
