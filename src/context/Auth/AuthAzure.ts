import {
  AuthenticationResult,
  IPublicClientApplication,
  PublicClientApplication
} from '@azure/msal-browser';

import { loginRequest } from '../../services/azure.config';
import { User, AuthMethodKey } from './auth.model';
import { IAuth } from './IAuth';
import { UserService } from '../../services/UserService';

export class AuthAzure implements IAuth {
  public type: AuthMethodKey = 'AZURE';
  private instance: PublicClientApplication | any;

  constructor() {
    const config: string = localStorage.getItem('clientConfig') || '{}';
    const clientConfig = JSON.parse(config) || {};
    this.instance = new PublicClientApplication(clientConfig);
    console.log('starting auth azure');
    this.initializeMSAL();
  }

  // Initialize MSAL
  public initializeMSAL = async () => {
    try {
      await this.instance.initialize();
      console.log('MSAL initialized successfully');
    } catch (error: any) {
      console.log(error.message);
      console.error('Error initializing MSAL:', error);
    }
  };

  public signIn = async () => {
    console.log('signIn azure');
    await this.instance.handleRedirectPromise().then(() => {
      this.handleLogin(this.instance);
    });
  };

  public signOut = async () => {
    console.log('signOut azure');
    await this.instance.handleRedirectPromise().then(() => {
      this.handleLogout(this.instance);
    });
  };

  public isAuthenticated = async () => {
    return await this.instance.handleRedirectPromise().then((x: any) => {
      const accounts = this.instance.getAllAccounts();
      return accounts.length > 0;
    });
  };

  public getUser = async () => {
    const userStorage = localStorage.getItem('@Auth.user');
    if (userStorage !== null) {
      return JSON.parse(userStorage) as User;
    }

    const accounts = this.instance.getAllAccounts();
    if (accounts.length === 0) {
      return undefined;
    }

    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    const userAzure: any = await this.instance
      .acquireTokenSilent(request)
      .then((response: AuthenticationResult) => {
        localStorage.setItem('authToken', response.idToken);
        return this.getUserDetails();
      });

    if (userAzure) {
      const user = {
        email: userAzure.userPrincipalName,
        username: userAzure.displayName
      } as User;
      localStorage.setItem('@Auth.user', JSON.stringify(user));
      return user;
    }

    return undefined;
  };

  private getUserDetails = async () => {
    const user = await UserService.getCurrentUser();
    return user;
  };

  private handleLogin = (instance: IPublicClientApplication) => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  private handleLogout = (instance: IPublicClientApplication) => {
    instance.logout().catch((e) => {
      console.error(e);
    });
  };
}
