import {all} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import ProfileSaga from './ProfileSaga';
import SearchSaga from './SearchSaga';
import  WishSaga  from './WishSaga';
import  MyStaysSaga  from './MyStaysSaga';
import  HostSaga  from './HostSaga';


const combinedSaga = [...AuthSaga, ...ProfileSaga, ...SearchSaga, ...WishSaga, ...MyStaysSaga, ...HostSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
