import { createSlice, current } from '@reduxjs/toolkit';

export interface ThemeState {
  mode: boolean;
}

const initialState: ThemeState = {
  mode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: state => {
      state.mode = !state.mode;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
