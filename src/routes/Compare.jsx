import React, { useState } from "react";
import SidebarStats from "../components/SidebarStats/SidebarStats";
import BarChart from "../components/Charts/BarChart"; // Import the BarChart component
import RadarChart from "../components/Charts/RadarChart"; // Import the RadarChart component
import DoughnutChart from "../components/Charts/DoughnutChart"; // Import the DoughnutChart component

const Compare = () => {
  const [selectedSteed, setSelectedSteed] = useState(""); // State to store the selected steed

  // Function to handle the change in the selected steed
  const handleSteedChange = (event) => {
    setSelectedSteed(event.target.value); // Update the selected steed state
  };

  return (
    <div className="wrap">
      <section className="page-content">
        <main className="main" style={{ width: "1030px" }}>
          <div className="main-header">
            <div className="main-header__heading">
              <h6>COMPARISON</h6>
            </div>
            <div className="main-header__updates">
              <h2>Analyze and Contrast Horse Racing Data</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>
                <strong>Select Your Steed:</strong>
              </h5>
            </div>
            <div className="col">
              {/* Dropdown menu for selecting the steed */}
              <select
                value={selectedSteed}
                onChange={handleSteedChange}
                className="dropdown-menu"
              >
                <option value="">Select a Steed</option>
                <option value="Steed 1">Steed 1</option>
                <option value="Steed 2">Steed 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="main-content">
            <div className="main-overview">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="overviewcard">
                  {/* Image placeholder with border radius */}
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder"
                    style={{ borderRadius: "20px" }}
                  />
                  <div className="overview-info">
                    {/* Heading for win rate with rating stars */}
                    <div className="row">
                      <h7 className="col">Win rate</h7>
                      {/* Dummy star ratings */}
                      <div className="col stars">
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </div>
                    </div>
                    {/* Heading for jockey performance */}
                    <div className="row">
                      <h7 className="col">Jockey performance</h7>
                      {/* Add DoughnutChart */}
                      <div className="col">
                        <DoughnutChart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="compare-main-cards">
              <div className="compare-card-wrapper">
                <h6>Horse Races:</h6>
                <div className="compare-card">
                  <BarChart /> {/* Integration of BarChart component */}
                </div>
              </div>
              <div className="compare-card-wrapper">
                <h6>Jockey Performance:</h6>
                <div className="compare-card">
                  <RadarChart /> {/* Integration of RadarChart component */}
                </div>
              </div>
            </div>{" "}
            {/* Close .compare-main-cards here */}
          </div>
        </main>
      </section>
      <div id="sidebar-right">
        <SidebarStats />
      </div>
    </div>
  );
};

export default Compare;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SidebarStats from "../components/SidebarStats/SidebarStats";
// import BarChart from "../components/Charts/BarChart";
// import RadarChart from "../components/Charts/RadarChart";
// import DoughnutChart from "../components/Charts/DoughnutChart";

// const Compare = () => {
//   const [racecards, setRacecards] = useState([]);

//   useEffect(() => {
//     const fetchRacecards = async () => {
//       const options = {
//         method: "GET",
//         url: "https://horse-racing.p.rapidapi.com/horse-stats/230380",
//         headers: {
//           "X-RapidAPI-Key":
//             "760d5078f9msh46aad0bfc90c7f3p11f496jsn4bbc447edfaf",
//           "X-RapidAPI-Host": "horse-racing.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         console.log("Racecards data:", response.data); // Log the response data
//         setRacecards(response.data);
//       } catch (error) {
//         console.error("Error fetching race cards data:", error);
//       }
//     };

//     fetchRacecards();
//   }, []);

//   return (
//     <div className="wrap">
//       <section className="page-content">
//         <main className="main" style={{ width: "1030px" }}>
//           <div className="main-header">
//             <div className="main-header__heading">
//               <h6>COMPARISON</h6>
//             </div>
//             <div className="main-header__updates">
//               <h2>Analyze and Contrast Horse Racing Data</h2>
//             </div>
//           </div>
//           <div>
//             <br />
//             <h5>
//               <strong>Select Your Steed:</strong>
//             </h5>
//           </div>
//           <div className="main-content">
//             <div className="main-overview">
//               {/* Remove Dog image */}
//               <div className="overview-info">
//                 <div className="row">
//                   <h7 className="col">Win rate</h7>
//                   <div className="col stars">⭐⭐⭐⭐⭐</div>
//                 </div>
//                 <div className="row">
//                   <h7 className="col">Jockey performance</h7>
//                   <div className="col">
//                     <DoughnutChart />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="compare-main-cards">
//               <div className="compare-card-wrapper">
//                 <h6>Horse Races:</h6>
//                 <div className="compare-card">
//                   <BarChart racecards={racecards} />
//                 </div>
//               </div>
//               <div className="compare-card-wrapper">
//                 <h6>Jockey Performance:</h6>
//                 <div className="compare-card">
//                   <RadarChart racecards={racecards} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//       <div id="sidebar-right">
//         <SidebarStats />
//       </div>
//     </div>
//   );
// };

// export default Compare;
