import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicsService } from "../../services/comicsService";


export const readComics = createAsyncThunk(
    'readComics',
    async ({token, id}, readComicsThunk ) => {
        const response = await ComicsService.read(token, id);
        return response.data;
    },
)

export const updateBookmark = createAsyncThunk(
    'updateBookmark',
    async ({token, comicsId, pageNumber}, updateBookmarkThunk) => {
        const response = await ComicsService.setBookmark(token, comicsId, pageNumber);
        return response.data;
    }
)