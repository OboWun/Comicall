import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { readComics, updateBookmark } from "./asyncActions";



/*
{
    bookmark: number,
    pages: [
        {
            id: number,
            imagePath: string,
            notes: [
                {
                    id: number,
                    note: string
                },
                {
                    id: number,
                    note: string
                },
                {
                    id: number,
                    note: string
                },
            ]
        },
        {
            id: number,
            imagePath: string,
            notes: [
                {
                    id: number,
                    note: string
                },
                {
                    id: number,
                    note: string
                },
                {
                    id: number,
                    note: string
                },
            ]
        },

    ]
}

*/

const initialState = {
    comics: null,
    notes: null,
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
            state.notes = null;
            state.comicsFetchingState = LOADING;
        }),
            builder.addCase(readComics.fulfilled, (state, action) => {
                const comics = action.payload;
                let tempNotes = [];
                for (let pageNumber = 0; pageNumber < comics.pages.length; pageNumber++) {
                    tempNotes = [
                        ...tempNotes,
                        ...comics
                            .pages[pageNumber]
                            .notes.map(note => (
                                {
                                    id: note.id,
                                    note: note.note,
                                    pageNumber: pageNumber,
                                    pageId: comics.pages[pageNumber].id
                                }
                            ))
                    ]
                }
                state.notes = tempNotes;
                state.comics = comics;
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

