import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { toggleSlice } from './slices/toggleSlice';
import { counterSlice } from './slices/counterSlice';

const reducer = combineReducers({
  toggleSlice: toggleSlice.reducer,
  counterSlice: counterSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
  devTools: true,
});
