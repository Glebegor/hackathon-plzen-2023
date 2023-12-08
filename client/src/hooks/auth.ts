import { useSelector, useDispatch } from 'react-redux';

import { setAuth } from '@store/slices/auth';

import type { RootState } from '@store/base';
import type { AccessInfo } from '@typings/auth';

const EXAMPLE_AUTH = {
  accessToken: 'a',
  tokenType: 'a',
  expiresIn: 0,
};

export const useAuth = () => {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (authInfo: AccessInfo) => {
    dispatch(setAuth(EXAMPLE_AUTH));
    localStorage.setItem('auth', JSON.stringify(EXAMPLE_AUTH));
  };

  const handleRegister = (authInfo: AccessInfo) => {
    dispatch(setAuth(EXAMPLE_AUTH));
    localStorage.setItem('auth', JSON.stringify(EXAMPLE_AUTH));
  };

  return {
    auth: authInfo,
    handleLogin,
    handleRegister,
  };
};
