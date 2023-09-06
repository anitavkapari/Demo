import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  myStaysListResponse: {},
};

const MyStaysSlice = createSlice({
  name: 'MyStays',
  initialState,
  reducers: {
    //myStaysList
    myStaysListRequest(state, action) {
      state.status = action.type;
    },
    myStaysListSuccess(state, action) {
      state.myStaysListResponse = action.payload;
      state.status = action.type;
    },
    myStaysListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});

export const {myStaysListRequest, myStaysListSuccess, myStaysListFailure} =
  MyStaysSlice.actions;

export default MyStaysSlice.reducer;
