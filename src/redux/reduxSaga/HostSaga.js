import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  insightCleaningListRequest,
  insightCleaningListSuccess,
  insightCleaningListFailure,
  insightsOpportunityListRequest,
  insightsOpportunityListSuccess,
  insightsOpportunityListFailure,
  insightCleaningCategoryListRequest,
  insightCleaningCategoryListSuccess,
  insightCleaningCategoryListFailure,
  roomListRequest,
  roomListSuccess,
  roomListFailure,

  addRoomTypeRequest,
  addRoomTypeSuccess,
  addRoomTypeFailure,

  addPropertyRequest,
  addPropertySuccess,
  addPropertyFailure,

  propertyAboutRequest,
  propertyAboutSuccess,
  propertyAboutFailure,

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

  propertylistAllbyHostRequest, //propertylistbyHost
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
} from '../reducer/HostReducer';
import Toast from '../../utils/helpers/Toast';
import { getApi, postApi } from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;

//insight_Cleaning/list
export function* insightCleaningListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'insight_cleaning/list',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(insightCleaningListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(insightCleaningListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(insightCleaningListFailure(error));
  }
}

//insight_cleaning_category/list
export function* insightCleaningCategoryListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'insight_cleaning_category/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(insightCleaningCategoryListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(insightCleaningCategoryListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(insightCleaningCategoryListFailure(error));
  }
}

//insightsOpportunity/list
export function* insightsOpportunityListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'insightsOpportunity/list',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(insightsOpportunityListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(insightsOpportunityListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(insightsOpportunityListFailure(error));
  }
}

//ADD insightsOpportunity/create
export function* addInsightsOpportunitySaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'insightsOpportunity/create',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addInsightsOpportunitySuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(addInsightsOpportunityFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addInsightsOpportunityFailure(error));
    // Toast(error);
  }
}

//details insightsOpportunity
export function* detailsInsightsOpportunitySaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      `insightsOpportunity/details/${action.payload}`,
      header,

    );
    if (response?.status == 200) {
      yield put(detailsInsightsOpportunitySuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(detailsInsightsOpportunityFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(detailsInsightsOpportunityFailure(error));
    // Toast(error);
  }
}
//update insightsOpportunity
export function* updateInsightsOpportunitySaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'insightsOpportunity/update',
      action?.payload,
      header,

    );
    if (response?.status == 200) {
      yield put(updateInsightsOpportunitySuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(updateInsightsOpportunityFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(updateInsightsOpportunityFailure(error));
    // Toast(error);
  }
}
//Delete insightsOpportunity
export function* deleteInsightsOpportunitySaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'insightsOpportunity/delete',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(deleteInsightsOpportunitySuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(deleteInsightsOpportunityFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(deleteInsightsOpportunityFailure(error));
    // Toast(error);
  }
}

//property/user/property_address
export function* addPropertyAddressSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/property_address',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addPropertySuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(addPropertyFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addPropertyFailure(error));
  }
}

//Add propertyAbout
export function* propertyAboutSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/property_about',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyAboutSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(propertyAboutFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyAboutFailure(error));
  }
}
//room_type/list/
export function* roomListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'room_type/list/',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(roomListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(roomListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(roomListFailure(error));
  }
}

//property/user/room_type
export function* addRoomTypeSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/room_type',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addRoomTypeSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(addRoomTypeFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addRoomTypeFailure(error));
  }
}

//type-property/list
export function* propertyDescListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'type-property/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyDescListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(propertyDescListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyDescListFailure(error));
  }
}

//house_desc/list
export function* houseDescListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'house_desc/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(houseDescListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(houseDescListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(houseDescListFailure(error));
  }
}


//property/user/house_description
export function* addHouseDescSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/house_description',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addHouseDescSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(addHouseDescFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addHouseDescFailure(error));
  }
}

//property/user/prop_description
export function* addPropertyDescSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/prop_description',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addPropertyDescSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(addPropertyDescFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addPropertyDescFailure(error));
  }
}

//property/user/property_photos
export function* uploadPhotosSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/property_photos',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(uploadPhotosSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(uploadPhotosFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(uploadPhotosFailure(error));
  }
}
//placeNameAdd
export function* placeNameAddcSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/place_name',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(placeNameAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(placeNameAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(placeNameAddFailure(error));
  }
}

//placeNameAdd
export function* placeDescAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/description',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(placeDescAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(placeDescAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(placeDescAddFailure(error));
  }
}
//property/user/instant_booking
export function* instantBookingSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/instant_booking',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(instantBookingSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(instantBookingFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(instantBookingFailure(error));
  }
}

//property/user/booking_type
export function* bookingTypeAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/booking_type',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(bookingTypeAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(bookingTypeAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(bookingTypeAddFailure(error));
  }
}

//property/user/weekday_price
export function* weekDayPriceAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/weekday_price',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(weekDayPriceAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(weekDayPriceAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(weekDayPriceAddFailure(error));
  }
}
//property/user/weekend_price
export function* weekendPriceAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/weekend_price',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(weekendPriceAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(weekendPriceAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(weekendPriceAddFailure(error));
  }
}

//property/user/other_price
export function* OtherPriceAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/other_price',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(OtherPriceAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(OtherPriceAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(OtherPriceAddFailure(error));
  }
}

//checkingOutList
export function* checkingOutListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'booking/property/list/checking-out',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(checkingOutListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(checkingOutListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(checkingOutListFailure(error));
  }
}

//currentHostList
export function* currentHostListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'booking/property/list/current-host',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(currentHostListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(currentHostListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(currentHostListFailure(error));
  }
}
//booking/property/list/arriving-soon
export function* arrivingListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'booking/property/list/arriving-soon',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(arrivingListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(arrivingListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(arrivingListFailure(error));
  }
}

