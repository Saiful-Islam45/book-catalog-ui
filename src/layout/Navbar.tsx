import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/middlewares/hook";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/auth";
import { setUser } from "../redux/features/userSlice";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-cyan text-black">
      <div className="flex items-center">
        <a onClick={() => navigate('/')} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
          <span onClick={() => navigate('/')} className="ml-3 text-xl">Saif Book Store</span>
        </a>
      </div>

      <form onSubmit={handleSearchSubmit} className="flex items-center mx-2">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search by title, author, genre..."
          className="p-2 border rounded-l-md"
        />
        <select className="p-2 border">
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
        <button className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in">
          All Books
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in">
          Wish List
        </button>
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
                <li
                  onClick={handleLogout}
                  className="py-2 px-4 cursor-pointer text-center hover:bg-gray-100 animate-slide-in"
                >
                  Logout
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
