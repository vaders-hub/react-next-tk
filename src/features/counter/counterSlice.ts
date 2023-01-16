import { createSlice, current } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import type { RootState } from 'src/reducers';
import type { PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // console.log('server increment >>');
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: state => {
      state.value = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state: any, action: any) => {
      const stateDiff = diff(state, action.payload);
      const isDiff = stateDiff?.value?.[0];
      const fromSSR = action.payload.counter.value;
      const isClient = typeof window !== 'undefined';
      console.log('HYDRATEHYDRATE', isDiff, fromSSR, typeof window);

      state.value = isDiff ? isDiff : fromSSR ? isDiff + fromSSR : 0;
    });
  },
  // prepare(payload: number, vaule: number) {
  //   return { payload, meta: { vaule } };
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
