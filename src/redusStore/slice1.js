import { createSlice } from "@reduxjs/toolkit";

const sommuti={ 
    value:'สมมุติ',
    user:[]
}

export const slice1 =createSlice({
    name:'store01',
    initialState:sommuti,
    reducers:{
        logintoken:(state,action)=>{
            state.value= 'lol'
            state.user= action.payload
        },
        logouttoken:()=>{}
    }
})

export const {logintoken,logouttoken}=slice1.actions
export default slice1.reducer