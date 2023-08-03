import  { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddNewBookMutation, useUpdateBookMutation } from "../redux/api/apiSlice";
import { toast } from "react-toastify";
const AddOrUpdateBook = () => {
  const {state: book} = useLocation();
  const navigate= useNavigate()
  const [newBook, setnewBook] = useState(book);
  const [updateBook, {}] = useUpdateBookMutation()
  const [addNewBook, {}] = useAddNewBookMutation()

const handleAddBook = () => {
    if(book) {
      updateBook({id: book._id, ...newBook})
      .then(() => {
        toast.success("Book updated successfully!");
        navigate(`/bookdetails/${book._id}`, { replace: true });
      })
      .catch((error: any) => {
        console.error("Error updating book:", error);
        toast.error("Error updating book.");
      });
    } else {
      addNewBook(newBook)
      .then(() => {
        toast.success("Book Added successfully!");
        navigate("/", { replace: true });
      })
      .catch((error: any) => {
        console.error("Error during adding book:", error);
        toast.error("Error during adding book.");
      });
    }

  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-1/2 mx-auto py-2">
      <h1 className="text-3xl font-bold mb-4">{`${book ? "Update" :"Add New"} Book`}</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          value={newBook?.title}
          onChange={e =>setnewBook({...newBook, title: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          placeholder="Enter title..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Author:</label>
        <input
          type="text"
          value={newBook?.author}
          onChange={e =>setnewBook({...newBook, author: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          placeholder="Enter author..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Genre:</label>
        <select
          value={newBook?.genre}
          onChange={e =>setnewBook({...newBook, genre: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        >
          <option value="">Select Genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Publication Year:</label>
        <select
          value={newBook?.publicationYear}
          onChange={e =>setnewBook({...newBook, publicationYear: e.target.value })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        >
          <option value="">Select Publication Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <button
          onClick={handleAddBook}
          className="px-4 py-2 bg-oceanblue text-white rounded hover:bg-blue-400 focus:outline-none"
        >
          {`${book ? "Update" :"Add New"} Book`}
        </button>
      </div>
    </div>
  );
};

export default AddOrUpdateBook;
