import { useNavigate } from "react-router-dom"
import { useGetBooksQuery } from "../redux/api/apiSlice"
import { IBook, defaultImg } from "../types/book"
import CardLoader from "./ui/CardLoader"

const Books = () => {
  const navigate = useNavigate()
  const {data, isLoading}= useGetBooksQuery(undefined)

  if(isLoading) {
    return <CardLoader count={8}/>
  }
 console.log("==============datadata=============", data?.data);
  return (
    <div className="grid grid-cols-4 gap-4 px-8 bg-cyan">
				{data?.data?.map((book:IBook) => (
					<div
						key={book._id}
						className="bg-white p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
					>
						<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={defaultImg} alt={book.title}/>
						<div className="text-lg font-semibold"> {book.title}</div>
						<div className="text-gray-500"><b>Author</b>: {book.author}</div>
						<div className="text-gray-500"><b>Publication Year</b>: {book.publicationYear}</div>
						<div className="text-gray-500"><b>Genre</b>: {book.genre}</div>
						<button
							className="btn btn-primary text-white bg-oceanblue p-2 rounded"
							onClick={() => navigate(`/bookdetails/${book._id}`)}
						>
							See Details
						</button>
					</div>
				))}
			</div>
  )
}

export default Books