import { call } from "redux-saga/effects";
import { ApiCallUrl, BASE_URL } from "./ApiCallUrl";

export function* loginNetwok(payload){
        console.log('==> step 3');
        return yield call(apiFetch, ApiCallUrl.LoginUrl, payload)
}


 const apiFetch = async (url, request) => {
    try {
        console.log('==> step 4');
        let response = null;
        if(request){
         response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
              });
        }else{
             response = await fetch(`${BASE_URL}${url}`);

        }
        
        const result = await response.json();
        console.log('Post created:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
}