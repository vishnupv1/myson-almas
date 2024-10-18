// import {
//     FETCH_DATA_REQUEST,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILURE,
//     POST_DATA_REQUEST,
//     POST_DATA_SUCCESS,
//     POST_DATA_FAILURE,
//   } from '../types/apiTypes';

//   interface DataState {
//     data: any;
//     loading: boolean;
//     error: string | null;
//   }

//   const initialState: DataState = {
//     data: null,
//     loading: false,
//     error: null,
//   };

//   const apiReducer = (state = initialState, action: any): DataState => {
//     switch (action.type) {
//       case FETCH_DATA_REQUEST:
//       case POST_DATA_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case FETCH_DATA_SUCCESS:
//         return {
//           ...state,
//           data: action.payload,
//           loading: false,
//           error: null,
//         };
//       case POST_DATA_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           error: null,
//         };
//       case FETCH_DATA_FAILURE:
//       case POST_DATA_FAILURE:
//         return {
//           ...state,
//           data: null,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

//   export default apiReducer;
