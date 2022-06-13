import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicsService } from "../../services/comicsService";
import { LibraryService } from "../../services/libraryService";
import { NoteService } from "../../services/noteService";
import { comicsSlice } from "../comics/slice";

export const getUserComics = createAsyncThunk(
    'userComics',
    async (token, userComicsThunk) => {
        const response = await LibraryService.getUserComics(token);
        return response.data;
    }
)

export const addComics = createAsyncThunk(
    'addComics',
    async ({ token, comicsId }, addComicsThunk) => {
        const response = await LibraryService.addComics(token, comicsId);
        return response.data;
    }
)

export const removeComics = createAsyncThunk(
    'rempveComics',
    async ({ token, id }, removeComicsThunk) => {
        const response = await LibraryService.removeComics(token, id);
        return response.data;
    }
)
