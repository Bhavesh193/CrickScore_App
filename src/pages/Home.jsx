import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-200 to-white-200 flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-6">
          Welcome to CricStats Hub
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 mb-4">
          Dive into real-time cricket data, match stats, and player insights
          like never before.
        </p>
        <p className="text-md text-gray-600 mb-6">
          Track your favorite players, explore past series, and stay ahead with
          performance analytics. All in one dashboard inspired by Crickbuzz.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/players"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg  hover:bg-blue-700 transition"
          >
            Explore Players
          </Link>
          <Link
            to="/series"
            className="bg-red-500 text-white px-6 py-3 rounded-lg  hover:bg-red-600 transition"
          >
            View Series
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
