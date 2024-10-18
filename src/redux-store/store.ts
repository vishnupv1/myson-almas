import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
// import apiReducer from './reducers/apiReducer';
import formdataReducer from './reducers/formdatareducer';
const rootReducer = combineReducers({
  formdata: formdataReducer,
  localdata: reducer
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
