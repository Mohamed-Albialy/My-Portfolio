import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Icons.css";

export default function Icons() {
  return (
    <>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/mohamed-elbialy-5528a3231/"
          target="_blank"
        >
          <button className="linkedin my_icons" type="_button">
            <FaLinkedinIn />
          </button>
        </a>
        <a href="https://github.com/Mohamed-Albialy" target="_blank">
          <button className="github my_icons" type="button">
            <FaGithub />
          </button>
        </a>
      </div>
    </>
  );
}
