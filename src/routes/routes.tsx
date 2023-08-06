import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import App from "../App";
import BookDetailsPage from "../pages/BookDetails";
import AddOrUpdateBook from "../pages/AddOrUpdateBook";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import AllBooks from "../pages/AllBooks";
import Wishlist from "../pages/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetailsPage />
      },
      {
        path: "/update-add-book",
        element: <AddOrUpdateBook />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/signup",
        element: <SignupForm />
      },
      {
        path: "/all-books",
        element: <AllBooks />
      },
			{
        path: "/wishlist",
        element: <Wishlist />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default routes;
