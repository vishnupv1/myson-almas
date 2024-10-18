export interface AppState {
  data: string; // Add a data property to the state
}

export enum ActionType {
  SET_DATA = 'SET_DATA' // New action type
}

interface SetDataAction {
  type: ActionType.SET_DATA;
  payload: string; // Payload type for the data
}

export type AppAction = SetDataAction;
