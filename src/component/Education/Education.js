import Container from "react-bootstrap/esm/Container";

import NavBar from "../NavBar/NavBar";
import "./Education.css";
import Card from "react-bootstrap/Card";
import mtcImage from "../../images/mtc.png";
// import udacityLogo from "../../images/Udacity-Logo.png";
import Row from "react-bootstrap/Row";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Education_data from "./Education_data";
import Certificate from "./Certificate";

export default function Education(props) {
  const [educations, setEducations] = useState(Education_data);

  const myEducation = educations.map((education) => {
    return <Certificate key={education.id} {...education} />;
  });

  console.log(educations);

  return (
    <section className="education">
      <NavBar />
      <Container>
        <h2 className="header_education">EDUCATION</h2>
        <div className="content_education">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mtcImage} />
            <Card.Body>
              <Card.Title>MTC</Card.Title>
              <Card.Text>
                Bachelor of Engineering
                <Card.Text>
                  BE Mechanical Engineering
                  <Card.Text>Oct 2010 - Jul 2015</Card.Text>
                </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h2 className="header_certification">ONLINE CERTIFICATION</h2>
        <div className="content_certification">
          <Row>{myEducation}</Row>
        </div>
      </Container>
    </section>
  );
}
