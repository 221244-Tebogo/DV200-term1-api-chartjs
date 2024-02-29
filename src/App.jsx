import "./App.css";
// import "bootstrap/dist/bootstrap.css";
import SideNavbar from "./components/navbar/SideNavbar";
import MugshotCard from "./components/mugshotcard/MugshotCard";
// import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <MugshotCard />
    </div>
  );
}

export default App;
