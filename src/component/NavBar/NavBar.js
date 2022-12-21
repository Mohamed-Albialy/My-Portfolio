import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Links from "./Links";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import Nav from "react-bootstrap/Nav";
// import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Link className="logo" to="/">
          Mohamed Elbialy
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Links />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <Navbar className="navbar-bg" bg="dark" expand="lg">
//   <Container>
//     <Link className="nav-link logo" to="/">
//       Mohamed Elbialy
//     </Link>
//     <Links />
//   </Container>
// </Navbar>
