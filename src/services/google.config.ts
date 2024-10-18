export const googleConfig = {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  uxMode: 'redirect',
  redirectUri: import.meta.env.VITE_LOGIN_PAGE,
  scopes: 'profile email openid',
  cookiePolicy: 'single_host_origin'
} as gapi.auth2.ClientConfig;
