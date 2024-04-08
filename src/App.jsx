import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Compare from "./routes/Compare";
import Timeline from "./routes/Timeline";
import Header from "./components/Header/Header";
import MainContainer from "./components/maincontainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          {/* Sidebar content goes here */}
          {/* You can add navigation links or any other sidebar content */}
        </div>
        <div className="main-container">
          <Header />
          {/* Render the content inside the MainContainer */}
          <MainContainer>
            <Routes>
              {/* Render Dashboard component inside the MainContainer */}
              <Route path="/" element={<Dashboard />} />
              {/* Render Compare component inside the MainContainer */}
              <Route path="/compare" element={<Compare />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
