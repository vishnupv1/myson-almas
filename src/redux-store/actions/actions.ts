import { ActionType } from '../types/types';

export const setData = (data: string): any => ({
  type: ActionType.SET_DATA,
  payload: data
});
