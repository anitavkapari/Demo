// import AsyncStorage from '@react-native-async-storage/async-storage';
import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
// import constants from '../../utils/helpers/constants';
import {
  aboutUsdetailsRequest,
  aboutUsdetailsSuccess,
  aboutUsdetailsFailure,
  languageListRequest,
  languageListSuccess,
  languageListFailure,
  ProfileDetailsRequest,
  ProfileDetailsSuccess,
  ProfileDetailsFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  cmsRequest,
  cmsSuccess,
  cmsFailure,
  addCardRequest,
  addCardSuccess,
  addCardFailure,
  cardListRequest,
  cardListSuccess,
  cardListFailure,
  cardRemoveRequest,
  cardRemoveSuccess,
  cardRemoveFailure,
  contactusRequest,
  contactusSuccess,
  contactusFailure,
  submitCouponResponse,
  submitCouponFailure,
  yourPaymentsHistoryResponse,
  yourPaymentsHistoryFailure,
  yourPaymentsHistoryLoader,
  privacylistSuccess,
  privacylistFailure,
  couponslistSuccess,
  couponslistFailure,

  myreviewsRequest,
  myreviewsSuccess,
  myreviewsFailure,

  howStamorWorksRequest,
  howStamorWorksSuccess,
  howStamorWorksFailure,
  
  feedbackcreateRequest,
  feedbackcreateSuccess,
  feedbackcreateFailure,

  feedbackTopicListRequest,
  feedbackTopicListSuccess,
  feedbackTopicListFailure,

  privacyPolicyRequest,
  privacyPolicySuccess,
  privacyPolicyFailure
} from '../reducer/ProfileReducer';
import Toast from '../../utils/helpers/Toast';
import {getApi, postApi} from '../../utils/helpers/ApiRequest';
let getItem = state => state.AuthReducer;

//aboutUsdetail
export function* aboutUsdetailsSaga() {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    // accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'about_us/list',
      // 'language/list',
      // action.payload,
      header,
    );
    // console.log("******",response);
    if (response?.status == 200) {
      yield put(aboutUsdetailsSuccess(response?.data));
      // Toast(response.data.message);
    } else {
      yield put(aboutUsdetailsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(aboutUsdetailsFailure(error));
  }
}

//language/list
export function* languageListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: items.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      // 'about_us/list',
      'language/list',
      // action.payload,
      header,
    );
    console.log('******', response);
    if (response?.status == 200) {
      yield put(languageListSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(languageListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(languageListFailure(error));
  }
}
//ProfileDetails
export function* Profiledetailsaga() {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'user/profile/details', header);
    if (response?.status == 200) {
      yield put(ProfileDetailsSuccess(response?.data));
    } else {
      yield put(ProfileDetailsFailure(response?.data));
    }
  } catch (error) {
    console.log('Profile Details Err: ', error);
    yield put(ProfileDetailsFailure(error));
  }
}
//updateProfile
export function* updateProfileSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'user/profile/update',
      action?.payload,
      header,
    );

    if (response?.status == 200) {
      yield put(updateProfileSuccess(response?.data));
      action?.payload?.trans=='transaltion' ? 
      console.log("hfg"):
      Toast(response?.data?.message);
    } else {
      yield put(updateProfileFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(updateProfileFailure(err));
    // Toast(err);
  }
}

//cms
export function* cmsSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'cms/list/terms-and-conditions',
      // action?.payload,
      header,
    );

    if (response?.status == 200) {
      yield put(cmsSuccess(response?.data));
      // console.log('+++++',response?.data.data.content)
      // Toast(response?.data?.message);
    } else {
      yield put(cmsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(cmsFailure(err));
    Toast(err);
  }
}

