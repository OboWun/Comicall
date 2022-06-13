import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { signIn, signUp } from "./asyncActions";



const initialValue = {
    token: '',
    username: "",
    signInState: IDLE,
    signUpState: IDLE
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers:{
        logout: (state) =>{
            state.token = '';
            state.username = '';
            state.signInState = IDLE;
            state.signUpState = IDLE;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.signInState = LOADING;
        }),
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.signInState = SUCCESSFUL;
            state.token = action.payload.token;
            state.username = action.payload.username;
        }),
        builder.addCase(signIn.rejected, (state) => {
            state.signInState = ERROR;
        }),
        builder.addCase(signUp.pending, (state) => {
            state.signUpState = LOADING;
        }),
        builder.addCase(signUp.fulfilled, (state) => {
            state.signUpState = SUCCESSFUL;
        }),
        builder.addCase(signUp.rejected, (state) => {
            state.signUpState = ERROR;
        })
    }
})

export const userReducer = userSlice.reducer;