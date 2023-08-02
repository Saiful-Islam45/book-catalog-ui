import { useState } from "react";
import { useAppDispatch } from "../redux/middlewares/hook";
import { loginUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const dispatch= useAppDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(loginUser({email, password}))
    navigate('/')
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
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
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupForm