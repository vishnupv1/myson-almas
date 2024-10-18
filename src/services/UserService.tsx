import APIService from '../utils/APIService';

export const UserService = {
  login: (auth: any): Promise<any> => APIService.post('', 'login', auth),
  getCurrentUser: (): Promise<any> => APIService.get('', 'me'),
  getUsersList: (): Promise<any> => APIService.get('/list', ''),
  getDomainConfig: (domainName: string): Promise<any> => APIService.get('/info', `${domainName}`)
};
