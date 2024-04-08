import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadarController,
  LineElement,
  PointElement,
} from "chart.js/auto";

// Register necessary Chart.js components
Chart.register(RadarController, LineElement, PointElement);

const RadarChart = () => {
  // Define chart data
  const radarData = {
    labels: [
      "Football",
      "Horse Racing",
      "Tennis",
      "Basketball",
      "Cricket",
      "Golf",
    ],
    datasets: [
      {
        label: "Total Bets",
        data: [2500, 1800, 1200, 900, 800, 600],
        borderColor: "#FBD038",
        backgroundColor: "rgba(251, 208, 56, 0.5)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Radar data={radarData} /> {/* Render Radar chart */}
    </div>
  );
};

export default RadarChart;

// import React from "react";
// import { Radar } from "react-chartjs-2";

// const RadarChart = ({ racecards }) => {
//   // Extract required data for the chart from racecards
//   const labels = racecards.map((race) => race.date);
//   const positionData = racecards.map((race) => parseInt(race.position)); // Convert position to integer if necessary
//   const weightData = racecards.map((race) => parseInt(race.weight)); // Convert weight to integer if necessary

//   // Define chart data
//   const radarData = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Position",
//         data: positionData,
//         borderColor: "#FBD038",
//         backgroundColor: "rgba(251, 208, 56, 0.5)",
//       },
//       {
//         label: "Weight",
//         data: weightData,
//         borderColor: "#B9E425",
//         backgroundColor: "rgba(185, 228, 37, 0.5)",
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <Radar data={radarData} /> {/* Render Radar chart */}
//     </div>
//   );
// };

// export default RadarChart;
