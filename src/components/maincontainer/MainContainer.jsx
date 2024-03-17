import React from "react";
import "./MainContainer.css";

function MainContainer({ children }) {
  return (
    <div className="mainContainer">
      <div className="Statistics"></div>
      <div className="centre">{children}</div>
      {/* <div className="item item-3">Item 3</div> */}
    </div>
  );
}

export default MainContainer;
