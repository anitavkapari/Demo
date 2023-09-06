import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  insightCleaningListResponse: {},
  insightsOpportunityListResponse: {},
  insightCleaningCategoryListResponse: {},
  roomListResponse: {},
  addRoomTypeResponse: {},
  addPropertyResponse: {},
  propertyAboutResponse: {},
  addRoomTypeResponse: {},
  houseDescListResponse: {},
  addHouseDescResponse: {},
  uploadPhotosResponse: {},
  placeNameAddResponse: {},
  propertyDescListResponse: {},
  addPropertyDescResponse: {},
  placeDescAddResponse: {},
  instantBookingResponse: {},
  bookingTypeAddResponse: {},
  weekDayPriceAddResponse: {},
  weekendPriceAddResponse: {},
  OtherPriceAddResponse: {},
  checkingOutListResponse: {},
  currentHostListResponse: {},
  arrivingListResponse: {},
  guestSafetyListResponse: {},
  checkoutGuestListResponse: {},
  funThingsListResponse: {},
  guestSafetyAddResponse: {},
  checkoutAddGuestResponse: {},
  addFunThingsResponse: {},
  addInsightsOpportunityResponse: {},
  deleteInsightsOpportunityResponse: {},
  updateInsightsOpportunityResponse: {},
  detailsInsightsOpportunityResponse: {},
  propertylistbyHostResponse: {},
  publishResponse: {},
  propertylistAllbyHostResponse:{},
  propertyBookingDetailsResponse:{},
};

