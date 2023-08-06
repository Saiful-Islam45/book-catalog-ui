import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/middlewares/hook";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/auth";
import { setUser } from "../redux/features/userSlice";
import { setSearchFilter } from "../redux/features/filterSlice";
import { removeWishList } from "../redux/features/WishSlice";

export type FilterItemType = "title" | "author" | "genre";
interface ISearch {
  field: FilterItemType;
  value: string;
}

const Navbar = () => {
  const {
    user: { user },
    filter
  } = useAppSelector(state => state);
  const [searchInput, setSearchInput] = useState<ISearch>(filter.search);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.value) {
      dispatch(setSearchFilter({ search: searchInput }));
    }
  };

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
      dispatch(removeWishList());
    });
  };

  useEffect(() => {
    if (!searchInput.value) {
      dispatch(
        setSearchFilter({ ...filter, search: { ...filter.search, value: "" } })
      );
    }
  }, [searchInput.value]);
  return (
    <nav className="flex items-center justify-between p-4 bg-cyan text-black">
      <div className="flex items-center">
        <a
          onClick={() => navigate("/")}
          className="flex cursor-pointer title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span onClick={() => navigate("/")} className="ml-3 text-xl">
            Saif Book Store
          </span>
        </a>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex items-center mx-2">
        <input
          type="text"
          value={searchInput.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput({ ...searchInput, value: e.target.value })
          }
          placeholder="Search by title, author, genre..."
          className="p-2 border rounded-l-md"
        />
        <select
          onClick={(e: React.MouseEvent<HTMLSelectElement, MouseEvent>) =>
            setSearchInput({
              ...searchInput,
              field: e.currentTarget.value as FilterItemType
            })
          }
          className="p-2 border"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
        <button
          type="submit"
          className="bg-oceanblue text-white p-2 rounded-r-md animate-fade-in"
        >
          Search
        </button>
      </form>

      <div className="flex items-center relative">
        {user.email && (
          <button
            onClick={() => navigate("/update-add-book")}
            className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in"
          >
            Add New Book
          </button>
        )}
        <button
          onClick={() => navigate("/all-books")}
          className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in"
        >
          All Books
        </button>
        {user.email && (
          <button
            onClick={() => navigate("/wishlist")}
            className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in"
          >
            Wish List
          </button>
        )}
        <div className="relative">
          <button
            onClick={handleSubmenuToggle}
            className="px-4 py-2 text-sm text-white rounded-md mr-2 animate-fade-in"
          >
            <div className="relative w-10 h-10 overflow-hidden border-2 border-oceanblue bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          {isSubmenuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg animate-fade-in">
              {!user.email ? (
                <>
                  <li
                    onClick={() => navigate("/login")}
                    className="py-2 px-4 text-center cursor-pointer border-spacing-y-1 border hover:bg-gray-100 animate-slide-in"
                  >
                    Login
                  </li>
                  <li
                    onClick={() => navigate("/signup")}
                    className="py-2 px-4 text-center hover:bg-gray-100 cursor-pointer border-spacing-y-1 border animate-slide-in"
                  >
                    Signup
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={handleLogout}
                    className="py-2 px-4 cursor-pointer text-center hover:bg-gray-100 animate-slide-in"
                  >
                    Logout
                  </li>
                  <li
                    onClick={() => navigate("/wishlist")}
                    className="py-2 px-4 cursor-pointer text-center hover:bg-gray-100 animate-slide-in"
                  >
                    Wishlist
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
