import { IFilterState } from "../redux/features/filterSlice";

export const filterLinked = (filters: IFilterState, limit="all") => {
  let query = `?limit=${limit}&`;
  if (filters.search?.value) {
    query += `${filters.search?.field}=${filters.search?.value}&`;
  }
  if (filters.filter.genre !== "All Genres") {
    query += `genre=${filters.filter?.genre}&`;
  }
  if (filters.filter.publicationYear !== "All Years") {
    query += `publicationYear=${filters.filter?.publicationYear}&`;
  }
  return query;
};