// import logo from "./logo.svg";
// import NavBar from "./component/NavBar/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Education from "./component/Education/Education";
// import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
// import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
