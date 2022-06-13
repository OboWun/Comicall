import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING, SUCCESSFUL } from "../../constants";
import { readComics, updateBookmark, editNote } from "./asyncActions";


const initialState = {
    comics: null,
    notes: null,
    comicsFetchingState: LOADING,
    updatingMarkState: IDLE,
    noteEditState: IDLE,
    noteDeleteState: IDLE,
    noteCreateState: IDLE
}

export const comicsSlice = createSlice({
    name: 'comics',
    initialState: initialState,
    reducers: {
        creatingNote: (state) => {
            state.noteCreateState = LOADING;
        },
        createdNoteSuccessfully: (state, action) => {
            const { id, note, pageNumber, pageId } = action.payload;
            state.notes.push({
                id: id,
                note: note,
                pageNumber: pageNumber,
                pageId: pageId
            });
            state.noteCreateState = SUCCESSFUL
        },
        deletingNote: (state) => {
            state.noteDeleteState = LOADING;
        },
        deleteNoteSuccessfully: (state, action) => {
            console.log(action.payload)
            state.noteDeleteState = SUCCESSFUL;
            state.notes = state.notes.filter(note => note.id != action.payload);
        }
    },
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
            }),
            builder.addCase(editNote.pending, (state) => {
                state.noteEditState = LOADING;
            }),
            builder.addCase(editNote.fulfilled, (state, action) => {
                const { id, note } = action.payload;
                const noteIndex = state.notes.findIndex(note => note.id == id);
                state.notes[noteIndex].note = note;
                state.noteEditState = SUCCESSFUL;
            })

    }
})


export const comicsReducer = comicsSlice.reducer;

