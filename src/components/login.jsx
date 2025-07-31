import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Login() {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidUser = () => {
    return (
      (email === "222417961" && password === "Admin123") ||
      (email === "222417961" && password === "Student123")
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidUser()) {
      alert("Please visit the tut4life.tut.ac.za or press forgot password");
      return;
    }

    alert(`Welcome to SkipQ, ${email}`);

    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-800 bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 dark:text-white m-0">
      <div className="w-[380px] bg-stone-300 rounded-xl p-8 border-white shadow-lg shadow-black dark:bg-gray-700 dark:border-gray-600">
        {/* Logo and title */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full border-4 border-yellow-600 mb-4"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-blue-600 font-medium text-sm mb-2">Login</h1>
            <div className="w-16 border-b-4 border-yellow-500 mx-auto shadow-[0_0_8px_2px_rgba(234,179,8,0.6)] rounded" />
          </div>
        </div>

        <form onSubmit={handleLogin}>
          {/* Role Dropdown */}
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-600 rounded-full text-sm dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="Student">Student</option>
              <option value="Admin">TUT Admin</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder={role == "Student" ? "Student number" : "Staff number"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
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
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full text-sm font-medium transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <a className="text-center flex justify-center mt-4 text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer dark:text-neutral-400">
          Forgot Password
        </a>
      </div>
    </div>
  );
}
