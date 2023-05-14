import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <div className="md:max-w-6xl mx-auto">
        <NavBar />
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Main;
