import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
