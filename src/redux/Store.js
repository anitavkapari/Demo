import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AuthReducer from './reducer/AuthReducer';
import {logger} from 'redux-logger';
import RootSaga from './reduxSaga/RootSaga';
import ProfileReducer from './reducer/ProfileReducer';
import SearchReducer from './reducer/SearchReducer';
import WishListReducer from './reducer/WishListReducer';
import MyStaysReducer from './reducer/MyStaysReducer';
import HostReducer from './reducer/HostReducer';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    ProfileReducer: ProfileReducer,
    SearchReducer:SearchReducer,
    WishListReducer:WishListReducer,
    MyStaysReducer:MyStaysReducer,
    HostReducer:HostReducer
  },
  middleware,
});

sagaMiddleware.run(RootSaga);
