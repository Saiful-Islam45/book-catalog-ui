import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { api } from "./api/apiSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
    reducer:{
        book: bookSlice,
        user: userSlice,
        [api.reducerPath] : api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store


