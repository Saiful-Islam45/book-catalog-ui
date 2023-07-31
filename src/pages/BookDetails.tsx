import { defaultImg } from "../types/book";

const BookDetailsPage = () => {
	const book = {
		id: 1,
		title: 'Book 1',
		author: 'Author 1',
		publicationYear: '2022',
		genre: 'Fiction',
		imageUrl: defaultImg,
	};
	return (
		<>
			<div className="p-4">
				<div className="text-lg font-semibold">{book.title}</div>
				<div className="text-gray-500">Author: {book.author}</div>
				<div className="text-gray-500">
					Publication Year: {book.publicationYear}
				</div>
				<div className="text-gray-500">Genre: {book.genre}</div>
				<div className="mt-4">
					<button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
						Edit Book
					</button>
					<button className="px-4 py-2 bg-red-500 text-white rounded-md">
						Delete Book
					</button>
				</div>
			</div>
		</>
	);
};

export default BookDetailsPage;
