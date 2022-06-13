import { createAsyncThunk } from "@reduxjs/toolkit";
import { ComicsService } from "../../services/comicsService";
import { comicsSlice } from "./slice";
import { NoteService } from "../../services/noteService";

export const readComics = createAsyncThunk(
    'readComics',
    async ({ token, id }, readComicsThunk) => {
        const response = await ComicsService.read(token, id);
        return response.data;
    },
)

export const updateBookmark = createAsyncThunk(
    'updateBookmark',
    async ({ token, comicsId, pageNumber }, updateBookmarkThunk) => {
        const response = await ComicsService.setBookmark(token, comicsId, pageNumber);
        return response.data;
    }
)

export const editNote = createAsyncThunk(
    'editNote',
    async ({ token, pageId, note }, editNoteThunk) => {
        const response = await NoteService.edit(pageId, note, token)
        return response.data;
    }
)

export const deleteNote = (token, id) => (dispatch) => {
    console.log(id);
    dispatch(comicsSlice.actions.deletingNote());
    NoteService.remove(id, token)
        .then(res =>  dispatch(comicsSlice.actions.deleteNoteSuccessfully(id)))
}

export const createNote = (token, pageId, pageNumber, note) => (dispatch) => {
    dispatch(comicsSlice.actions.creatingNote);
    NoteService.create(pageId, note, token).then(res => {
        dispatch(comicsSlice.actions.createdNoteSuccessfully({
            id: res.data.id,
            note: res.data.note,
            pageNumber: pageNumber,
            pageId: pageId
        }));
    });
}