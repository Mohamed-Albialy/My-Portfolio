import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../NavBar/NavBar";
import Project from "./Project";
import "./Projects.css";
import Project_data from "./Project_data";

export default function Projects() {
  const [projects, setProjects] = useState(Project_data);

  const myProjects = projects.map((project) => {
    return <Project key={project.id} {...project} />;
  });
  return (
    <section className="projects_section">
      <NavBar />
      <Container>
        <h2 className="header_projects">PROJECTS</h2>
        <Row>{myProjects}</Row>
      </Container>
    </section>
  );
}
