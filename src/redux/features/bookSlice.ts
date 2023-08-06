import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../types/book";

export interface IState {
  books: IBook[];
}

const initialState: IState = {
  books: []
};
const bookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {
    setAllBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    }
  }
});

export const { setAllBooks } = bookSlice.actions;

export default bookSlice.reducer;
