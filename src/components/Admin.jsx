import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function AdminDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-900 p-5 shadow-md relative`}>
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-4 bg-yellow-600 text-white p-1 rounded-full shadow"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>

        {!isCollapsed && (
          <>
            <h2 className="text-xl font-bold mb-6 text-yellow-600">Admin Panel</h2>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link to="/admin" className="hover:text-yellow-500">Dashboard</Link>
              <Link to="/admin/enquiries" className="hover:text-yellow-500">Student Enquiries</Link>
              <Link to="/admin/analytics" className="hover:text-yellow-500">Analytics</Link>
              <Link to="/admin/settings" className="hover:text-yellow-500">Settings</Link>
            </nav>
          </>
        )}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">Welcome, Admin</h1>
        <section className="mb-8">
          <h2 className="text-lg font-medium mb-2">Quick Analytics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <p className="text-sm text-gray-600 dark:text-gray-300">Total Students</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <p className="text-sm text-gray-600 dark:text-gray-300">New Enquiries</p>
              <p className="text-2xl font-bold">56</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <p className="text-sm text-gray-600 dark:text-gray-300">Resolved Issues</p>
              <p className="text-2xl font-bold">98%</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-medium mb-2">Recent Student Enquiries</h2>
          <ul className="space-y-3">
            <li className="bg-white dark:bg-gray-700 p-4 rounded shadow text-sm">
              <p><strong>Della R.</strong> asked about registration deadlines.</p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded shadow text-sm">
              <p><strong>Anele M.</strong> requested a status update on their application.</p>
            </li>
            <li className="bg-white dark:bg-gray-700 p-4 rounded shadow text-sm">
              <p><strong>Lebo S.</strong> submitted a complaint about long queues.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
