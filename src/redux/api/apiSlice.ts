import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["books", "reviews"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://book-catalog-backend-saiful-islam45.vercel.app/v1" }),
  endpoints: builder => ({
    getBooks: builder.query({
      query: (filterQuery: string='') => `/books${filterQuery}`,
      providesTags: ["books"]
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["reviews"]
    }),
    addNewBook: builder.mutation({
      query: ({ ...data }) => ({
        url: "/books/add-new-book",
        method: "POST",
        body: data
      }),
      invalidatesTags:  ["books"]
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data
      }),
      invalidatesTags: ["reviews", "books"]
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["books"]
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
