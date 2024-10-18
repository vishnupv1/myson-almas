import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080/';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const httpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS
});

// Request Interceptors
httpClient.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken');
  config.headers['Authentication-Type'] = localStorage.getItem('Authentication-Type');
  const localStorageData = window.localStorage.getItem('clientConfig');
  const parsedData = JSON.parse(localStorageData);
  const authObject = parsedData?.auth;
  const tenantId = authObject.id;
  console.log('ddddddddddddddddddd', tenantId);

  config.headers['tenantid'] = tenantId;
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // Handle unauthorized access
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }

    return Promise.reject(error);
  }
);

export default httpClient;
