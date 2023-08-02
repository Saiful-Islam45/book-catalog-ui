import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/v1" }),
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => "/books"
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`
    }),
    addNewBook: builder.mutation({
      query: ({ ...data }) => ({
        url: "/books/add-new-book",
        method: "POST",
        body: data
      })
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data
      })
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      })
    })
  })
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation
} = api;
