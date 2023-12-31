import { useState } from "react";
import { useAppSelector } from "../redux/middlewares/hook";
import { useUpdateBookMutation } from "../redux/api/apiSlice";
import { toast } from "react-toastify";

interface IReviews {
  reviews: string[];
  bookId: string;
}

const ReviewList = (props: IReviews) => {
  const [newReview, setNewReview] = useState("");
  const { user } = useAppSelector(state => state.user);
  const [updateBook, { }] = useUpdateBookMutation();

  const handleAddReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateBook({ _id: props.bookId, reviews: [...props.reviews, newReview] })
    .then(() => {
      toast.success("Review added successfully!");
      setNewReview("")
    })
    .catch((error: any) => {
      toast.error("Error during put review.");
      setNewReview("")
      console.error("Error during put review:", error);
    });
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      {props?.reviews?.filter(a=>a).map((review, index) => (
        <div key={index} className="border-b border-gray-200 mb-4 pb-2 pl-3">
          <p className="font-semibold">{index+1}. {review}</p>
        </div>
      ))}
      {user.email ? (
        <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleAddReview(e)} className="mt-4">
          <textarea
            value={newReview}
            onChange={e => setNewReview(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full h-10 focus:outline-none focus:ring focus:border-blue-500 resize-none"
            placeholder="Write a review..."
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit Review
          </button>
        </form>
      ) : <h4 className="text-center mt-3">Please Sign in first to put comment</h4>}
    </div>
  );
};

export default ReviewList;
