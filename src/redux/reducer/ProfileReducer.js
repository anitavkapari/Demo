import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  isLoading: true,
  aboutUsResponse: {},
  languageListResponse: {},
  ProfileDetailsResponse: {},
  updateProfileResponse: {},
  cmsResponse:{},
  addCardResponse:{},
  cardListResponse : {},
  cardRemoveResponse:{},
  contactusResponse:{},
  submitCouponResponse: {},
  yourPaymentsResponse: [],
  yourPaymentsHistoryLoader: false,
  privacyListResponse: {},
  couponslistResponse:{},
  myreviewsResponse:{},
  howStamorWorksResponse:{},
  feedbackcreateResponse:{},
  feedbackTopicListResponse:{},
  privacyPolicyResponse:{}
};

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    // aboutUs
    aboutUsdetailsRequest(state, action) {
      state.status = action.type;
    },
    aboutUsdetailsSuccess(state, action) {
      state.aboutUsResponse = action.payload;
      state.status = action.type;
    },
    aboutUsdetailsFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //languageList
    languageListRequest(state, action) {
      state.status = action.type;
    },
    languageListSuccess(state, action) {
      state.languageListResponse = action.payload;
      state.status = action.type;
    },
    languageListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //ProfileDetails
    ProfileDetailsRequest(state, action) {
      state.status = action.type;
    },
    ProfileDetailsSuccess(state, action) {
      state.ProfileDetailsResponse = action.payload;
      state.status = action.type;
    },
    ProfileDetailsFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

      //updateProfile
      updateProfileRequest(state, action) {
        state.status = action.type;
      },
      updateProfileSuccess(state, action) {
        state.updateProfileResponse = action.payload;
        state.status = action.type;
      },
      updateProfileFailure(state, action) {
        state.error = action.error;
        state.status = action.type;
      },
       //cmsResponse
       cmsRequest(state, action) {
        state.status = action.type;
      },
       //My Review
       myreviewsRequest(state, action) {
        state.status = action.type;
      },
      myreviewsSuccess(state, action) {
        state.myreviewsResponse = action.payload;
        state.status = action.type;
      },
      myreviewsFailure(state, action) {
        state.error = action.error;
        state.status = action.type;
      },
       //cmsResponse
       cmsRequest(state, action) {
        state.status = action.type;
      },
      cmsSuccess(state, action) {
        state.cmsResponse = action.payload;
        state.status = action.type;
      },
      cmsFailure(state, action) {
        state.error = action.error;
        state.status = action.type;
      },

       //Add Card
       addCardRequest(state, action) {
        state.status = action.type;
      },
      addCardSuccess(state, action) {
        state.addCardResponse = action.payload;
        state.status = action.type;
      },
      addCardFailure(state, action) {
        state.error = action.error;
        state.status = action.type;
      },
       //Add Card
       cardListRequest(state, action) {
        state.status = action.type;
      },
      cardListSuccess(state, action) {
        state.cardListResponse = action.payload;
        state.status = action.type;
      },
      cardListFailure(state, action) {
        state.error = action.error;
        state.status = action.type;
      },
        //remove Card
        cardRemoveRequest(state, action) {
          state.status = action.type;
        },
        cardRemoveSuccess(state, action) {
          state.cardRemoveResponse = action.payload;
          state.status = action.type;
        },
        cardRemoveFailure(state, action) {
          state.error = action.error;
          state.status = action.type;
        },
        //contactus
        contactusRequest(state, action) {
          state.status = action.type;
        },
        contactusSuccess(state, action) {
          state.contactusResponse = action.payload;
          state.status = action.type;
        },
        contactusFailure(state, action) {
          state.error = action.error;
          state.status = action.type;
        },

         //submit coupon
    submitCouponRequest(state, action) {
      state.status = action.type;
    },
    submitCouponResponse(state, action) {
      state.submitCouponResponse = action.payload;
      state.status = action.type;
    },
    submitCouponFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //your payments
    yourPaymentsHistoryRequest(state, action) {
      state.status = action.type;
    },
    yourPaymentsHistoryResponse(state, action) {
      state.yourPaymentsResponse = action.payload;
      state.status = action.type;
    },
    yourPaymentsHistoryFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
    yourPaymentsHistoryLoader(state, action) {
      state.yourPaymentsHistoryLoader = action.payload;
      state.status = action.type;
    },

    //privacy list
    privacylistRequest(state, action) {
      state.status = action.type;
    },
    privacylistSuccess(state, action) {
      state.privacyListResponse = action.payload;
      state.status = action.type;
    },
    privacylistFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //coupons list
    couponslistRequest(state, action) {
      state.status = action.type;
    },
    couponslistSuccess(state, action) {
      state.couponslistResponse = action.payload;
      state.status = action.type;
    },
    couponslistFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    // feedback TopicList 
    feedbackTopicListRequest(state, action) {
      state.status = action.type;
    },
    feedbackTopicListSuccess(state, action) {
      state.feedbackTopicListResponse = action.payload;
      state.status = action.type;
    },
    feedbackTopicListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

     // feedback/create
     feedbackcreateRequest(state, action) {
      state.status = action.type;
    },
    feedbackcreateSuccess(state, action) {
      state.feedbackcreateResponse = action.payload;
      state.status = action.type;
    },
    feedbackcreateFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
     //howStamorWorks/list
     howStamorWorksRequest(state, action) {
      state.status = action.type;
    },
    howStamorWorksSuccess(state, action) {
      state.howStamorWorksResponse = action.payload;
      state.status = action.type;
    },
    howStamorWorksFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //cms/list/:slug
    privacyPolicyRequest(state, action) {
      state.status = action.type;
    },
    privacyPolicySuccess(state, action) {
      state.privacyPolicyResponse = action.payload;
      state.status = action.type;
    },
    privacyPolicyFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});

export const {
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

  submitCouponRequest,
  submitCouponResponse,
  submitCouponFailure,

  yourPaymentsHistoryRequest,
  yourPaymentsHistoryResponse,
  yourPaymentsHistoryFailure,
  yourPaymentsHistoryLoader,

  privacylistRequest,
  privacylistSuccess,
  privacylistFailure,

  couponslistRequest,
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
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
