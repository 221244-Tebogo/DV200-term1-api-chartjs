import React, { useEffect, useState } from "react";
import data from "../assets/Data";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import SidebarStats from "../components/SidebarStats/SidebarStats";
import ImageGallery from "../components/ImageGallery/ImageGallery"; // Import the ImageGallery component

function LineChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setChartData({
        labels: data.map((item) => item.ngay_mua),
        datasets: [
          {
            label: "Revenue",
            data: data.map((item) => item.trigia),
            fill: true,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }, 1000);
  }, []);

  return (
    <div className="wrap">
      <section className="page-content line-chart-page">
        <main className="main" style={{ width: "1030px", display: "flex" }}>
          <div className="main-content" style={{ flex: "1" }}>
            <div className="main-header">
              <div className="main-header__heading">
                <h6>LINE CHART</h6>
              </div>
              <div className="main-header__updates">
                <h2>Revenue Analysis</h2>
              </div>
            </div>
            <div>
              <br />
              <h5>
                <strong>Select Your Steed:</strong>
              </h5>
            </div>
            <div className="main-overview">
              <ImageGallery />
            </div>
            <div className="main-cards">
              <div className="cards-container">
                <div className="card card2">
                  {chartData && chartData?.datasets && (
                    <Line
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: "top",
                          },
                          title: {
                            display: true,
                            text: "Revenue",
                          },
                        },
                      }}
                      data={chartData}
                    />
                  )}
                </div>
                <div className="card card3">Card3</div>
              </div>
            </div>
          </div>
          <div id="sidebar-right">
            <SidebarStats />
          </div>
        </main>
      </section>
    </div>
  );
}

export default LineChart;

// import React from "react";
// import LineChart from "../components/Charts/LineChart";
// import SidebarStats from "../components/SidebarStats/SidebarStats";

// function Timeline() {
//   return (
//     <div className="wrap">
//       <section className="page-content line-chart-page">
//         <main className="main" style={{ width: "1030px", display: "flex" }}>
//           <div className="main-content" style={{ flex: "1" }}>
//             <div className="main-header">
//               <div className="main-header__heading">
//                 <h6>LINE CHART</h6>
//               </div>
//               <div className="main-header__updates">
//                 <h2>Revenue Analysis</h2>
//               </div>
//             </div>
//             <div>
//               <br />
//               <h5>
//                 <strong>Select Your Steed:</strong>
//               </h5>
//             </div>
//             <div className="main-overview">{/* Render other components */}</div>
//             <div className="main-cards">
//               <div className="cards-container">
//                 <LineChart /> {/* Render the LineChart component */}
//                 <div className="card card3">Card3</div>
//               </div>
//             </div>
//           </div>
//           <div id="sidebar-right">{/* Render SidebarStats */}</div>
//         </main>
//       </section>
//     </div>
//   );
// }

// export default Timeline;
