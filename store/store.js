import { userReducer } from "./user/slice"
const { configureStore, combineReducers } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    user: userReducer
})

export const store = configureStore({
    reducer: rootReducer
})

