import { configureStore } from '@reduxjs/toolkit';
import AuthReducer  from './slices/AuthSlice';
import IndexSaga from './saga/index-saga';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(IndexSaga)