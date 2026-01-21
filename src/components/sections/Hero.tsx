import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="heroGrid">
          <div>
            <div className="kicker">
              <span className="dot" />
              <span>Software Engineering Graduate • Open to Opportunities</span>
            </div>

            <h1 className="h1">
              Hi, I’m <span className="name">Macayla Konig</span> —{" "}
              <span className="gradientText">Future Engineer.</span>
            </h1>

            <p className="p lead">
              Software Engineering graduate from the University of Calgary with experience across data analytics,
              high-trust operations, and hands-on public work. I enjoy building real systems, learning new skills,
              and taking pride in work done well.
            </p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>
              <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </div>
          </div>

          <motion.div
            className="card cardPad heroCard"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="auraBlob" />
              <div className="heroCardInner">
                <p className="heroHighlightsTitle">Quick highlights</p>

                <ul className="heroHighlightsList">
                  <li>Software Engineering degree (University of Calgary)</li>
                  <li>Data analytics internship experience (CIBC)</li>
                  <li>High-trust operations work (G7 Summit, Global Affairs Canada)</li>
                  <li>Capstone project — 3rd place at the 2025 fair</li>
                </ul>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}