import "./Links.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <Nav className="ms-auto home-style">
      <NavLink className="nav-link  nav-home" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link nav-home" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link nav-home" to="/education">
        Education
      </NavLink>
      {/* <NavLink className="nav-link nav-home" to="/experience">
        Experience
      </NavLink> */}
      <NavLink className="nav-link nav-home" to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link nav-home" to="/skills">
        Skills
      </NavLink>
      <Nav
        className="nav-link nav-home resume"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1xP-zPfNsGdbH-UwOqqaAf6IF3O7RBKgy/view",
            "_blank"
          );
        }}
      >
        Resume
      </Nav>
      <NavLink className="nav-link nav-home" to="/contact">
        Contact
      </NavLink>
    </Nav>
  );
}
