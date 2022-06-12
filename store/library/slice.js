import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { filterComics, getGenres } from "./asyncActions";

const initialState = {
    comics: [],
    genres: [],
    comicsFetchingState: IDLE,
    genresFetchingState: IDLE
}

export const librarySlice = createSlice({
    name: 'library',
    initialState: initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(filterComics.pending, (state) => {
            state.comicsFetchingState = LOADING;
        }),
        builder.addCase(filterComics.fulfilled, (state, action) => {
            state.comicsFetchingState = SUCCESSFUL;
            state.comics = action.payload;
        }),
        builder.addCase(filterComics.rejected, (state) => {
            state.comics = [],
            state.comicsFetchingState = ERROR
        }),
        builder.addCase(getGenres.pending, (state) => {
            state.genresFetchingState = LOADING;
        }),
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genresFetchingState = SUCCESSFUL;
            state.genres = action.payload.map(genre => genre.name);
        }),
        builder.addCase(getGenres.rejected, (state) => {
            state.genresFetchingState = ERROR;
        })
    }
})

export const libraryReducer = librarySlice.reducer;