import ExperienceCarousel from "../ExperienceCarousel";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Experience</h2>
          <p className="p" style={{ maxWidth: 520 }}>
            Technical + real-world roles that built reliability, communication, and execution.
          </p>
        </div>

        <ExperienceCarousel items={experience} />
      </div>
    </section>
  );
}