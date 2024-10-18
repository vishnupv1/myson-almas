import { AppState, AppAction, ActionType } from '../types/types';

const initialState: AppState = {
  data: '' // Initial data value
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return { ...state, data: action.payload }; // Update data with payload
    default:
      return state;
  }
};

export default reducer;
