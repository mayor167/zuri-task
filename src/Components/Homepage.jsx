import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import arrow from "../images/arrow.png";
import arrow2 from "../images/arrow2.png";
import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.css";
const Homepage = () => {
  return (
    <Container className="container HomeContainer">
      <h1 id="slack" className="myslackusername">
        Oyeyemi ADENIJI
      </h1>
      <div className="prof_con">
        <div className="profile"></div>
        <h1 id="twitter">Adeniji Mayokun</h1>
        <img id="profile_img" className="arrow" alt="arsaww" src={arrow} />
        <img className="arrow2" alt="arsaww" src={arrow2} />
      </div>

      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <a href="#" target="_blank">
          <button>Twitter Link</button>
        </a>
      </div>

      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <a href="https://training.zuri.team/" target="_blank">
          <button id="btn_zuri">Zuri Team</button>
        </a>
      </div>

      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <div className="showbtn">
          <a href=" https://books.zuri.team/ " target="_blank">
            <button id="books">Zuri Books</button>
          </a>
          <span className="details">Find books about design and coding</span>
        </div>
      </div>
      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <div className="showbtn">
          <a
            href="https://books.zuri.team/python-for-beginner?ref_id=<Oyeyemi ADENIJI>"
            target="_blank"
          >
            <button id="book_python">Python Books</button>
          </a>
          <span className="details">Get good books on my platform</span>
        </div>
      </div>

      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <div className="showbtn">
          <a href="https://background.zuri.team" target="_blank">
            <button id="pitch">Background Check for Coders</button>
          </a>
          <span className="details">
            Learn and earn big with your digital skills
          </span>
        </div>
      </div>
      <div style={{ maxwidth: "1200px" }} className="btncontrol">
        <div className="showbtn">
          <a href="https://books.zuri.team/design-rules" target="_blank">
            <button id="book_design">Design Books</button>
          </a>
          <span className="details">
            Get free design books offered by Zuri{" "}
          </span>
        </div>
      </div>
      <div className="logoafterbtn">
        <img className="logo1" alt="arww" src={logo1} />
        <img className="logo2" alt="arww" src={logo2} />
      </div>
      {/* <div className="footer">
        <img className="zurilogo" alt="arww" src={zurilogo} />
        <h1>HNG Internship 9 Frontend Task</h1>
        <img clasName="ingressive" alt="arww" src={ingressive} />
  </div> */}
    </Container>
  );
};

export default Homepage;
