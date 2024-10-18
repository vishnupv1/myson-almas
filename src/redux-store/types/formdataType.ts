interface PointOfContact {
  name: string;
  type: 'primary' | 'secondary';
  email: string;
  phoneNumber: string;
  designation: string;
}

interface SsoConfig {
  clientId: string;
  redirectURL: string;
  authority: string;
}

interface DbConfig {
  hostname: string;
  port: number;
  dbName: string;
  username: string;
  password: string;
  prefix: string;
}

export interface TenantFormData {
  tenantName: string;
  description?: string;
  domainName: string;
  status: string;
  industry: string;
  logo: string;
  primaryAddress: string;
  country: string;
  province: string;
  city: string;
  zipcode: string;
  organizationHeadCount: string;
  orgPhoneNumber: string;
  orgEmail: string;
  isConsultingOrg: boolean;
  pointOfContacts: PointOfContact[];
  ssoEnabled: boolean;
  ssoConfig: SsoConfig;
  basicAuthEnabled: boolean;
  dbConfig: DbConfig;
  subscriptions: string[];
}

export enum ActionType {
  ADD_DATA = 'ADD_DATA',
  ADD_AUTO_COMPLETE_DATA = 'ADD_AUTO_COMPLETE_DATA',
  ADD_POC_DETAILS = 'ADD_POC_DETAILS',
  EDIT_POC_DETAILS = 'EDIT_POC_DETAILS',
  DELETE_POC_DETAILS = ' Delete_POC_DETAILS'

  // New action type
}
interface SetDataAction {
  type: ActionType.ADD_DATA;
  payload: any; // Payload type for the data
}
interface setAutoDataAction {
  type: ActionType.ADD_AUTO_COMPLETE_DATA;
  payload: any; // Payload type for the data
}
interface setPocDetails {
  type: ActionType.ADD_POC_DETAILS;
  payload: any;
}
interface editPocDetails {
  type: ActionType.EDIT_POC_DETAILS;
  payload: any;
  index: number;
}
interface deletePocDetails {
  type: ActionType.DELETE_POC_DETAILS;
  index: number;
}

export type AppAction =
  | SetDataAction
  | setAutoDataAction
  | setPocDetails
  | editPocDetails
  | deletePocDetails;
