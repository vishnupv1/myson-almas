import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  d: 'hiie'
};
const localSlice = createSlice({
  name: 'localdata',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.d = action.payload;
      return state;
    }
  }
});
export const { setData } = localSlice.actions;
export default localSlice.reducer;
