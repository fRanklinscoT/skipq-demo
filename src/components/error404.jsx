import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="text-yellow-600 text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg mb-4">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="inline-block mt-4 px-5 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
