import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import App from '../App';
import BookDetailsPage from '../pages/BookDetails';

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
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default routes;