const HostSlice = createSlice({
  name: 'Host',
  initialState,
  reducers: {
    //insightCleaning insightList
    insightCleaningListRequest(state, action) {
      state.status = action.type;
    },
    insightCleaningListSuccess(state, action) {
      state.insightCleaningListResponse = action.payload;
      state.status = action.type;
    },
    insightCleaningListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //insightsOpportunityList
    insightCleaningCategoryListRequest(state, action) {
      state.status = action.type;
    },
    insightCleaningCategoryListSuccess(state, action) {
      state.insightCleaningCategoryListResponse = action.payload;
      state.status = action.type;
    },
    insightCleaningCategoryListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //insightsOpportunityList
    insightsOpportunityListRequest(state, action) {
      state.status = action.type;
    },
    insightsOpportunityListSuccess(state, action) {
      state.insightsOpportunityListResponse = action.payload;
      state.status = action.type;
    },
    insightsOpportunityListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //addProperty
    addPropertyRequest(state, action) {
      state.status = action.type;
    },
    addPropertySuccess(state, action) {
      state.addPropertyResponse = action.payload;
      state.status = action.type;
    },
    addPropertyFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property_about
    propertyAboutRequest(state, action) {
      state.status = action.type;
    },
    propertyAboutSuccess(state, action) {
      state.propertyAboutResponse = action.payload;
      state.status = action.type;
    },
    propertyAboutFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //Room  type List
    roomListRequest(state, action) {
      state.status = action.type;
    },
    roomListSuccess(state, action) {
      state.roomListResponse = action.payload;
      state.status = action.type;
    },
    roomListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //Add Room  type
    addRoomTypeRequest(state, action) {
      state.status = action.type;
    },
    addRoomTypeSuccess(state, action) {
      state.addRoomTypeResponse = action.payload;
      state.status = action.type;
    },
    addRoomTypeFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //type-property/list
    propertyDescListRequest(state, action) {
      state.status = action.type;
    },
    propertyDescListSuccess(state, action) {
      state.propertyDescListResponse = action.payload;
      state.status = action.type;
    },
    propertyDescListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    // property/user/prop_description
    addPropertyDescRequest(state, action) {
      state.status = action.type;
    },
    addPropertyDescSuccess(state, action) {
      state.addPropertyDescResponse = action.payload;
      state.status = action.type;
    },
    addPropertyDescFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //house_desc/list
    houseDescListRequest(state, action) {
      state.status = action.type;
    },
    houseDescListSuccess(state, action) {
      state.houseDescListResponse = action.payload;
      state.status = action.type;
    },
    houseDescListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //addPlaceDesc
    addHouseDescRequest(state, action) {
      state.status = action.type;
    },
    addHouseDescSuccess(state, action) {
      state.addHouseDescResponse = action.payload;
      state.status = action.type;
    },
    addHouseDescFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //uploadPhotos
    uploadPhotosRequest(state, action) {
      state.status = action.type;
    },
    uploadPhotosSuccess(state, action) {
      state.uploadPhotosResponse = action.payload;
      state.status = action.type;
    },
    uploadPhotosFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //placeNameAdd
    placeNameAddRequest(state, action) {
      state.status = action.type;
    },
    placeNameAddSuccess(state, action) {
      state.placeNameAddResponse = action.payload;
      state.status = action.type;
    },
    placeNameAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //placeNameAdd
    placeDescAddRequest(state, action) {
      state.status = action.type;
    },
    placeDescAddSuccess(state, action) {
      state.placeDescAddResponse = action.payload;
      state.status = action.type;
    },
    placeDescAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //property/user/instant_booking
    instantBookingRequest(state, action) {
      state.status = action.type;
    },
    instantBookingSuccess(state, action) {
      state.instantBookingResponse = action.payload;
      state.status = action.type;
    },
    instantBookingFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property/user/booking_type
    bookingTypeAddRequest(state, action) {
      state.status = action.type;
    },
    bookingTypeAddSuccess(state, action) {
      state.bookingTypeAddResponse = action.payload;
      state.status = action.type;
    },
    bookingTypeAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property/user/weekday_price
    weekDayPriceAddRequest(state, action) {
      state.status = action.type;
    },
    weekDayPriceAddSuccess(state, action) {
      state.weekDayPriceAddResponse = action.payload;
      state.status = action.type;
    },
    weekDayPriceAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //property/user/weekend_price
    weekendPriceAddRequest(state, action) {
      state.status = action.type;
    },
    weekendPriceAddSuccess(state, action) {
      state.weekendPriceAddResponse = action.payload;
      state.status = action.type;
    },
    weekendPriceAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property/user/other_price
    OtherPriceAddRequest(state, action) {
      state.status = action.type;
    },
    OtherPriceAddSuccess(state, action) {
      state.OtherPriceAddResponse = action.payload;
      state.status = action.type;
    },
    OtherPriceAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //booking/property/list/checking-out
    checkingOutListRequest(state, action) {
      state.status = action.type;
    },
    checkingOutListSuccess(state, action) {
      state.checkingOutListResponse = action.payload;
      state.status = action.type;
    },
    checkingOutListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //booking/property/list/current-host
    currentHostListRequest(state, action) {
      state.status = action.type;
    },
    currentHostListSuccess(state, action) {
      state.currentHostListResponse = action.payload;
      state.status = action.type;
    },
    currentHostListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //booking/property/list/arriving-soon
    arrivingListRequest(state, action) {
      state.status = action.type;
    },
    arrivingListSuccess(state, action) {
      state.arrivingListResponse = action.payload;
      state.status = action.type;
    },
    arrivingListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //guest_safety/list
    guestSafetyListRequest(state, action) {
      state.status = action.type;
    },
    guestSafetyListSuccess(state, action) {
      state.guestSafetyListResponse = action.payload;
      state.status = action.type;
    },
    guestSafetyListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //guest_Checkout/list
    checkoutGuestListRequest(state, action) {
      state.status = action.type;
    },
    checkoutGuestListSuccess(state, action) {
      state.checkoutGuestListResponse = action.payload;
      state.status = action.type;
    },
    checkoutGuestListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //fun_things/list
    funThingsListRequest(state, action) {
      state.status = action.type;
    },
    funThingsListSuccess(state, action) {
      state.funThingsListResponse = action.payload;
      state.status = action.type;
    },
    funThingsListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //Add guest_safety
    guestSafetyAddRequest(state, action) {
      state.status = action.type;
    },
    guestSafetyAddSuccess(state, action) {
      state.guestSafetyAddResponse = action.payload;
      state.status = action.type;
    },
    guestSafetyAddFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //Add guest_safety
    checkoutAddGuestRequest(state, action) {
      state.status = action.type;
    },
    checkoutAddGuestSuccess(state, action) {
      state.checkoutAddGuestResponse = action.payload;
      state.status = action.type;
    },
    checkoutAddGuestFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //add FunThings
    addFunThingsRequest(state, action) {
      state.status = action.type;
    },
    addFunThingsSuccess(state, action) {
      state.addFunThingsResponse = action.payload;
      state.status = action.type;
    },
    addFunThingsFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //insightsOpportunity/create
    addInsightsOpportunityRequest(state, action) {
      state.status = action.type;
    },
    addInsightsOpportunitySuccess(state, action) {
      state.addInsightsOpportunityResponse = action.payload;
      state.status = action.type;
    },
    addInsightsOpportunityFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //delete insightsOpportunity/delete
    deleteInsightsOpportunityRequest(state, action) {
      state.status = action.type;
    },
    deleteInsightsOpportunitySuccess(state, action) {
      state.deleteInsightsOpportunityResponse = action.payload;
      state.status = action.type;
    },
    deleteInsightsOpportunityFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //update insightsOpportunity
    updateInsightsOpportunityRequest(state, action) {
      state.status = action.type;
    },
    updateInsightsOpportunitySuccess(state, action) {
      state.updateInsightsOpportunityResponse = action.payload;
      state.status = action.type;
    },
    updateInsightsOpportunityFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    //details insightsOpportunity
    detailsInsightsOpportunityRequest(state, action) {
      state.status = action.type;
    },
    detailsInsightsOpportunitySuccess(state, action) {
      state.detailsInsightsOpportunityResponse = action.payload;
      state.status = action.type;
    },
    detailsInsightsOpportunityFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property/list/byHost
    propertylistbyHostRequest(state, action) {
      state.status = action.type;
    },
    propertylistbyHostSuccess(state, action) {
      state.propertylistbyHostResponse = action.payload;
      state.status = action.type;
    },
    propertylistbyHostFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //property/user/publish
    publishRequest(state, action) {
      state.status = action.type;
    },
    publishSuccess(state, action) {
      state.publishResponse = action.payload;
      state.status = action.type;
    },
    publishFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
     //property/list All/byHost
     propertylistAllbyHostRequest(state, action) {
      state.status = action.type;
    },
    propertylistAllbyHostSuccess(state, action) {
      state.propertylistAllbyHostResponse = action.payload;
      state.status = action.type;
    },
    propertylistAllbyHostFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

     //property/list All/byHost
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

  },

});

