/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow-1">
          <Outlet />
        </div>
    </div>
  );
}

export default App;