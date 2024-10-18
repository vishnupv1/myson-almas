// import { Dispatch } from 'redux';
// import axios from 'axios';
// import {
//   FETCH_DATA_REQUEST,
//   FETCH_DATA_SUCCESS,
//   FETCH_DATA_FAILURE,
//   POST_DATA_REQUEST,
//   POST_DATA_SUCCESS,
//   POST_DATA_FAILURE,
// } from '../types/apiTypes';

// export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
// export const fetchDataSuccess = (data: any) => ({ type: FETCH_DATA_SUCCESS, payload: data });
// export const fetchDataFailure = (error: string) => ({ type: FETCH_DATA_FAILURE, payload: error });

// export const postDataRequest = () => ({ type: POST_DATA_REQUEST });
// export const postDataSuccess = () => ({ type: POST_DATA_SUCCESS });
// export const postDataFailure = (error: string) => ({ type: POST_DATA_FAILURE, payload: error });

// export const fetchData = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch(fetchDataRequest());
//     try {
//       const response = await axios.get('https://api.example.com/data');
//       dispatch(fetchDataSuccess(response.data));
//     } catch (error:any) {
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };
