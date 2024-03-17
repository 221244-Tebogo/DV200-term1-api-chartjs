import React from "react";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// import React from "react";
// import "./HeroImage.css";

// const HeroImage = () => {
//   return (
//     <div className="hero-container">
//       <div className="hero-image-container"></div>
//       <div className="hero-text-container">
//         <h1>Welcome to our Horse Racing API Dashboard!</h1>
//         <p>
//           Our comprehensive API provides real-time and historical data on horse
//           racing events, including race details, horse and jockey information,
//           and betting odds. Explore race statistics, compare horse and jockey
//           performance, and track betting trends to make informed decisions.
//           Whether you're a seasoned punter or a racing enthusiast, our API has
//           everything you need to stay ahead of the game. Start exploring now!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroImage;

// use this below for HERO image
// import React from "react";
// export default function HeroImage() {
//   return (
//     <header style={{ paddingLeft: 0 }}>
//       <div
//         className='p-5 text-center bg-image'
//         style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
//       >
//         <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//           <div className='d-flex justify-content-center align-items-center h-100'>
//             <div className='text-white'>
//               <h1 className='mb-3'>Heading</h1>
//               <h4 className='mb-3'>Subheading</h4>
//               <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
//                 Call to action
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
