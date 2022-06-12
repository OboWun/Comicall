import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { readComics, updateBookmark } from "./asyncActions";

const initialState = {
    comics: null,
    comicsFetchingState: LOADING,
    updatingMarkState: IDLE
}

export const comicsSlice = createSlice({
    name: 'comics',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(readComics.pending, (state) => {
            state.comics = null;
            state.comicsFetchingState = LOADING;
        }),
        builder.addCase(readComics.fulfilled, (state, action) => {
            state.comics = action.payload;
            state.comicsFetchingState = SUCCESSFUL;
        }),
        builder.addCase(readComics.rejected, (state) => {
            state.comicsFetchingState = ERROR;
        }),
        builder.addCase(updateBookmark.pending, (state) => {
            state.updatingMarkState = LOADING;
        }),
        builder.addCase(updateBookmark.fulfilled, (state, action) => {
            state.comics.bookmark = Number.parseInt(action.payload.message);
            state.updatingMarkState = SUCCESSFUL;
        }),
        builder.addCase(updateBookmark.rejected, (state) => {
            state.updatingMarkState = ERROR;
        })

    }
})


export const comicsReducer = comicsSlice.reducer;

