import { createListenerMiddleware } from '@reduxjs/toolkit';
import counterReducer, { increment } from 'src/features/counter/counterSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {
    // Spawn a child task and start it immediately
    const task = listenerApi.fork(async forkApi => {
      // Artificially wait a bit inside the child
      await forkApi.delay(5);
      // Complete the child by returning a value
      return 42;
    });

    const result = await task.result;
    // Unwrap the child result in the listener
    if (result.status === 'ok') {
      // Logs the `42` result value that was returned
      console.log('Child succeeded: ', result.value);
    }
  },
});

export default listenerMiddleware;
