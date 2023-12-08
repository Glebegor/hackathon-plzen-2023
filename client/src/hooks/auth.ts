import { useState } from 'react';

import type { AuthInfo, AccessInfo } from '@typings/auth';

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthInfo | null | undefined>(undefined);

  const handleLogin = (authInfo: AccessInfo) => {};

  const handleRegister = (authInfo: AccessInfo) => {};

  return {
    auth,
    handleLogin,
    handleRegister,
  };
};
