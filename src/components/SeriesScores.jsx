import React, { useState } from "react";
import { mockSeries } from "../PlayersData";

const SeriesScores = () => {
  const [seriesData, setSeriesData] = useState(mockSeries);
  const [selectedSeries, setSelectedSeries] = useState("");

  const handleSeriesChange = (e) => {
    setSelectedSeries(e.target.value);
  };

  const filteredSeries = seriesData.find(
    (series) => series.name === selectedSeries
  );

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Series & Scores
        </h1>

        <div className="flex justify-center mb-6">
          <select
            onChange={handleSeriesChange}
            value={selectedSeries}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option value="">Select a Series</option>
            {seriesData.map((series) => (
              <option key={series.id} value={series.name}>
                {series.name}
              </option>
            ))}
          </select>
        </div>

        {filteredSeries ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-black text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Player Name</th>
                  <th className="border px-4 py-2">Runs</th>
                  <th className="border px-4 py-2">Balls Played</th>
                  <th className="border px-4 py-2">Average</th>
                  <th className="border px-4 py-2">Strike Rate</th>
                </tr>
              </thead>
              <tbody>
                {filteredSeries.players.map((player) => (
                  <tr key={player.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{player.name}</td>
                    <td className="border px-4 py-2">{player.runs}</td>
                    <td className="border px-4 py-2">{player.ballsPlayed}</td>
                    <td className="border px-4 py-2">{player.average}</td>
                    <td className="border px-4 py-2">{player.strikeRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-700 mt-4">
            Please select a series to view scores.
          </p>
        )}
      </div>
    </div>
  );
};

export default SeriesScores;
