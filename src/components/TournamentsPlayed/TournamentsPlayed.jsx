// TournamentsPlayed.jsx

import React from "react";
import "./TournamentsPlayed.css";

const TournamentsPlayed = () => {
  // Sample racing results data
  const racingResults = [
    {
      id_race: "1",
      raceName: "Race 1",
      position: "1st",
      horse: "Horse A",
      jockey: "Jockey X",
      class: "Class A",
      distance: "1000m",
      date: "2022-01-01",
      prize: "$1000",
    },
    {
      id_race: "2",
      raceName: "Race 2",
      position: "2nd",
      horse: "Horse B",
      jockey: "Jockey Y",
      class: "Class B",
      distance: "1200m",
      date: "2022-01-02",
      prize: "$1500",
    },
    {
      id_race: "3",
      raceName: "Race 3",
      position: "3rd",
      horse: "Horse C",
      jockey: "Jockey Z",
      class: "Class C",
      distance: "1400m",
      date: "2022-01-03",
      prize: "$2000",
    },
  ];

  return (
    <div>
      <h3 className="lime-h3">Tournaments Played</h3>
      <table className="racing-results-table">
        <thead>
          <tr>
            <th></th> {/* Placeholder for icon */}
            <th>Race Name</th>
            <th>Position</th>
            <th>Horse</th>
            <th>Jockey</th>
            <th>ID</th>
            <th>Class</th>
            <th>Distance</th>
            <th>Date</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          {racingResults.map((result, index) => (
            <tr key={index}>
              <td>
                <div className="icon-placeholder"></div>
              </td>{" "}
              {/* Circle placeholder for icon */}
              <td>{result.raceName}</td>
              <td>{result.position}</td>
              <td>{result.horse}</td>
              <td>{result.jockey}</td>
              <td>{result.id_race}</td>
              <td>{result.class}</td>
              <td>{result.distance}</td>
              <td>{result.date}</td>
              <td>{result.prize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentsPlayed;
