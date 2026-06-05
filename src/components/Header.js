import React from "react";
import "./Header.css";
import Packages from "./Packages";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="nav-container">
        <div className="logo-box active">
         <strong>COACH</strong>
        </div>

        <div className="logo-box">
          <span className="outlet-text">
            <strong>COACH</strong> OUTLET
          </span>
        </div>
      </div>
    </header>
    <Packages />
    </>
  );
};

export default Header;