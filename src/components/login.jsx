import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidUser = () => {
    return (
      (email === "222417961" && password === "Admin123") ||
      (email === "222417961" && password === "Student123")
    );
  };

  const handlePreLogin = (e) => {
    if (!isValidUser()) {
      e.preventDefault();
      alert("Don't make us send you the password again");
    } else {
      alert(`Welcome to SkipQ, ${email}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-800 dark:text-white">
      <div className="w-[380px] bg-stone-300 rounded-xl p-8 border-white shadow-lg shadow-black dark:bg-gray-700 dark:border-gray-600">
        {/* Logo and title */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full border-4 border-yellow-600 mb-4" />
          <div className="flex flex-col items-center">
            <h1 className="text-blue-600 font-medium text-sm mb-2">Login</h1>
            <div className="w-16 border-b-4 border-yellow-500 mx-auto shadow-[0_0_8px_2px_rgba(234,179,8,0.6)] rounded" />
          </div>
        </div>

        {/* Role Dropdown */}
        <div className="mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-yellow-600 rounded-full text-sm dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option>Student</option>
            <option>TUT Admin</option>
            <option>Saso Admin</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Student Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Login Button as Link */}
        <Link
          to={isValidUser() ? "/dashboard" : "/admin"}
          onClick={handlePreLogin}
          className="block"
        >
          <button
            className="w-full py-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full text-sm font-medium transition duration-200"
          >
            Login
          </button>
        </Link>

        {/* Forgot Password */}
        <a className="text-center flex justify-center mt-4 text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer dark:text-neutral-400">
          Forgot Password
        </a>
      </div>
    </div>
  );
}
