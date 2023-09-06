import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {
  propertyListRequest,
  propertyListSuccess,
  propertyListFailure,
  propertyTypeRequest,
  propertyTypeSuccess,
  propertyTypeFailure,
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
} from '../reducer/SearchReducer';
import Toast from '../../utils/helpers/Toast';
import {getApi, postApi} from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;

//property/list
export function* propertyListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property-list',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyListSuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(propertyListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyListFailure(error));
    Toast('Server Error');
    
  }
}
//PropertyType
export function* propertyTypesaga() {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'type-property/list', header);
    if (response?.status == 200) {
      yield put(propertyTypeSuccess(response?.data));
    } else {
      yield put(propertyTypeFailure(response?.data));
    }
  } catch (error) {
    console.log('Property Type Err: ', error);
    yield put(propertyTypeFailure(error));
    Toast('Server Error');
  }
}

//Property details
export function* propertyDetailssaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property/details',
      action?.payload,
      header,
    );
    // console.log('Property Details Res: ', response);
    if (response?.status == 200) {
      yield put(propertyDetailsSuccess(response?.data));
    } else {
      yield put(propertyDetailsFailure(response?.data));
    }
  } catch (error) {
    yield put(propertyDetailsFailure(error));
    Toast('Server Error');
  }
}

//propertyBooking
export function* propertyBookingSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'booking/property/insert',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyBookingSuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(propertyBookingFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyBookingFailure(error));
    Toast('Server Error');
  }
}
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
      'booking/details',
      action.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyBookingDetailsSuccess(response?.data));
      // console.log('@@@@@', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(propertyBookingDetailsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyBookingDetailsFailure(error));
    Toast('Server Error');
  }
}
export function* propertyCancelBookingSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'booking/cancel',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyCancelBookingSuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    } else {
      yield put(propertyCancelBookingFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyCancelBookingFailure(error));
    Toast('Server Error');
  }
}
//property Add Review
export function* propertyaddReviewSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property_review/add',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyaddReviewSuccess(response?.data));
      // console.log('******', response?.data);

      Toast(response?.data?.message);
    }else {
      yield put(propertyaddReviewFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyaddReviewFailure(error));
    Toast('Server Error');
  }
}
//property Review
export function* propertyReviewSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property_review/list',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(propertyReviewSuccess(response?.data));
      // console.log('******', response?.data);
 
      // Toast(response?.data?.message);
    } else {
      yield put(propertyReviewFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(propertyReviewFailure(error));
    Toast(error.toString());
  }
}
const watchFunction = [
  (function* () {
    yield takeLatest('Property/propertyListRequest', propertyListSaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyTypeRequest', propertyTypesaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyDetailsRequest', propertyDetailssaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyBookingRequest', propertyBookingSaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyaddReviewRequest', propertyaddReviewSaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyReviewRequest', propertyReviewSaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyBookingDetailsRequest', propertyBookingDetailsSaga);
  })(),
  (function* () {
    yield takeLatest('Property/propertyCancelBookingRequest', propertyCancelBookingSaga);
  })(),
];
export default watchFunction;
