
import { addToWishlist } from "../redux/features/WishSlice";
import { useAppDispatch, useAppSelector } from "../redux/middlewares/hook";
import { IBook, defaultImg } from "../types/book";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const {books} = useAppSelector(state => state.wishlist);

  const handleRemoveFromWishlist = (book: IBook) => {
    dispatch(addToWishlist(book));
  };

  return (
    <div className="px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      {books.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li
              key={book._id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={defaultImg}
                  alt={book.title}
                  className="h-16 w-16 object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-500">{book.author}</p>
                  <p className="text-gray-500">{book.genre}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromWishlist(book)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