//guest_safety/list
export function* guestSafetyListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'guest_safety/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(guestSafetyListSuccess(response?.data));
    } else {
      yield put(guestSafetyListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(guestSafetyListFailure(error));
  }
}
//guest_checkout/list
export function* checkoutGuestListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'guest_checkout/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(checkoutGuestListSuccess(response?.data));
    } else {
      yield put(checkoutGuestListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(checkoutGuestListFailure(error));
  }
}
//fun_things/list
export function* funThingsListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'fun_things/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(funThingsListSuccess(response?.data));

    } else {
      yield put(funThingsListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(funThingsListFailure(error));
  }
}

//property/user/guest_safety
export function* guestSafetyAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/guest_safety',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(guestSafetyAddSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(guestSafetyAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(guestSafetyAddFailure(error));
  }
}
//property/user/guest_checkout_suggestion
export function* checkoutAddGuestSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/guest_checkout_suggestion',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(checkoutAddGuestSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(checkoutAddGuestFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(checkoutAddGuestFailure(error));
  }
}

//property/user/fun_things
export function* addFunThingsSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/fun_things',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(addFunThingsSuccess(response?.data));
      // console.log('******', response?.data);

      Toast('Property Added Successfully');

    } else {
      yield put(addFunThingsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addFunThingsFailure(error));
  }
}

//propertylist  byHost All
export function* propertylistAllbyHostSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/list/all/byHost',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertylistAllbyHostSuccess(response?.data));

    } else {
      yield put(propertylistAllbyHostFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertylistAllbyHostFailure(error));
  }
}


//property/user/publish
export function* publishSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/user/publish',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(publishSuccess(response?.data));

    } else {
      yield put(publishFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(publishFailure(error));
  }
}

//property/list/byHost
export function* propertylistbyHostSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/list/byHost',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertylistbyHostSuccess(response?.data));

    } else {
      yield put(propertylistbyHostFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertylistbyHostFailure(error));
  }
}

//propertyBookingDetails
export function* propertyBookingDetailsSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/booking/details',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyBookingDetailsSuccess(response?.data));

    } else {
      yield put(propertyBookingDetailsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyBookingDetailsFailure(error));
  }
}
const watchFunction = [
  (function* () {
    yield takeLatest('Host/insightCleaningListRequest', insightCleaningListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/insightCleaningCategoryListRequest', insightCleaningCategoryListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/insightsOpportunityListRequest', insightsOpportunityListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addPropertyRequest', addPropertyAddressSaga);
  })(),
  (function* () {
    yield takeLatest('Host/propertyAboutRequest', propertyAboutSaga);
  })(),
  (function* () {
    yield takeLatest('Host/roomListRequest', roomListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addRoomTypeRequest', addRoomTypeSaga);
  })(),
  (function* () {
    yield takeLatest('Host/houseDescListRequest', houseDescListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addHouseDescRequest', addHouseDescSaga);
  })(),

  (function* () {
    yield takeLatest('Host/propertyDescListRequest', propertyDescListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addPropertyDescRequest', addPropertyDescSaga);
  })(),

  (function* () {
    yield takeLatest('Host/uploadPhotosRequest', uploadPhotosSaga);
  })(),
  (function* () {
    yield takeLatest('Host/placeNameAddRequest', placeNameAddcSaga);
  })(),

  (function* () {
    yield takeLatest('Host/placeDescAddRequest', placeDescAddSaga);
  })(),

  ///
  (function* () {
    yield takeLatest('Host/bookingTypeAddRequest', bookingTypeAddSaga);
  })(),

  (function* () {
    yield takeLatest('Host/instantBookingRequest', instantBookingSaga);
  })(),
  (function* () {
    yield takeLatest('Host/weekDayPriceAddRequest', weekDayPriceAddSaga);
  })(),
  (function* () {
    yield takeLatest('Host/weekendPriceAddRequest', weekendPriceAddSaga);
  })(),
  (function* () {
    yield takeLatest('Host/OtherPriceAddRequest', OtherPriceAddSaga);
  })(),
  (function* () {
    yield takeLatest('Host/checkingOutListRequest', checkingOutListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/currentHostListRequest', currentHostListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/arrivingListRequest', arrivingListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/guestSafetyListRequest', guestSafetyListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/checkoutGuestListRequest', checkoutGuestListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/funThingsListRequest', funThingsListSaga);
  })(),
  (function* () {
    yield takeLatest('Host/guestSafetyAddRequest', guestSafetyAddSaga);
  })(),
  (function* () {
    yield takeLatest('Host/checkoutAddGuestRequest', checkoutAddGuestSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addFunThingsRequest', addFunThingsSaga);
  })(),
  (function* () {
    yield takeLatest('Host/addInsightsOpportunityRequest', addInsightsOpportunitySaga);
  })(),
  (function* () {
    yield takeLatest('Host/deleteInsightsOpportunityRequest', deleteInsightsOpportunitySaga);
  })(),
  (function* () {
    yield takeLatest('Host/detailsInsightsOpportunityRequest',  detailsInsightsOpportunitySaga);
  })(),
  (function* () {
    yield takeLatest('Host/updateInsightsOpportunityRequest', updateInsightsOpportunitySaga);
  })(),
  (function* () {
    yield takeLatest('Host/propertylistAllbyHostRequest', propertylistAllbyHostSaga);
  })(),
  (function* () {
    yield takeLatest('Host/publishRequest', publishSaga);
  })(),
  (function* () {
    yield takeLatest('Host/propertylistbyHostRequest', propertylistbyHostSaga);
  })(),
  (function* () {
    yield takeLatest('Host/propertyBookingDetailsRequest', propertyBookingDetailsSaga);
  })(),
];
export default watchFunction;
