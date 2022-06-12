import { createSlice } from "@reduxjs/toolkit";
import { IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { addComics, getUserComics, removeComics } from "./asyncActioncs";

const initialState = {
    userComics: [],
    getComicsState: IDLE,
    removeComicsState: IDLE,
    addComicsState: IDLE
}

export const userLibrarySlice = createSlice({
    name: 'userLibrary',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserComics.pending, (state) =>{
            state.getComicsState = LOADING;
        }),
        builder.addCase(getUserComics.fulfilled, (state, action) =>{
            state.getComicsState = SUCCESSFUL;
            state.userComics = action.payload;
        }),
        builder.addCase(addComics.pending, (state) => {
            state.addComicsState = LOADING;
        }),
        builder.addCase(addComics.fulfilled, (state, action) =>{
            state.addComicsState = SUCCESSFUL;
            state.userComics.push(action.payload);
        }),
        builder.addCase(removeComics.pending, (state) => {
            state.removeComicsState = LOADING;
        }),
        builder.addCase(removeComics.fulfilled, (state, action) =>{
            state.removeComicsState = SUCCESSFUL;
            state.userComics = state.userComics.filter(comics => comics.id != action.payload.id)
        }) 
    }
})

export const userLibraryReducer = userLibrarySlice.reducer;