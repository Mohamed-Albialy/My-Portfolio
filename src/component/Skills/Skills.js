import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../NavBar/NavBar";
import Skill from "./Skill";
import "./Skills.css";
import Skills_data from "./Skill_data";

export default function Skills() {
  const [skills, setSkills] = useState(Skills_data);

  const mySkill = skills.map((skill) => {
    return <Skill key={skill.id} {...skill} />;
  });

  return (
    <section className="skills">
      <NavBar />
      <Container>
        <h2 className="header_skills">SKILLS</h2>
        <div className="skill_content">{mySkill}</div>
      </Container>
    </section>
  );
}
