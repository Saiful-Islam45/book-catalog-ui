import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterItemType } from "../../layout/Navbar";

export interface IFilterState {
  search: {
    field: FilterItemType;
    value: string;
  };
  filter: {
    publicationYear: string;
    genre: string;
  };
}

const initialState: IFilterState = {
  search: {
    field: "title",
    value: ""
  },
  filter: {
    publicationYear: "All Years",
    genre: "All Genres"
  }
};

const filterSlice = createSlice({
  name: "FilterSlice",
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<Partial<IFilterState>>) => {
      if (Object.keys(action.payload)[0] === "search") {
        state.search.field = action?.payload.search!.field;
        state.search.value = action?.payload?.search!.value;
      } else {
        state.filter.genre = action.payload?.filter!.genre;
        state.filter.publicationYear = action.payload?.filter!.publicationYear;
      }
    }
  }
});

export const { setSearchFilter } = filterSlice.actions;

export default filterSlice.reducer;
