import Container from "react-bootstrap/esm/Container";
import NavBar from "../NavBar/NavBar";
import "./About.css";
import imagePortfolio from "../../images/likedIn.png";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="about">
      <NavBar />
      <Container>
        <h2 className="header_about">ABOUT</h2>
        <div className="content">
          <img
            className="image_portfolio"
            src={imagePortfolio}
            alt="image_portfolio"
          />
          <div className="info">
            <p className="about_paragraph">
              Experienced Front End Developer building and maintaining web pages
              using HTML, CSS, Sass, Bootstrap, and JavaScript. Skilled with
              working as a team and incorporating input into projects, Strong
              programming mind and eye for detail, and tenacity to never quit on
              something until it is perfect.
            </p>
            <div className="personal_data">
              <div className="block_one">
                <div className="birthday">
                  <FaAngleDoubleRight />
                  Birthday: <span>20 Feb 1992</span>
                </div>
                <div className="phone">
                  <FaAngleDoubleRight />
                  Phone: <span>+20-155-068-3490</span>
                </div>
              </div>
              <div className="block_two">
                <div className="city">
                  <FaAngleDoubleRight />
                  City: <span>El-Mansoura</span>
                </div>
                <div className="email">
                  <FaAngleDoubleRight />
                  Email: <span>melbialy19@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
