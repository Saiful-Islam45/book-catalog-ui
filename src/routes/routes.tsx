import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import App from '../App';
import BookDetailsPage from '../pages/BookDetails';
import AddOrUpdateBook from '../pages/AddOrUpdateBook';
import LoginForm from '../pages/LoginForm';
import SignupForm from '../pages/SignupForm';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/bookdetails/:id',
				element: <BookDetailsPage />,
			},
			{
				path: '/update-add-book',
				element: <AddOrUpdateBook />,
			},
			{
				path: '/login',
				element: <LoginForm />,
			},
			{
				path: '/signup',
				element: <SignupForm />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default routes;
