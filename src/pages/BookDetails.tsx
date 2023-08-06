import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { IBook, defaultImg } from "../types/book";
import { useState } from "react";
import Loader from "../components/ui/Loader";
import DeletePopup from "../components/ui/DeletePopup";
import ReviewList from "../components/ReviewList";
import { useAppSelector } from "../redux/middlewares/hook";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleBookQuery(id!);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const {user} =useAppSelector(state => state.user)

  const book: IBook = data?.data;

  if (isLoading) {
    return <Loader size={32} />;
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-full mx-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <img
              src={defaultImg}
              alt={book?.title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <h2 className="text-2xl font-semibold mb-2">{book?.title}</h2>
            <p className="text-gray-600">{book?.author}</p>
            <p className="text-blue-500 font-semibold">{book?.genre}</p>
            <p className="text-gray-500 text-sm">
              Published: {book?.publicationYear}
            </p>

            <div className="mt-4 space-x-2">
              {user.email === book.authorInfo && (
                <>
                  <button
                    onClick={() =>
                      navigate("/update-add-book", { state: book })
                    }
                    className="px-4 py-2 bg-oceanblue text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
                  >
                    Edit Book
                  </button>
                  <button
                    onClick={() => setShowDeletePopup(true)}
                    className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete Book
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mx-2">
          <ReviewList reviews={book?.reviews} bookId={id as string} />
        </div>
      </div>

      {showDeletePopup && (
        <DeletePopup
          setShowDeletePopup={setShowDeletePopup}
          deletedId={id as string}
        />
      )}
    </>
  );
};

export default BookDetailsPage;
