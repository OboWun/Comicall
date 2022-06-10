import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";


export const signIn = createAsyncThunk(
    'signIn', 
    async ({username, password}, signInThunk) => {
        const response =  await UserService.signIn(username, password);
        return response.data;
    } 
);

export const signUp = createAsyncThunk(
    'signUp',
    async ({username, password}, signUpThunk) => {
        const response =  await UserService.signUp(username, password);
        return response.data;
    } 
)