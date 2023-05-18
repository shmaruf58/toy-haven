import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./compo/Navbar";
import Footer from "./compo/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Toy Haven | Home";
      case "/blog":
        return "Toy Haven | Blog";
      case "/alltoy":
        return "Toy Haven | All Toy";
      // Add more routes and corresponding titles as needed
      default:
        return "Toy Haven | Your Ultimate Toy Marketplace";
    }
  };
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
