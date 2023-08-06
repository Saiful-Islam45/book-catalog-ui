import { useEffect, useState } from "react";
import { genres, publicationYears } from "../../types/book";
import { useAppDispatch } from "../../redux/middlewares/hook";
import { setSearchFilter } from "../../redux/features/filterSlice";
import { capitalizeFirstLetter } from "../../utils/CapitalizedFirstletter";

const SearchFilter = () => {
  const [filterOptions, setFilterOptions] = useState({
    genre: "All Genres",
    publicationYear: "All Years"
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchFilter({ filter: filterOptions }));
  }, [filterOptions.genre, filterOptions.publicationYear]);

  return (
    <div className="flex px-8  p-4">
      <div className="mr-4">
        <label className="font-semibold">Genre:</label>
        <select
          value={filterOptions.genre}
          onChange={e =>
            setFilterOptions({ ...filterOptions, genre: e.target.value })
          }
          className="p-2 border rounded-md"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {capitalizeFirstLetter(genre)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-semibold">Publication Year:</label>
        <select
          value={filterOptions.publicationYear}
          onChange={e =>
            setFilterOptions({
              ...filterOptions,
              publicationYear: e.target.value
            })
          }
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
  );
};

export default SearchFilter;
