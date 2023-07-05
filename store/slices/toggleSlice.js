import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggleSlice',

  initialState: {
    switch: false,
  },

  reducers: {
    setSwitch: (state) => {
      state.switch = !state.switch;
    },
  },
});

export const { setSwitch } = toggleSlice.actions;
