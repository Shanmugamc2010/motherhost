import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TYPES } from './SagaTypes'
import { loginNetwok } from '../../services/Network';
import { RESPONSE_MESSAGE } from '../../services/NetworkConstant';
import { handleNavigation } from './SagaHelper';
import { SCREENS } from '../../navigation/Screens';
import { dispatch } from '../../navigation/NavigationService';
import { setUserDetails } from '../slices/AuthSlice';


function* getLoginDetails(action){
        try{
            console.log('==> step 2');
            const response = yield call(loginNetwok, action?.payload)
            const  { result, client, token } = response || {}
            console.log('==> step 5');
            if(result && result === RESPONSE_MESSAGE.success){
                yield put(setUserDetails({token, client}))
                handleNavigation(SCREENS.HOME);
            }
            
        }catch(e){
            console.log('error log ==> ', e);

        }
}
function* getSignUpDetails(action){

}


function* AuthSaga() {
    yield takeLatest(TYPES.LOGIN, getLoginDetails);
    yield takeLatest(TYPES.SIGNUP, getSignUpDetails)
}

export default AuthSaga