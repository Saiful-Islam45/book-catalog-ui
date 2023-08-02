import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { defaultImg } from "../types/book";

const BookDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id!);
  const navigate = useNavigate();
  const book = data.data;
  return (
    <>
      <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-3/4 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <img
              src={book?.image}
              alt={book?.title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-blue-500 font-semibold">{book.genre}</p>
            <p className="text-gray-500 text-sm">
              Published: {book.publicationYear}
            </p>

            <div className="mt-4 space-x-2">
              <button
                onClick={() => navigate("/edit", {state:book})}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
              >
                Edit Book
              </button>
              <button
                onClick={() => navigate("/delete", {state:book._id})}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none"
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <ul className="mt-4">
              {comments.map((comment, index) => (
                <li key={index} className="mb-2">
                  {comment}
                </li>
              ))}
            </ul>
        </div> */}
      </div>
    </>
  );
};

export default BookDetailsPage;
