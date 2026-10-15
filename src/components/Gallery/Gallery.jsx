import { motion } from "framer-motion";
import { aboutPage, hobbiesData } from "../../../appData";
import { fadeInUp, stagger, viewportOptions } from "../../utils/animations";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./gallery.css";

const Gallery = () => (
  <section className="gallery_root">
    <div className="section_inner">
      <SectionHeader
        eyebrow="Outside work"
        title="Off the clock."
        aside={aboutPage.gallery}
      />
    </div>

    <div className="gallery_scroller">
      <motion.ul
        className="gallery_grid section_inner"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={stagger}
      >
        {hobbiesData.map((img) => (
          <motion.li key={img.id} className="gallery_item" variants={fadeInUp}>
            <div className="gallery_item-image">
              <img src={img.image} alt={img.title} loading="lazy" decoding="async" />
            </div>
            <span className="gallery_item-caption">{img.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Gallery;
