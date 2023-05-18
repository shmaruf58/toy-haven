import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./compo/Navbar";
import Footer from "./compo/Footer";


function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
