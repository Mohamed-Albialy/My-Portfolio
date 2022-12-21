import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Container";
import Icons from "../Icons/Icons";
import Links from "../NavBar/Links";
import "./Home.css";

export default function Home() {
  function addAppearClass() {
    document.querySelector(".links").classList.toggle("appear");
    document.querySelector(".bar_icon").classList.toggle("active");
  }

  return (
    <section className="home_section">
      <Container className="home">
        <h2 className="name">Mohamed Elbialy</h2>
        <p className="position mb-4 mb-lg-0">
          <span>I am</span>
          <div className="message">
            <div className="word1">Frontend</div>
            <div className="word2">developer</div>
          </div>
        </p>
        <i
          className="fa-solid fa-bars burger-bar bar_icon"
          onClick={() => addAppearClass()}
        ></i>
        <div className="links mb-5">
          <Links />
        </div>

        <Icons />
      </Container>
    </section>
  );
}
