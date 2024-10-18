import { UserService } from '../../services/UserService';
import { AuthUser, AuthMethodKey } from './auth.model';
import { IAuth } from './IAuth';

export class AuthBasic implements IAuth {
  public type: AuthMethodKey = 'BASIC';

  constructor() {
    console.log('starting auth basic');
  }

  private getUserDetails = async () => {
    const user = await UserService.getCurrentUser();
    return user;
  };

  public signIn = async (authUser?: AuthUser) => {
    const loginResp = await UserService.login(authUser);
    if (loginResp.ok) {
      localStorage.setItem('authToken', loginResp.token);
      sessionStorage.setItem('authToken', loginResp.token);
      return this.getUserDetails();
    }
    return undefined;
  };

  public signOut = async () => {
    sessionStorage.removeItem('@Auth.email');
  };

  public isAuthenticated = () => {
    const userStorage = sessionStorage.getItem('authToken');
    return Promise.resolve(!!userStorage);
  };

  public getUser = async () => {
    const userStorage = await sessionStorage.getItem('@Auth.email');
    if (userStorage !== null) {
      return { email: userStorage, username: 'Shiva Kumar K' };
    }
    return undefined;
  };

  private timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}
