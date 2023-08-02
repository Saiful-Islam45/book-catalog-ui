import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
	return (
		<div>
			<Navbar />
			<div className="h-screen bg-gray-100">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
