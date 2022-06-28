import { createContext, useContext } from 'react';
import { AuthContextModel, createEmptyAuthContext } from './auth.model';

export const AuthContext = createContext<AuthContextModel>(
  createEmptyAuthContext()
);

export const useAuthContext = () => useContext<AuthContextModel>(AuthContext);
