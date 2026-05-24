import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import BackToTop from "./components/BackToTop/BackToTop";

import Hero from "./components/Hero/Hero";
import SelectedWork from "./components/SelectedWork/SelectedWork";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import HomeSkills from "./components/HomeSkills/HomeSkills";

const Testimonials = lazy(
  () => import("./components/Testimonials/Testimonials"),
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const AboutMePage = lazy(() => import("./pages/AboutMePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const WorksPage = lazy(() => import("./pages/WorksPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

import "./app.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
};

const SectionFallback = () => <div style={{ minHeight: "60vh" }} />;

const HomePage = () => (
  <>
    <Hero />
    <SelectedWork />
    <HomeSkills />
    <AboutMe />
    <Works />
    <Suspense fallback={<SectionFallback />}>
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

const PageFallback = () => <div style={{ minHeight: "100vh" }} />;

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/services" element={<WorksPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <BackToTop />
    </>
  );
}

export default App;
