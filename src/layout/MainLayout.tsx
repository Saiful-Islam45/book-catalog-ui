import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
	return (
		<div className="bg-cyan">
			<Navbar />
			<div className='min-h-screen bg-cyan'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
