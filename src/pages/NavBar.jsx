import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-600  text-white px-10 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Cricket Dashboard</h1>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/players" className="text-white hover:text-yellow-300">
            Players
          </Link>
          <Link to="/series" className="text-white hover:text-yellow-300">
            Series
          </Link>
          <button
            onClick={onLogout}
            className=" text-white hover:text-red-300 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
