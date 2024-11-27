import React, { useState } from 'react';

import { AuthContext } from './auth-context';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<boolean>(false);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
