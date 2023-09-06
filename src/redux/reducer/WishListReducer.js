import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  wishlistResponse: {},
  wishlistAddResponse: {},
  wishlistPropertyAddResponse: {},
  wishlistPropertyListResponse:{}
};

const WishlistSlice = createSlice({
  name: 'Wishlist',
  initialState,
  reducers: {
  
  //wishlist
  wishlistRequest(state, action) {
    state.status = action.type;
  },
  wishlistSuccess(state, action) {
    state.wishlistResponse = action.payload;
    state.status = action.type;
  },
  wishlistFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },

  //wishlist Add
  wishlistAddRequest(state, action) {
    state.status = action.type;
  },
  wishlistAddSuccess(state, action) {
    state.wishlistAddResponse = action.payload;
    state.status = action.type;
  },
  wishlistAddFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
   //wishlistProperty Add
   wishlistPropertyAddRequest(state, action) {
    state.status = action.type;
  },
  wishlistPropertyAddSuccess(state, action) {
    state.wishlistPropertyAddResponse = action.payload;
    state.status = action.type;
  },
  wishlistPropertyAddFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
   //wishlistProperty List
   wishlistPropertyListRequest(state, action) {
    state.status = action.type;
  },
  wishlistPropertyListSuccess(state, action) {
    state.wishlistPropertyListResponse = action.payload;
    state.status = action.type;
  },
  wishlistPropertyListFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  },
});

export const {
  wishlistRequest,
  wishlistSuccess,
  wishlistFailure,
  wishlistAddRequest,
  wishlistAddSuccess,
  wishlistAddFailure,
  wishlistPropertyAddRequest,
  wishlistPropertyAddSuccess,
  wishlistPropertyAddFailure,
  wishlistPropertyListRequest,
  wishlistPropertyListSuccess,
  wishlistPropertyListFailure
} = WishlistSlice.actions;

export default WishlistSlice.reducer;
