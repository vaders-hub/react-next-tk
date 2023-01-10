import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

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
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(increment, (state, action) => {
      // action is inferred correctly here if using TS
    });
    // [HYDRATE]: (state, action) => {
    //   // IMPORTANT - for server side hydration

    //   if (!action.payload.profile.name) {
    //     // IMPORTANT - for not overriding data on client side
    //     return state;
    //   }

    //   state.value = action.payload.value;
    // },
  },
  // prepare(payload: number, vaule: number) {
  //   return { payload, meta: { vaule } };
  // },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectValue = (state: CounterState) => state.value;

export default counterSlice.reducer;
