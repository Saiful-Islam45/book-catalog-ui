import { useState, useEffect } from 'react';

const Toaster = ({ message }: { message: string }) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
			{message}
		</div>
	);
};

export default Toaster;
