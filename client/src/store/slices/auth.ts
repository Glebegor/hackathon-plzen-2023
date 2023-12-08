import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { AuthInfo } from '@typings/auth';

interface InitialStateDefaultObject {
  authInfo: AuthInfo | null | undefined;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  authInfo: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthInfo | null | undefined>) => {
      state.authInfo = action.payload;
    },
  },
});
export const { setAuth } = authSlice.actions;
