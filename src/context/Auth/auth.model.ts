import { AuthBasic } from './AuthBasic';
import { AuthAzure } from './AuthAzure';
import { ReactNode } from 'react';
import { AuthGoogle } from './AuthGoogle';

export interface User {
  username: string;
  email: string;
  photo?: string;
}

export interface AuthUser {
  username: string;
  password: string;
}

export interface AuthContextData {
  user?: User;
  signIn: (method: AuthMethodKey, user?: AuthUser) => void;
  signOut: () => void;
  isAuthenticated: boolean;
  getAuthMethodType: () => string;
  logo:string,
  tenantId:string
}

export const AuthMethod = {
  AZURE: new AuthAzure(),
  BASIC: new AuthBasic(),
  GOOGLE: new AuthGoogle()
};

export type AuthMethodKey = 'AZURE' | 'BASIC' | 'GOOGLE';

export interface AuthProviderProps {
  children: ReactNode;
}
