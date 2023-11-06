import { useState } from 'react';
import { useAppDispatch } from '../redux/middlewares/hook';
import { createUser } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// @ts-ignore
		dispatch(createUser({ email, password })).then(() => {
			toast.success("User signed up successfully")
			navigate('/')
		}).catch(() => {
			toast.error("Failed to sign up user");
		})
	};

	return (
		<div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md m-2">
			<div className="px-6 py-4">
				<h2 className="text-2xl font-bold mb-2">Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password"
						>
							Password:
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
							placeholder="Enter your password"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
