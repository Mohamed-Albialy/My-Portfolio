import Container from "react-bootstrap/esm/Container";
import NavBar from "../NavBar/NavBar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import Icons from "../Icons/Icons";
// import { GrLocation } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="contact">
      <NavBar />
      <Container>
        <h2 className="header_contact">CONTACT</h2>
        <Row>
          <Col xs lg="6">
            <Card className="contact_card">
              <button className="icon_contact">
                <i className="fa-solid fa-location-dot"></i>
              </button>
              <Card.Body>
                <Card.Title className="content_paragraph">
                  My Address
                </Card.Title>
                <Card.Text className="content_paragraph">El-Mansoura</Card.Text>
                <Card.Text className="content_paragraph">
                  El-Dakahlia - Egypt
                </Card.Text>
                <Card.Text className="content_paragraph">
                  Post number, 35729
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="6">
            <Card className="contact_card">
              <button className="icon_contact">
                <i class="fa-sharp fa-solid fa-share-nodes"></i>
              </button>
              <Card.Body>
                <Card.Title>Social Profiles</Card.Title>
                <Icons />
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="6">
            <Card className="contact_card">
              <button className="icon_contact">
                <i class="fa-regular fa-envelope"></i>
              </button>
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text className="content_paragraph">
                  melbialy19@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="6">
            <Card className="contact_card">
              <button className="icon_contact">
                <i class="fa-solid fa-phone-volume"></i>
              </button>
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text className="content_paragraph">
                  +201014951296
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </section>
  );
}
