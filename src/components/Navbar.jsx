import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto bg-stone-300 shadow-md px-4 sm:px-6 py-4 flex justify-between items-center rounded-none sm:rounded-xl sticky shadow-black dark:bg-gray-700 dark:border-gray-600">
      <div className="text-lg sm:text-xl font-bold text-yellow-600 dark:text-yellow-600">
        SkipQ
      </div>
      <div className="flex-1 mx-4 sm:mx-8 hidden sm:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-b border-yellow-600 focus:outline-none focus:border-blue-500 placeholder-gray-500 dark:placeholder-gray-300"
        />
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <FaUserCircle size={36} className="text-yellow-600 dark:text-yellow-600" />
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold text-gray-800 dark:text-white">user</p>
          <p className="text-xs text-gray-600 dark:text-gray-300">role</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
