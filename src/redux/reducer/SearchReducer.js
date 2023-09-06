import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  propertyListResponse: {},
  propertyTypeResponse: {},
  wishlistResponse: {},
  wishlistAddResponse: {},
  wishlistPropertyAddResponse: {},
  propertyDetailsResponse:{},
  propertyBookingResponse:{},
  propertyBookingDetailsResponse:{},
  propertyCancelBookingResponse:{},
  propertyaddReviewResponse:{},
  propertyReviewResponse:{},
};

const PropertySlice = createSlice({
  name: 'Property',
  initialState,
  reducers: {
  
    //languageList
    propertyListRequest(state, action) {
      state.status = action.type;
    },
    propertyListSuccess(state, action) {
      state.propertyListResponse = action.payload;
      state.status = action.type;
    },
    propertyListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

   //propertyType
   propertyTypeRequest(state, action) {
    state.status = action.type;
  },
  propertyTypeSuccess(state, action) {
    state.propertyTypeResponse = action.payload;
    state.status = action.type;
  },
  propertyTypeFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  
  //property Details
  propertyDetailsRequest(state, action) {
    state.status = action.type;
  },
  propertyDetailsSuccess(state, action) {
    state.propertyDetailsResponse = action.payload;
    state.status = action.type;
  },
  propertyDetailsFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },

  //property Booking
  propertyBookingRequest(state, action) {
    state.status = action.type;
  },
  propertyBookingSuccess(state, action) {
    state.propertyBookingResponse = action.payload;
    state.status = action.type;
  },
  propertyBookingFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  //property Booking details
  propertyBookingDetailsRequest(state, action) {
    state.status = action.type;
  },
  propertyBookingDetailsSuccess(state, action) {
    state.propertyBookingDetailsResponse = action.payload;
    state.status = action.type;
  },
  propertyBookingDetailsFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
   //property Booking cancel
   propertyCancelBookingRequest(state, action) {
    state.status = action.type;
  },
  propertyCancelBookingSuccess(state, action) {
    state.propertyCancelBookingResponse = action.payload;
    state.status = action.type;
  },
  propertyCancelBookingFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  //property Add Review
  propertyaddReviewRequest(state, action) {
    state.status = action.type;
  },
  propertyaddReviewSuccess(state, action) {
    state.propertyaddReviewResponse = action.payload;
    state.status = action.type;
  },
  propertyaddReviewFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  //property  Review List
  propertyReviewRequest(state, action) {
    state.status = action.type;
  },
  propertyReviewSuccess(state, action) {
    state.propertyReviewResponse = action.payload;
    state.status = action.type;
  },
  propertyReviewFailure(state, action) {
    state.error = action.error;
    state.status = action.type;
  },
  },
});
 
export const {
  
  
  propertyListRequest,
  propertyListSuccess,
  propertyListFailure,
  propertyTypeRequest,
  propertyTypeSuccess,
  propertyTypeFailure,
  wishlistRequest,
  propertyDetailsRequest,
  propertyDetailsSuccess,
  propertyDetailsFailure,
  propertyBookingRequest,
  propertyBookingSuccess,
  propertyBookingFailure,
  propertyBookingDetailsRequest,
  propertyBookingDetailsSuccess,
  propertyBookingDetailsFailure,
  propertyCancelBookingRequest,
  propertyCancelBookingSuccess,
  propertyCancelBookingFailure,
  propertyaddReviewRequest,
  propertyaddReviewSuccess,
  propertyaddReviewFailure,
  propertyReviewRequest,
  propertyReviewSuccess,
  propertyReviewFailure
 
} = PropertySlice.actions;

export default PropertySlice.reducer;
