import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'userSlice',

  initialState: {
    name: 'Rashik',
  },

  reducers: {
    setName: (state, action) => {
      // state => initial states
      // payload => user Parameter
      state.name = action.payload;
    },
  },
});

export { counterSlice };
export const { setName } = counterSlice.actions;
