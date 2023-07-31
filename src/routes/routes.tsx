import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import App from '../App';
import BookDetailsPage from '../pages/BookDetails';
import AddNewBook from '../pages/AddNew';
import SignupForm from '../pages/Signup';

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
				path: '/bookdetails',
				element: <BookDetailsPage />,
			},
			{
				path: '/addNew',
				element: <AddNewBook />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	// {
	// 	path: '/login',
	// 	element: <Login />,
	// },
	{
		path: '/signup',
		element: <SignupForm />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default routes;
