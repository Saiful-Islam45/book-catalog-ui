import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../types/book';

export interface IWishList {
  books: IBook[];
}

const initialState: IWishList = {
  books: []
};

const wishSlice = createSlice({
  name: 'Wishlist',
  initialState,
  reducers: {
    addToWishlist: (state: IWishList, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (wishlist) => wishlist._id === action.payload._id
      );
      if(existing) {
        state.books = state.books.filter(
          (wishlist) => wishlist._id !== action.payload._id
        );
      } else {
        state.books.push(action.payload)
      }
    },
    removeWishList: () => {
      return initialState
    }
  },
});

export const { addToWishlist, removeWishList } = wishSlice.actions;

export default wishSlice.reducer;