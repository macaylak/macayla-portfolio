import { skills } from "../../data/portfolio";

const highlights = [
  { label: "BSc Software Engineering", sub: "University of Calgary" },
  { label: "Engineer’s Iron Ring", sub: "Ethics & responsibility" },
  { label: "3rd Place Capstone", sub: "Emergency Dept Simulation" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">About</h2>
        </div>

        <div className="aboutGrid">
          {/* LEFT: Signature card */}
          <div className="card cardPad aboutHeroCard">
            <div className="aboutGlow" />
            <div className="aboutTop">
              {/* TOP: kicker + title */}
              <div className="aboutIntro">
                <div className="aboutKicker">New Grad • Open to work</div>

                <h3 className="aboutTitle">
                  Always learning. <span className="gradientText">Always building.</span>
                </h3>
              </div>

              {/* BODY: photo + about text */}
              <div className="aboutBody">
                <div className="aboutPhotoWrap">
                  <img
                    src="/images/profile.jpeg"
                    alt="Macayla Konig"
                    className="aboutPhoto"
                    loading="lazy"
                  />
                </div>

                <p className="p aboutLead">
                  I’m a Software Engineering graduate with a love for hands-on work, learning new skills,
                  and seeing real projects through. I’ve worked in data, operations, and public infrastructure,
                  and I’m drawn to roles where I can stay active, solve real problems, and keep growing.
                </p>
              </div>

              {/* Highlights */}
              <div className="aboutPills">
                {highlights.map((h) => (
                  <div key={h.label} className="aboutPill">
                    <div className="aboutPillTitle">{h.label}</div>
                    <div className="aboutPillSub">{h.sub}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="btnRow" style={{ marginTop: 14 }}>
                <a className="btn btnPrimary" href="#projects">
                  See Projects
                </a>
                <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <p className="p" style={{ marginTop: 14, color: "var(--muted)" }}>
                I’m looking for an entry-level software engineering role where I can learn fast, contribute to real
                features, and grow with a strong team.
              </p>
            </div>
          </div>

          {/* RIGHT: Stats + skills */}
          <div className="card cardPad aboutInfoCard">
            <div className="aboutStats">
              <div className="aboutStat">
                <div className="aboutStatLabel">Awards</div>
                <div className="aboutStatValue">Indigenous Careers Award</div>
                <div className="aboutStatValue">Jason Lang Scholarship</div>
              </div>

              <div className="aboutStat">
                <div className="aboutStatLabel">Certification</div>
                <div className="aboutStatValue">APEGA Ethics Workshop</div>
                <div className="aboutStatSub">Completed Nov 29, 2025</div>
              </div>
            </div>

            <div className="aboutSkillsBlock">
              <div className="aboutSkillsHeader">
                <div className="aboutSkillsTitle">Skills</div>
              </div>

              <div className="aboutSkillGroups">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group} className="aboutSkillGroup">
                    <div className="aboutSkillGroupTitle">{group}</div>
                    <div className="aboutSkillChips">
                      {items.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}