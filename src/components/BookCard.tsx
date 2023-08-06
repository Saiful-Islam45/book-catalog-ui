import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBook, defaultImg } from "../types/book";
import CardLoader from "./ui/CardLoader";
import { useAppDispatch, useAppSelector } from "../redux/middlewares/hook";
import HeartSVG from "./ui/HeartIcon";
import { addToWishlist } from "../redux/features/WishSlice";

const Books = ({books, isLoading}: {books: IBook[], isLoading: boolean}) => {
  const navigate = useNavigate();
  const { wishlist } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const [favoriteBooks, setFavoriteBooks] = useState<IBook[]>(wishlist.books || []);

  const toggleFavorite = (book: IBook) => {
    const isFavorite = favoriteBooks.some(favBook => favBook._id === book._id);
    if (isFavorite) {
      setFavoriteBooks(prevFavorites =>
        prevFavorites.filter(favBook => favBook._id !== book._id)
      );
    } else {
      setFavoriteBooks(prevFavorites => [...prevFavorites, book]);
    }
		dispatch(addToWishlist(book))
  };

  if (isLoading) {
    return <CardLoader count={8} />;
  }

  return (
    <div className="grid grid-cols-4 gap-4 px-8 bg-cyan">
      {books?.map((book: IBook) => (
        <div
          key={book._id}
          className="relative bg-white p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg"
            src={defaultImg}
            alt={book.title}
          />
          <button
            className={`absolute top-2 right-2 btn p-2`}
            onClick={() => toggleFavorite(book)}
          >
             <HeartSVG filled={favoriteBooks.some((favBook) => favBook._id === book._id)} />
          </button>
          <div className="text-lg font-semibold">{book.title}</div>
          <div className="text-gray-500">
            <b>Author</b>: {book.author}
          </div>
          <div className="text-gray-500">
            <b>Publication Year</b>: {book.publicationYear}
          </div>
          <div className="text-gray-500">
            <b>Genre</b>: {book.genre}
          </div>
          <button
            className="btn btn-primary text-white bg-oceanblue p-2 rounded mt-4"
            onClick={() => navigate(`/bookdetails/${book._id}`)}
          >
            See Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Books;
