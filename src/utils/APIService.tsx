import { AxiosResponse } from 'axios';
import httpClient from './axiosInterceptor';

const getQueryString = (queryParams: any = {}): string => {
  const queryString = Object.keys(queryParams)
    .map((param) => `${param}=${queryParams[param]}`)
    .join('&');
  return queryString ? `?${queryString}` : queryString;
};

const responseBody = (response: AxiosResponse) => response.data;
const prepareURL = (apiUrl: string, urlString: string, queryParams?: {}): string =>
  `${apiUrl}/${urlString}${getQueryString(queryParams)}`;

const APIService = {
  get: async (apiUrl: string, url: string, queryParams?: {}) => {
    return httpClient.get(prepareURL(apiUrl, url, queryParams)).then(responseBody);
  },
  post: async (apiUrl: string, url: string, body: {}) => {
    return httpClient.post(prepareURL(apiUrl, url), body).then(responseBody);
  },
  put: async (apiUrl: string, url: string, body: {}) => {
    return httpClient.put(prepareURL(apiUrl, url), body).then(responseBody);
  },
  delete: async (apiUrl: string, url: string) => {
    return httpClient.delete(prepareURL(apiUrl, url)).then(responseBody);
  }
};
export default APIService;
