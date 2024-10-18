import { ActionType } from '../types/formdataType';

export const addDataToForm = (data: any): any => ({
  type: ActionType.ADD_DATA,
  payload: data
});
export const addAutoCompleteData = (data: any) => ({
  type: ActionType.ADD_AUTO_COMPLETE_DATA,
  payload: data
});
export const addPocDetails = (data: any): any => ({
  type: ActionType.ADD_POC_DETAILS,
  payload: data
});
export const editPocDetails = (data: any, index: number): any => ({
  type: ActionType.EDIT_POC_DETAILS,
  payload: data,
  index: index
});
export const deletePocDetails = (data: number): any => ({
  type: ActionType.DELETE_POC_DETAILS,
  index: data
});
