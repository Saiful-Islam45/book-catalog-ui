import { toast } from "react-toastify";
import { useDeleteBookMutation } from "../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import Loader from "./Loader";
interface IDeleteProps {
  deletedId: string;
  setShowDeletePopup: Dispatch<SetStateAction<boolean>>
}

const DeletePopup = (props: IDeleteProps) => {
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const {deletedId,setShowDeletePopup} = props;
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    deleteBook(deletedId!)
      .then(() => {
        toast.success("Book deleted successfully!");
        navigate("/", { replace: true });
      })
      .catch((error: any) => {
        console.error("Error deleting book:", error);
        toast.error("Error deleting book.");
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-1/2 mx-4">
            <p className="text-xl font-semibold mb-4">
              Are you sure you want to delete this book?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDeletePopup(false)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBook}
                disabled={isDeleting}
                className={`px-4 py-2 bg-oceanblue text-white font-bold rounded hover:bg-blue-600 focus:outline-none`}
              >
                {isDeleting ? <Loader size={5} /> : "Delete Book"}
              </button>
            </div>
          </div>
        </div>
  )
}

export default DeletePopup