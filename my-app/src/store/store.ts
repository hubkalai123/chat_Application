// 'use clinet';

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import Authreducers from './reducers/Authreducers';

export const store = configureStore({
  reducer: {
    auth: Authreducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
