import { createListenerMiddleware } from '@reduxjs/toolkit';
import counterReducer, { increment, decrement, incrementByAmount } from 'src/features/counter/counterSlice';
import { store } from 'src/configs/store';
import { emptyPokemonApi } from 'src/services/pokemon-api';
import { emptyMemberApi } from 'src/services/member-api';

import type {
  TypedStartListening,
  TypedAddListener,
  ListenerMiddlewareInstance,
  ListenerEffectAPI,
  ThunkDispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import type { RootState } from 'src/configs/store';

const listenerMiddleware = createListenerMiddleware();

type ListenerAction = Record<string, unknown>;
type ListenerApi = ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>, unknown>;

const incListener = async (action: ListenerAction, listenerApi: ListenerApi) => {
  // console.log('Previous action ', action);
  // console.log('Current state ', listenerApi.getState());
  // Spawn a child task and start it immediately
  const task = listenerApi.fork(async forkApi => {
    await forkApi.delay(5);
    // Complete the child by returning a value
    return 42;
  });

  // TODO : RTQuery type 설정
  // const { getPokemonByName }: any = emptyPokemonApi.endpoints;
  // const { data: pokemonData } = await listenerApi.dispatch(getPokemonByName.initiate('bulbasaur'));
  // const { getMemberInfo }: any = emptyMemberApi.endpoints;
  // const { data: memberData } = await listenerApi.dispatch(getMemberInfo.initiate());

  // console.log('datadata', memberData);
  // select
  // const resultS = getPokemonByName.select()(listenerApi.getState());
  // const { data, status, error } = resultS;
  const result = await task.result;
  // Unwrap the child result in the listener
  if (result.status === 'ok') {
    // Logs the `42` result value that was returned
    // console.log('Child succeeded: ', result.value);
  }
};
const decListener = async (action: ListenerAction, listenerApi: ListenerApi) => {
  // TODO : RTQuery type 설정
  const { getPokemonByName }: any = emptyPokemonApi.endpoints;
  const { data } = await listenerApi.dispatch(getPokemonByName.initiate('bulbasaur'));
};

listenerMiddleware.startListening({ actionCreator: increment, effect: incListener });
listenerMiddleware.startListening({ actionCreator: decrement, effect: decListener });
listenerMiddleware.startListening({ actionCreator: incrementByAmount, effect: (action, listenerApi) => {} });

export default listenerMiddleware;