export const {
  insightCleaningListRequest,
  insightCleaningListSuccess,
  insightCleaningListFailure,

  insightsOpportunityListRequest,
  insightsOpportunityListSuccess,
  insightsOpportunityListFailure,

  insightCleaningCategoryListRequest,
  insightCleaningCategoryListSuccess,
  insightCleaningCategoryListFailure,

  propertyAboutRequest,
  propertyAboutSuccess,
  propertyAboutFailure,

  addPropertyRequest,
  addPropertySuccess,
  addPropertyFailure,

  roomListRequest,
  roomListSuccess,
  roomListFailure,

  addRoomTypeRequest,
  addRoomTypeSuccess,
  addRoomTypeFailure,

  propertyDescListRequest,
  propertyDescListSuccess,
  propertyDescListFailure,
  addPropertyDescRequest,
  addPropertyDescSuccess,
  addPropertyDescFailure,

  houseDescListRequest,
  houseDescListSuccess,
  houseDescListFailure,

  addHouseDescRequest,
  addHouseDescSuccess,
  addHouseDescFailure,

  uploadPhotosRequest,
  uploadPhotosSuccess,
  uploadPhotosFailure,

  placeNameAddRequest,
  placeNameAddSuccess,
  placeNameAddFailure,

  placeDescAddRequest,
  placeDescAddSuccess,
  placeDescAddFailure,

  instantBookingRequest,
  instantBookingSuccess,
  instantBookingFailure,

  bookingTypeAddRequest,
  bookingTypeAddSuccess,
  bookingTypeAddFailure,

  weekDayPriceAddRequest,
  weekDayPriceAddSuccess,
  weekDayPriceAddFailure,

  weekendPriceAddRequest,
  weekendPriceAddSuccess,
  weekendPriceAddFailure,

  OtherPriceAddRequest,
  OtherPriceAddSuccess,
  OtherPriceAddFailure,

  checkingOutListRequest,
  checkingOutListSuccess,
  checkingOutListFailure,

  currentHostListRequest,
  currentHostListSuccess,
  currentHostListFailure,

  arrivingListRequest,
  arrivingListSuccess,
  arrivingListFailure,

  guestSafetyListRequest, //guest_safety/list
  guestSafetyListSuccess,
  guestSafetyListFailure,

  checkoutGuestListRequest, //guest_Checkout/list
  checkoutGuestListSuccess,
  checkoutGuestListFailure,

  funThingsListRequest, //fun_things/list
  funThingsListSuccess,
  funThingsListFailure,

  guestSafetyAddRequest, //add guest_safety
  guestSafetyAddSuccess,
  guestSafetyAddFailure,

  checkoutAddGuestRequest, //add guest_Checkout
  checkoutAddGuestSuccess,
  checkoutAddGuestFailure,

  addFunThingsRequest, //add fun_things
  addFunThingsSuccess,
  addFunThingsFailure,

  addInsightsOpportunityRequest, //addInsightsOpportunity
  addInsightsOpportunitySuccess,
  addInsightsOpportunityFailure,

  detailsInsightsOpportunityRequest, //detailsInsightsOpportunity
  detailsInsightsOpportunitySuccess,
  detailsInsightsOpportunityFailure,

  updateInsightsOpportunityRequest, //updateInsightsOpportunity
  updateInsightsOpportunitySuccess,
  updateInsightsOpportunityFailure,

  deleteInsightsOpportunityRequest, //deleteInsightsOpportunity
  deleteInsightsOpportunitySuccess,
  deleteInsightsOpportunityFailure,

  propertylistAllbyHostRequest, //propertylistAllbyHost
  propertylistAllbyHostSuccess,
  propertylistAllbyHostFailure,

  publishRequest, //property/user/publish
  publishSuccess,
  publishFailure,

  propertylistbyHostRequest, //propertylistbyHost
  propertylistbyHostSuccess,
  propertylistbyHostFailure,

  propertyBookingDetailsRequest, //property/booking/details
  propertyBookingDetailsSuccess,
  propertyBookingDetailsFailure,
} = HostSlice.actions;

export default HostSlice.reducer;
