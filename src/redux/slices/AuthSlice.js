import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from './SliceName';

const initialState = {
    token: null,
    userid: null,
    client_id: null,
    client: null,
}

export const authSlice = createSlice({
    name: SliceName.AUTH,
    initialState,
    reducers: {
        setUserDetails(state, action){
            const { token, client} = action?.payload || {}
            console.log('==> step 6', action);
            state.token = token;
            state.client = client;
            state.client_id = client?.client_id;
            state.userid = client?.userid;
        },
    },
  });
  
  export const { setUserDetails } = authSlice.actions;
  
  export const selectUserId = (state) => state?.auth?.userid;
  export const selectClientId = (state) => state?.auth?.client_id;
  export const selectClientDetails = (state) => state?.auth?.client;
  export const selectToken = (state) => state?.auth?.token;
  export default authSlice.reducer;