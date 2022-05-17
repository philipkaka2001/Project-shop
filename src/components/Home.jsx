import React from "react";
import anh1 from "../assets/1234.jpg";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-drak">
        <img src={anh1} className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">
              NEW SEASION ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
