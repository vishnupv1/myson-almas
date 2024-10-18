import { createContext, useEffect, useState } from 'react';
import { useLoader } from '../../hooks/useLoader';
import {
  AuthContextData,
  AuthMethod,
  AuthMethodKey,
  AuthProviderProps,
  AuthUser,
  User
} from './auth.model';
import { IAuth } from './IAuth';
import { UserService } from '../../services/UserService';
import { msalConfig } from '../../services/azure.config';
import { useSearchParams } from 'react-router-dom';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMethod, setAuthMethod] = useState<IAuth>();
  const { setIsLoading } = useLoader();
  const [searchParams] = useSearchParams();
  const defaultName: string = searchParams.get('email') || '';
  const [logo, setLogo] = useState('');
  const [tenantId, setTenantId] = useState('');
  useEffect(() => {
    const domainName = defaultName.split('@')[1];
    if (domainName) {
      getClientAuthConfig(domainName);
      createAuthMethodFromStorage();
    }
  }, []);

  async function getClientAuthConfig(domainName: string) {
    if (domainName) {
      const config = await UserService.getDomainConfig(domainName);
      if (config) {
        setIsLoading(false);
        const { clientId } = config;
        const clientConfig: any = { ...msalConfig, auth: config };
        setLogo(config.logo);
        setTenantId(config.id);
        localStorage.setItem('clientConfig', JSON.stringify(clientConfig));
        localStorage.setItem('tenantid', tenantId);
      } else {
        setIsLoading(true);
      }
    }
    // const config = {
    //   clientId: `d95f3ae6-81eb-45e7-b69c-b1c9c3559a60`,
    //   redirectUri: `http://localhost:5173`,
    //   authority: `https://login.microsoftonline.com/eb68cc85-6ed8-4408-afc0-2ef07e038b5e`
    // };

    // console.log(config, 'config');
  }

  async function signIn(method: AuthMethodKey, authUser?: AuthUser) {
    localStorage.setItem('@Auth.method', method);
    localStorage.setItem('Authentication-Type', method);
    const auth = AuthMethod[method];
    setAuthMethod(auth);
    setIsLoading(true);
    setIsAuthenticated(true);

    const user = await auth.signIn(authUser);

    if (user != undefined) {
      await setUserLogged(auth);
    }
  }

  function signOut() {
    if (authMethod) {
      setIsAuthenticated(false);
      setUser(undefined);
      authMethod?.signOut();
      localStorage.removeItem('@Auth.method');
      localStorage.removeItem('@Auth.user');
    } else {
      console.error('auth method undefined');
    }
  }

  useEffect(() => {
    if (authMethod) {
      setUserLogged(authMethod);
    }
  }, [authMethod]);

  async function setUserLogged(authMethod: IAuth) {
    const isAuthenticated = await authMethod.isAuthenticated();
    setIsAuthenticated(isAuthenticated);
    const user = await authMethod.getUser();
    setUser(user);
  }

  async function createAuthMethodFromStorage() {
    const storageMethod = await localStorage.getItem('@Auth.method');
    if (storageMethod) {
      const method = storageMethod as AuthMethodKey;
      const auth = AuthMethod[method];
      setAuthMethod(auth);
    }
  }

  function getAuthMethodType() {
    return authMethod ? authMethod.type : 'undefined';
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, getAuthMethodType, logo, tenantId }}>
      {children}
    </AuthContext.Provider>
  );
}
