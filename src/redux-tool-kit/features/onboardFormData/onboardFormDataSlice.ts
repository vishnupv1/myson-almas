import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  domainUrl: string;
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
const initialState: TenantFormData = {
  tenantName: 'bhargav',
  description: '',
  domainUrl: '',
  domainName: '',
  status: 'Active',
  industry: '',
  logo: 'BASE64 string goes here...',
  primaryAddress: '',
  country: '',
  province: '',
  city: '',
  zipcode: '',
  organizationHeadCount: '',
  orgPhoneNumber: '',
  orgEmail: '',
  isConsultingOrg: true,
  pointOfContacts: [
    {
      name: 'Employee Full Name',
      type: 'primary',
      email: 'employee1@nhrtechnologies.com',
      phoneNumber: '9876543210',
      designation: 'Human Resources Manager'
    },
    {
      name: 'Employee Full Name',
      type: 'secondary',
      email: 'employee1@nhrtechnologies.com',
      phoneNumber: '9876543210',
      designation: 'Human Resources Manager'
    }
  ],
  ssoEnabled: true,
  ssoConfig: {
    clientId: '',
    redirectURL: '',
    authority: ''
  },
  basicAuthEnabled: true,
  dbConfig: {
    hostname: '',
    port: 27017,
    dbName: '',
    username: '',
    password: '',
    prefix: 'mongodb/mongodb+srv'
  },
  subscriptions: ['MODULE1', 'MODULE2', 'MODULE3']
};
const onboardFormDataSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    add_AutoComplete_FormData: (state, action: PayloadAction<any>) => {
      let [a, b] = action.payload;
      return { ...state, [a]: b };
    },
    add_Poc_Details: (state, action: PayloadAction<any>) => {
      let lst: any = [...state.pointOfContacts, action.payload];
      return { ...state, pointOfContacts: [...lst] };
    },
    edit_Poc_Details: (state, action: PayloadAction<any>) => {
      let arr: any = [...state.pointOfContacts];
      arr.splice(action.payload.index, 1, { ...action.payload.pocData });
      return { ...state, pointOfContacts: [...arr] };
    },
    delete_Poc_Details: (state, action: PayloadAction<any>) => {
      let temp_arr: any = [...state.pointOfContacts];
      temp_arr.splice(action.payload, 1);
      return { ...state, pointOfContacts: [...temp_arr] };
    }
  }
});
export const {
  addFormData,
  delete_Poc_Details,
  edit_Poc_Details,
  add_AutoComplete_FormData,
  add_Poc_Details
} = onboardFormDataSlice.actions;
export default onboardFormDataSlice.reducer;
