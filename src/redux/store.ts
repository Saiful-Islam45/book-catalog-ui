import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { api } from "./api/apiSlice";
import userSlice from "./features/userSlice";
import wishSlice from "./features/WishSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterSlice from "./features/filterSlice";

const persistConfig = {
    key: 'root',
    storage,
  };
  const rootReducer = combineReducers({
    book: bookSlice,
    user: userSlice,
    wishlist: wishSlice,
    filter: filterSlice,
    [api.reducerPath]: api.reducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: () => string | any[]) => 
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
export default store


