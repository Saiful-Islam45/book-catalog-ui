import Books from "../components/BookCard";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import SearchFilter from "../components/ui/SearchFilter";
import { useAppSelector } from "../redux/middlewares/hook";
import { filterLinked } from "../utils/FilterString";

const AllBooks = () => {
  const filters = useAppSelector(state => state.filter);
  const { data, isLoading } = useGetBooksQuery(filterLinked(filters));
  return (
    <div className="">
      <SearchFilter />
      <Books books={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default AllBooks;
