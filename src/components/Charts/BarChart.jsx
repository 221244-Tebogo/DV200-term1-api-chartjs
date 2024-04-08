import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // Define chart data
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Winnings",
        data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
        backgroundColor: ["#FBD038", "#B9E425", "grey"],
        borderRadius: 4,
        barPercentage: 0.9,
      },
    ],
  };

  // Define options for the chart
  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 1000, // Adjust the step size to increase space between bars
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: "500px" }}>
      <Bar data={barData} options={options} /> {/* Pass options to Bar chart */}
    </div>
  );
};

export default BarChart;

// import React from "react";
// import { Bar } from "react-chartjs-2";

// const BarChart = ({ racecards }) => {
//   // Check if racecards is an array and has data
//   if (!Array.isArray(racecards) || racecards.length === 0) {
//     return <div>No racecards data available</div>;
//   }

//   // Extract required data for the chart from racecards
//   const labels = racecards.map((race) => race.date);
//   const data = racecards.map((race) => parseFloat(race.distance)); // Convert distance to float if necessary

//   // Define chart data
//   const barData = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Distance",
//         data: data,
//         backgroundColor: "#FBD038",
//         borderRadius: 4,
//         barPercentage: 0.9,
//       },
//     ],
//   };

//   // Define options for the chart
//   const options = {
//     scales: {
//       y: {
//         ticks: {
//           stepSize: 1, // Adjust the step size if necessary
//         },
//       },
//     },
//   };

//   return (
//     <div className="chart-container" style={{ height: "500px" }}>
//       <Bar data={barData} options={options} /> {/* Pass options to Bar chart */}
//     </div>
//   );
// };

// export default BarChart;
