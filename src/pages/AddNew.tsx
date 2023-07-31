import  { useState } from "react";
const AddNewBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState(2023);

  const handleAddBook = () => {
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-1/2 mx-auto py-2">
      <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          placeholder="Enter title..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Author:</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          placeholder="Enter author..."
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Genre:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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
          value={publicationYear}
          onChange={(e) => setPublicationYear(+e.target.value)}
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
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddNewBook;
