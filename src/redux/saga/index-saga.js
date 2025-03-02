import { all } from 'redux-saga/effects';
import AppSaga from './AppSaga';
import AuthSaga from './AuthSaga';
import CartSaga from './CartSaga';



export default function* IndexSaga() {
    yield all([
        AppSaga(),
        AuthSaga(),
        CartSaga()
    ]);
}