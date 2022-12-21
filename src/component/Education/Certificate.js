import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/esm/Nav";

export default function Certificate(props) {
  return (
    <Col xs lg="4">
      <Card>
        <Nav.Link
          className="ceritficate_link"
          href={props.link}
          target="_blank"
        >
          <Card.Img variant="top" src={props.image} alt={props.title} />
          <Card.Text className="ceritficate_title">{props.title}</Card.Text>
        </Nav.Link>
      </Card>
    </Col>
  );
}
