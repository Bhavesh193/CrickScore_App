import React, { useState } from "react";
import { mockPlayers } from "../PlayersData";

const PlayerListPage = () => {
  const [players, setPlayers] = useState(mockPlayers);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    position: "",
  });
  const [positionFilter, setPositionFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePositionFilterChange = (e) => {
    setPositionFilter(e.target.value);
  };

  const handleCountryFilterChange = (e) => {
    setCountryFilter(e.target.value);
  };

  const clearFilters = () => {
    setFilters({ name: "", country: "", position: "" });
    setPositionFilter("all");
    setCountryFilter("all");
  };

  const filteredPlayers = players.filter((player) => {
    return (
      player.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.country === "" ||
        player.country.toLowerCase().includes(filters.country.toLowerCase())) &&
      (filters.position === "" ||
        player.position
          .toLowerCase()
          .includes(filters.position.toLowerCase())) &&
      (positionFilter === "all" || player.position === positionFilter) &&
      (countryFilter === "all" || player.country === countryFilter)
    );
  });

  const countries = [...new Set(players.map((player) => player.country))];
  const positions = [...new Set(players.map((player) => player.position))];

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Player Statistics
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Search & Filter
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Search by Name</label>
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Player name"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Search by Country
              </label>
              <input
                type="text"
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                placeholder="Country"
                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Search by Position
              </label>
              <input
                type="text"
                name="position"
                value={filters.position}
                onChange={handleFilterChange}
                placeholder="Position"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Filter by Position
              </label>
              <select
                value={positionFilter}
                onChange={handlePositionFilterChange}
                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="all">All Positions</option>
                {positions.map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Filter by Country
              </label>
              <select
                value={countryFilter}
                onChange={handleCountryFilterChange}
                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="all">All Countries</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-700">
              Showing{" "}
              <span className="font-bold">{filteredPlayers.length}</span>{" "}
              players
            </p>
            <button
              onClick={clearFilters}
              className="bg-red-500  text-black text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-800">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Country</th>
                <th className="px-4 py-2 border">Position</th>
                <th className="px-4 py-2 border">Runs</th>
                <th className="px-4 py-2 border">Average</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player, index) => (
                <tr key={index} className="hover:bg-gray-50 text-gray-700">
                  <td className="px-4 py-2 border">{player.name}</td>
                  <td className="px-4 py-2 border">{player.country}</td>
                  <td className="px-4 py-2 border">{player.position}</td>
                  <td className="px-4 py-2 border">{player.runs}</td>
                  <td className="px-4 py-2 border">{player.average}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerListPage;
