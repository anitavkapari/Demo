import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {
  myStaysListRequest,
  myStaysListSuccess,
  myStaysListFailure,
 
} from '../reducer/MyStaysReducer';
import Toast from '../../utils/helpers/Toast';
import {getApi, postApi} from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;

//myStays/list
export function* myStaysListSaga() {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'booking/property/list',
      // action?.payload,
      header,
    );
    if (response?.status == 200) {
      yield put(myStaysListSuccess(response?.data));
      // console.log('******', response?.data);

      // Toast(response?.data?.message);
    } else {
      yield put(myStaysListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(myStaysListFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('MyStays/myStaysListRequest', myStaysListSaga);
  })(),
];
export default watchFunction;
