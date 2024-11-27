import React, { createContext } from 'react';

export interface IAuthContext {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as IAuthContext);
