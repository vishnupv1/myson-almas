import { configureStore } from '@reduxjs/toolkit';
import onboardFormDataSlice from '../features/onboardFormData/onboardFormDataSlice.ts';
import localSlice from '../features/local/localSlice.ts';
import getRequestSlice from '../features/getRequest/getRequestSlice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createTenantSlice from '../features/postRequest/createTenantSlice.ts';
export const store = configureStore({
  reducer: {
    basicData: onboardFormDataSlice,
    localdata: localSlice,
    getRequest: getRequestSlice,
    postRequest:createTenantSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
