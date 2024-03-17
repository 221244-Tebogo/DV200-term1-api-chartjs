//API Example
import React, { useEffect, useState } from "react";
import axios from "axios";

const RaceDetails = ({ race }) => {
  return (
    <div>
      <h2>Race Details</h2>
      <p>Track: {race.track}</p>
      <p>Time: {race.time}</p>
      {/* Add more details as needed */}
    </div>
  );
};

const Manu = () => {
  const [race, setRace] = useState(null);

  useEffect(() => {
    const fetchRacecards = async () => {
      const racecardsOptions = {
        method: "GET",
        url: "https://horse-racing.p.rapidapi.com/racecards",
        params: { date: "2020-03-12" },
        headers: {
          "X-RapidAPI-Key":
            "760d5078f9msh46aad0bfc90c7f3p11f496jsn4bbc447edfaf",
          "X-RapidAPI-Host": "horse-racing.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(racecardsOptions);
        console.log(response.data);
        // Assuming response.data is an array of races, you can select one race
        if (response.data.length > 0) {
          setRace(response.data[0]); // Set the first race details
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRacecards();
  }, []);

  return (
    <div>
      <h1>API Call Exercise</h1>
      {race && <RaceDetails race={race} />}{" "}
      {/* Render RaceDetails component if race exists */}
    </div>
  );
};

export default Manu;

// EVENT HANDLER
// import React, { useState } from "react";

// const Manu = () => {
//   const [btnColor, setBtnColor] = useState("blue");
//   const [h1Color, setH1Color] = useState("pink");

//   //camelCase your event
//   const handleBtnClick = () => {
//     alert("Manchester United");
//   };

//   return (
//     <div>
//       <button
//         style={{ backgroundColor: btnColor }}
//         onMouseEnter={() => setBtnColor("red")}
//         onMouseLeave={() => setBtnColor("blue")}
//         onClick={handleBtnClick}
//       >
//         Click me
//       </button>
//       <h1
//         style={{ color: h1Color }}
//         onMouseEnter={() => setH1Color("blue")}
//         onMouseLeave={() => setH1Color("yellow")}
//       >
//         Class Exercise
//       </h1>
//     </div>
//   );
// };

// export default Manu;
