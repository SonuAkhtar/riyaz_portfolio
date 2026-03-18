import { Routes, Route } from "react-router-dom";

// Layout
import Header  from "./components/Header/Header";
import Footer  from "./components/Footer/Footer";

// Home sections
import Hero            from "./components/Hero/Hero";
import AboutMe         from "./components/AboutMe/AboutMe";
import Qualifications  from "./components/Qualifications/Qualifications";
import Works           from "./components/Works/Works";
import Skills          from "./components/Skills/Skills";
import Projects        from "./components/Projects/Projects";
import Hobbies         from "./components/Hobbies/Hobbies";
import Contact         from "./components/Contact/Contact";

// Separate pages
import AboutMePage    from "./pages/AboutMePage";
import SkillsPage     from "./pages/SkillsPage";
import WorksPage      from "./pages/WorksPage";
import ProjectsPage   from "./pages/ProjectsPage";
import TestimonyPage  from "./pages/TestimonyPage";

import "./app.css";

const HomePage = () => (
  <>
    <Hero />
    <AboutMe />
    <Qualifications />
    <Works />
    <Skills />
    <Projects />
    <Hobbies />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"          element={<HomePage />}    />
        <Route path="/about-me"  element={<AboutMePage />} />
        <Route path="/skills"    element={<SkillsPage />}  />
        <Route path="/work"      element={<WorksPage />}   />
        <Route path="/projects"   element={<ProjectsPage />} />
        <Route path="/testimony"  element={<TestimonyPage />} />
      </Routes>
    </>
  );
}

export default App;
