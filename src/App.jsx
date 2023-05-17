import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./compo/Navbar";


function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
