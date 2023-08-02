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

  const isLoggedIn = false;

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
    console.log("==============auth=============", auth);
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-cyan text-black">
      <div className="flex items-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
          <span className="ml-3 text-xl">Saif Book Store</span>
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
        {isLoggedIn && (
          <div className="relative">
            <button
              onClick={handleSubmenuToggle}
              className="px-4 py-2 text-sm text-white bg-oceanblue rounded-md mr-2 animate-fade-in"
            >
              Profile
            </button>
            {isSubmenuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg animate-fade-in">
                <li className="py-2 px-4 hover:bg-gray-100 animate-slide-in">
                  Wishlist
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 animate-slide-in">
                  Logout
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 animate-slide-in">
                  Accoxsaahhunt
                </li>
              </ul>
            )}
          </div>
        )}
        <button className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in">
          All Books
        </button>
        <button className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md animate-fade-in">
          Wish List
        </button>
        {!user.email ? (
          <>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md mr-2 animate-fade-in"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md mr-2 animate-fade-in"
            >
              Login
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 mx-1 text-sm text-white bg-oceanblue rounded-md mr-2 animate-fade-in"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
