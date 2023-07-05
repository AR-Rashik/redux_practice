import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counterSlice',

  initialState: {
    counter: 2,
    bool: true,
  },

  reducers: {
    setCounter: (state, action) => {
      let value = action.payload ? action.payload : state.counter;
      if (state.bool) {
        state.counter *= value;
      } else {
        state.counter;
      }
    },
    setBool: (state, action) => {
      state.bool = action.payload;
    },
  },
});

export const { setCounter, setBool } = counterSlice.actions;
