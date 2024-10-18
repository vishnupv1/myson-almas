import { TenantFormData, AppAction, ActionType } from '../types/formdataType';

const initialState: TenantFormData = {
  tenantName: '',
  description: '',
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

const formdataReducer = (state: TenantFormData = initialState, action: AppAction): any => {
  switch (action.type) {
    case ActionType.ADD_DATA:
      return { ...state, ...action.payload };
    case ActionType.ADD_AUTO_COMPLETE_DATA:
      console.log('aaa', action.payload);
      let [a, b] = action.payload; //here data is in arr
      return { ...state, [a]: b };
    case ActionType.ADD_POC_DETAILS:
      let lst: any = [...state.pointOfContacts, action.payload];
      // console.log(lst)
      return { ...state, pointOfContacts: [...lst] };
    case ActionType.EDIT_POC_DETAILS:
      let arr: any = [...state.pointOfContacts];
      arr.splice(action.index, 1, { ...action.payload });
      return { ...state, pointOfContacts: [...arr] };
    case ActionType.DELETE_POC_DETAILS:
      let temp_arr: any = [...state.pointOfContacts];
      // console.log(action.index)
      temp_arr.splice(action.index, 1);
      return { ...state, pointOfContacts: [...temp_arr] };
    default:
      return state;
  }
};

export default formdataReducer;
