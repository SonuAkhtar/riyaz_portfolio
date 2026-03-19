// Home Components
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Qualifications from "../../components/Qualifications/Qualifications";
import Works from "../../components/Works/Works";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Hobbies from "../../components/Hobbies/Hobbies";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
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
};

export default HomePage;
