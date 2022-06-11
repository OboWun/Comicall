import { createAsyncThunk } from "@reduxjs/toolkit";
import { LibraryService } from "../../services/libraryService";

export const filterComics = createAsyncThunk(
    'filter',
    async ({ genres, prefix, isSearchByName, token }, filterThunk) => {
        const response = await LibraryService.searchGlobalLibrary({genres, prefix, isSearchByName}, token);
        return response.data;
    }
);


export const getGenres = createAsyncThunk(
    'genres',
    async (token, genresThunk) => {
        const response = await LibraryService.getAllGenres(token);
        return response.data;
    }
)