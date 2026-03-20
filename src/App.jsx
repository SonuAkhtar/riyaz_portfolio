import { Routes, Route } from "react-router-dom";
import "./app.css";

// Layout Components
import Header from "./components/Header/Header";

// Pages
import HomePage from "./pages/Home/Homepage";
import AboutPage from "./pages/About/AboutPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import WorksPage from "./pages/Works/WorksPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import TestimonyPage from "./pages/Testimony/TestimonyPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work" element={<WorksPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/testimony" element={<TestimonyPage />} />
      </Routes>
    </>
  );
}

export default App;
