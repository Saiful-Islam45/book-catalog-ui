import Books from "../components/BookCard";
import SearchFilter from "../components/ui/SearchFilter";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/middlewares/hook";
import { filterLinked } from "../utils/FilterString";

const Home = () => {
  const filters = useAppSelector(state => state.filter);
  const { data, isLoading } = useGetBooksQuery(filterLinked(filters, '10'));
  return (
    <div className="">
      <SearchFilter/>	
      <Books books={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
