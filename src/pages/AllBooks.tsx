import { SetStateAction, useState } from "react";
import Books from "../components/BookCard";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { genres, publicationYears } from "../types/book";

const AllBooks = () => {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const { data, isLoading } = useGetBooksQuery(`?itam=all&${selectedGenre ? '': ''}`);
  const handleGenreChange = (selectedOption: SetStateAction<string>) => {
    setSelectedGenre(selectedOption);
  };

  const handleYearChange = (selectedOption: SetStateAction<string>) => {
    setSelectedYear(selectedOption);
  };

  return (
    <div className="">
      <div className="flex px-8  p-4">
        <div className="mr-4">
          <label className="font-semibold">Genre:</label>
          <select
            value={selectedGenre}
            onChange={e => handleGenreChange(e.target.value)}
            className="p-2 border rounded-md"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold">Publication Year:</label>
          <select
            value={selectedYear}
            onChange={e => handleYearChange(e.target.value)}
            className="p-2 border rounded-md"
          >
            {publicationYears.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Books books={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default AllBooks;
