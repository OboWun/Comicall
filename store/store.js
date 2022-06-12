import { comicsReducer } from "./comics/slice"
import { libraryReducer } from "./library/slice"
import { userReducer } from "./user/slice"
import { userLibraryReducer } from "./userLibrary/slice"
const { configureStore, combineReducers } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    user: userReducer,
    library: libraryReducer,
    userLibrary: userLibraryReducer,
    comics: comicsReducer
})

export const store = configureStore({
    reducer: rootReducer
})

