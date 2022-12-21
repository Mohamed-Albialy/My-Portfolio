import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Popup from "reactjs-popup";
import { FaInfoCircle } from "react-icons/fa";

export default function Project(props) {
  return (
    <Col xs lg="4" md="6">
      <Card.Text className="projects_paragraph">{props.title}</Card.Text>
      <Card className="project_hover">
        <Card.Img variant="top" src={props.image} alt={props.title} />

        <Popup
          trigger={
            <button className="project_information">
              <FaInfoCircle />
            </button>
          }
          position="right center"
        >
          <p className="project-detail">Project Detail</p>
          <div className="container_popup">
            <h2>Image Generator</h2>
            <ul className="popup_list">
              <li>
                <h6>Tech Stack:</h6> <span>{props.tecStack}</span>
              </li>
              <li>
                <h6>Github URL:</h6>
                <a href={props.repositories_link} target="_blank">
                  Repositorie Link
                </a>
              </li>
              <li>
                <h6>Preview:</h6>
                <a href={props.project_link} target="_blank">
                  Repositorie Link
                </a>
              </li>
            </ul>
            <p className="description">{props.description}</p>
          </div>
          <span
            className="close_popup"
            onClick={() =>
              (document.querySelector(".popup-content").style.cssText =
                "display:none;")
            }
          >
            X
          </span>
        </Popup>
      </Card>
    </Col>
  );
}
