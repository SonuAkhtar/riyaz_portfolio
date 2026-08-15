import AboutHero from "../components/AboutHero/AboutHero";
import Philosophy from "../components/Philosophy/Philosophy";
import Achievements from "../components/Achievements/Achievements";
import Trajectory from "../components/Trajectory/Trajectory";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./aboutMePage.css";

const AboutMePage = () => (
  <div className="ab_root">
    <AboutHero />
    <Philosophy />
    <Achievements />
    <Trajectory />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default AboutMePage;
