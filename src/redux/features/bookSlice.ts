import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../types/book";

const initialState:IBook[] = [{
    _id:"00000111",
    title:"Book one title",
    author:"book one author",
    genre:"Fiction",
    publicationYear: "2023",
    reviews:[],
    authorInfo:"64b109aa48821d0ef30fb031",
    createdAt:"2023-07-14T09:11:04.302Z",
    updatedAt:"2023-07-14T09:11:04.302Z"
}]
const bookSlice = createSlice({
    name: "Book",
    initialState,
    reducers: {
        addNewBook: () =>{}
    }
})

export const { addNewBook }= bookSlice.actions

export default bookSlice.reducer