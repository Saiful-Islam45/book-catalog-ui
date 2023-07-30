import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const books = [
		{
			id: 1,
			title: 'Book 1',
			author: 'Author 1',
			publicationYear: '2022',
			genre: 'Fiction',
			imageUrl: '/path/to/book1.jpg',
		},
		{
			id: 2,
			title: 'Book 2',
			author: 'Author 2',
			publicationYear: '2021',
			genre: 'Fantasy',
			imageUrl: '/path/to/book2.jpg',
		},
	];

	const genres = ['All Genres', 'Fiction', 'Fantasy', 'Mystery', 'Sci-Fi'];
	const publicationYears = ['All Years', '2022', '2021', '2020', '2019'];

	const [selectedGenre, setSelectedGenre] = useState('All Genres');
	const [selectedYear, setSelectedYear] = useState('All Years');
	const handleGenreChange = (selectedOption: SetStateAction<string>) => {
		setSelectedGenre(selectedOption);
	};

	const handleYearChange = (selectedOption: SetStateAction<string>) => {
		setSelectedYear(selectedOption);
	};
	const navigate = useNavigate();

	return (
		<div className="">
			<div className="flex px-8  p-4 bg-gray-100">
				<div className="mr-4">
					<label className="font-semibold">Genre:</label>
					<select
						value={selectedGenre}
						onChange={(e) => handleGenreChange(e.target.value)}
						className="p-2 border rounded-md"
					>
						{genres.map((genre) => (
							<option key={genre} value={genre}>
								{genre}
							</option>
						))}
					</select>
				</div>
				<div>
					<label className="font-semibold">Publication Year:</label>
					<select
						value={selectedYear}
						onChange={(e) => handleYearChange(e.target.value)}
						className="p-2 border rounded-md"
					>
						{publicationYears.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 px-8 bg-cyan">
				{books.map((book) => (
					<div
						key={book.id}
						className="bg-white p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
					>
						<img
							src={book.imageUrl}
							alt={book.title}
							className="h-40 w-full object-cover mb-4 rounded-md"
						/>
						<div className="text-lg font-semibold">{book.title}</div>
						<div className="text-gray-500">{book.author}</div>
						<div className="text-gray-500">{book.publicationYear}</div>
						<div className="text-gray-500">{book.genre}</div>
						<button
							className="btn btn-primary text-white bg-oceanblue p-2 rounded"
							onClick={() => navigate('/bookdetails')}
						>
							See Details
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
