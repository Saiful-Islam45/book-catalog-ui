import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => "/books"
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`
    }),
    addNewBook: builder.mutation({
      query: ({ ...data }) => ({
        url: "/add-new",
        method: "POST",
        body: data
      })
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: "/update-book",
        method: "PATCH",
        body: data
      })
    })
  })
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useUpdateBookMutation
} = api;
