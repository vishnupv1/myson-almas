import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState: any = {
  loading: false,
  data: [],
  err: ''
};
const getRequestSlice = createSlice({
  name: 'getRequest',
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
export const { fetchData, fetchFailure, fetchRequest } = getRequestSlice.actions;
export default getRequestSlice.reducer;
export const fetchposts: any = () => {
  return (dispatch: any) => {
    dispatch(fetchRequest);
    axios
      .get('http://localhost:8080/info/nhrtechnologies.com')
      .then((res) => dispatch(fetchData(res.data)))
      .catch((err) => dispatch(fetchFailure(err.message)));
  };
};
