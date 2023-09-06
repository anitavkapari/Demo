import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {
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
} from '../reducer/WishListReducer';
import Toast from '../../utils/helpers/Toast';
import {getApi, postApi} from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;


//wishlist
export function* wishlistSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'wishlist/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(wishlistSuccess(response?.data));

      // Toast(response?.data?.message);
    } else {
      yield put(wishlistFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(wishlistFailure(error));
  }
}
//wishlistAdd
export function* wishlistAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'wishlist/add',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(wishlistAddSuccess(response?.data));

      Toast(response?.data?.message);
    } else {
      yield put(wishlistAddFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(wishlistAddFailure(error));
  }
}

//wishlist_property/add
export function* wishlistPropertyAddSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'wishlist_property/add',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(wishlistPropertyAddSuccess(response?.data));

      Toast(response?.data?.message);
    } else {
      yield put(wishlistPropertyAddFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(wishlistPropertyAddFailure(error));
  }
}
//wishlist_property/List
export function* wishlistPropertyListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'wishlist_property/list',
      action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(wishlistPropertyListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(wishlistPropertyListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(wishlistPropertyListFailure(error));
  }
}
const watchFunction = [

  (function* () {
    yield takeLatest('Wishlist/wishlistRequest', wishlistSaga);
  })(),
  (function* () {
    yield takeLatest('Wishlist/wishlistAddRequest', wishlistAddSaga);
  })(),
  (function* () {
    yield takeLatest('Wishlist/wishlistPropertyAddRequest', wishlistPropertyAddSaga);
  })(),
  (function* () {
    yield takeLatest('Wishlist/wishlistPropertyListRequest', wishlistPropertyListSaga);
  })(),
];
export default watchFunction;
