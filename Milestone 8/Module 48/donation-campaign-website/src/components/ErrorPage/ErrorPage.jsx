import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
