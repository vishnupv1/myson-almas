import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState: any = {
  loading: false,
  data: [],
  err: ''
};
const createTenantSlice = createSlice({
  name: 'createTenant',
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.loading = true;
    },
    fetchData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.err = '';
    },
    fetchFailure: (state, action) => {
      state.data = [];
      state.loading = false;
      state.err = action.payload;
    }
  }
});
export const { fetchData, fetchFailure, fetchRequest } = createTenantSlice.actions;
export default createTenantSlice.reducer;

export const createTenant: any = (data:any) => {
  return (dispatch: any) => {
    dispatch(fetchRequest);
    axios
      .post('http://localhost:8080/tenants',data)
      .then((res) => dispatch(fetchData(res.data)))
      .catch((err) => dispatch(fetchFailure(err.message)));
  };
};
