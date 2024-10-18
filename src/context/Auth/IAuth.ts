import { AuthMethodKey, AuthUser, User } from './auth.model';

export interface IAuth {
  type: AuthMethodKey;
  // initialize: () => Promise<void>;
  signIn: (authUser?: AuthUser) => Promise<User | void>;
  signOut: () => Promise<void>;
  isAuthenticated: () => Promise<boolean>;
  getUser: () => Promise<User | undefined>;
}
