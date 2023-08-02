import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/middlewares/hook';
import Books from '../components/BookCard';

const Home = () => {
	const genres = ['All Genres', 'Fiction', 'Fantasy', 'Mystery', 'Sci-Fi'];
	const publicationYears = ['All Years','2023', '2022', '2021', '2020', '2019'];

	const [selectedGenre, setSelectedGenre] = useState('All Genres');
	const [selectedYear, setSelectedYear] = useState('All Years');
	const books= useAppSelector(state => state.book)
	const handleGenreChange = (selectedOption: SetStateAction<string>) => {
		setSelectedGenre(selectedOption);
	};

	const handleYearChange = (selectedOption: SetStateAction<string>) => {
		setSelectedYear(selectedOption);
	};
	const navigate = useNavigate();

	return (
		<div className="">
			<div className="flex px-8  p-4">
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

		<Books/>
		</div>
	);
};

export default Home;
