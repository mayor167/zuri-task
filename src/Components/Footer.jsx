import React from "react";
import "./Footer.css";

import zurilogo from "../images/zurilogo.png";
import ingressive from "../images/ingressive.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="line">
        <img style={{ marginBottom: "30px" }} src={zurilogo} alt="logo" />
        <h1 style={{ marginBottom: "30px" }}>
          HNG Internship 9 Frontend Task{" "}
        </h1>
        <img style={{ marginBottom: "30px" }} src={ingressive} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
