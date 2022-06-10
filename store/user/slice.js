import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { signIn, signUp } from "./asyncActions";



const initialValue = {
    token: '',
    username: "",
    sigInState: IDLE,
    sighUpState: IDLE
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.sigInState = LOADING;
        }),
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.sigInState = SUCCESSFUL;
            state.token = action.payload.token;
            state.username = action.payload.username;
        }),
        builder.addCase(signIn.rejected, (state) => {
            state.sigInState = ERROR;
        }),
        builder.addCase(signUp.pending, (state) => {
            state.sighUpState = LOADING;
        }),
        builder.addCase(signUp.fulfilled, (state) => {
            state.sighUpState = SUCCESSFUL;
        }),
        builder.addCase(signUp.rejected, (state) => {
            state.sighUpState = ERROR;
        })
    }
})

export const userReducer = userSlice.reducer;