//Add Card
export function* addCardSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'card/add',
      action?.payload,
      header,
    );
  
    if (response?.status == 200) {
      yield put(addCardSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(addCardFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(addCardFailure(err));
    // Toast(err);
  }
}
//Add Card
export function* cardListSaga() {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'card/list',
      // action?.payload,
      header,
    );
  
    if (response?.status == 200) {
      yield put(cardListSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(cardListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(cardListFailure(err));
    Toast(err);
  }
}
//My Review
export function* myreviewsSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'property_review/list/my-reviews',
      action?.payload,
      header,
    );
  
    if (response?.status == 200) {
      yield put(myreviewsSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(myreviewsFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(myreviewsFailure(err));
    Toast(err);
  }
}
// remove Card
export function* cardRemoveSaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'card/remove',
      action?.payload,
      header,
    );
  
    if (response?.status == 200) {
      yield put(cardRemoveSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(cardRemoveFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(cardRemoveFailure(err));
    Toast(err);
  }
}

// contactus/add
export function* contactusSaga(action) {
  // let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    // accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'contactus/add',
      action?.payload,
      header,
    );
  
    if (response?.status == 200) {
      yield put(contactusSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(contactusFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(contactusFailure(err));
    Toast(err);
  }
}

export function* submitCouponSaga(action) {
  let item = yield select(getItem);
    let header = {
      Accept: 'application/json',
      contenttype:'multipart/form-data',
      accesstoken: item.getTokenResponse,
    };
    try {
      let response = yield call(
        postApi,
        'usedCoupon/submit',
        action?.payload,
        header,
      );
    
      if (response?.status == 200) {
        yield put(submitCouponResponse(response?.data));
        Toast(response?.data?.message);
      } else {
        yield put(submitCouponFailure(response?.data));
        console.log(response?.data);
        Toast(response?.data?.message);
      }
    } catch (err) {
      yield put(submitCouponFailure(err));
      Toast(err);
    }
}

  //your payments history
  export function* yourPaymentsHistorySaga(action) {
    let item = yield select(getItem);
    let header = {
      Accept: 'application/json',
      contenttype:'multipart/form-data',
      accesstoken: item.getTokenResponse,
    };
    try {
      let response = yield call(
        postApi,
        'booking/property/transactions',
        action?.payload,
        header,
      );
    
      if (response?.status == 200) {
        yield put(yourPaymentsHistoryResponse(response?.data));
      } else {
        yield put(yourPaymentsHistoryFailure(response?.data));
        Toast(response?.data?.message);
      }
    } catch (err) {
      yield put(yourPaymentsHistoryFailure(err));
      Toast(err);
    }
}

//Privacy List
export function* privacyListSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'privacy/list',
      header,
    );

    if (response?.status == 200) {
      yield put(privacylistSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(privacylistFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(privacylistFailure(err));
    Toast(err);
  }
}

export function* couponsListSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'usedCoupon/mycoupon',
      header,
    );
    if (response?.status == 200) {
      yield put(couponslistSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(couponslistFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(couponslistFailure(err));
    Toast(err);
  }
}

//howStamorWorks/list
export function* howStamorWorksSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    // accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'howStamorWorks/list',
      header,
    );

    if (response?.status == 200) {
      yield put(howStamorWorksSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(howStamorWorksFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(howStamorWorksFailure(err));
    Toast(err);
  }
}
//feedback TopicList
export function* feedbackTopicListSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'feedback/topic/list',
      action?.payload,
      header,
    );

    if (response?.status == 200) {
      yield put(feedbackTopicListSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(feedbackTopicListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(feedbackTopicListFailure(err));
    Toast(err);
  }
}

//feedback/create
export function* feedbackcreateSaga(action) {
  let item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'feedback/create',
      action?.payload,
      header,
    );

    if (response?.status == 200) {
      yield put(feedbackcreateSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(feedbackcreateFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(feedbackcreateFailure(err));
    Toast(err);
  }
}


//privacyPolicy
export function* privacyPolicySaga(action) {
  let item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype:'multipart/form-data',
    accesstoken: item.getTokenResponse,
  };
  try {
    let response = yield call(
      getApi,
      'cms/list/privacy-policy',
      // action?.payload,
      header,
    );

    if (response?.status == 200) {
      yield put(privacyPolicySuccess(response?.data));
      // console.log('+++++',response?.data.data.content)
      // Toast(response?.data?.message);
    } else {
      yield put(privacyPolicyFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (err) {
    yield put(privacyPolicyFailure(err));
    Toast(err);
  }
}
const watchFunction = [
  (function* () {
    yield takeLatest('Profile/aboutUsdetailsRequest', aboutUsdetailsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/languageListRequest', languageListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/ProfileDetailsRequest', Profiledetailsaga);
  })(),
  (function* () {
    yield takeLatest('Profile/updateProfileRequest', updateProfileSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/cmsRequest', cmsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/addCardRequest', addCardSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/cardListRequest', cardListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/cardRemoveRequest', cardRemoveSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/contactusRequest', contactusSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/submitCouponRequest', submitCouponSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/yourPaymentsHistoryRequest', yourPaymentsHistorySaga);
  })(),
  (function* () {
    yield takeLatest('Profile/privacylistRequest', privacyListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/couponslistRequest', couponsListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/myreviewsRequest', myreviewsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/howStamorWorksRequest', howStamorWorksSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/feedbackcreateRequest', feedbackcreateSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/feedbackTopicListRequest', feedbackTopicListSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/privacyPolicyRequest', privacyPolicySaga);
  })()

];
export default watchFunction;
