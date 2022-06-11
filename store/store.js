import { libraryReducer } from "./library/slice"
import { userReducer } from "./user/slice"
const { configureStore, combineReducers } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    user: userReducer,
    library: libraryReducer
})

export const store = configureStore({
    reducer: rootReducer
})

