export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Contact</h2>
        </div>

        <div className="card cardPad">
          <div className="contactRow">
            <div className="contactLabel">Email</div>
            <a className="contactValue" href="mailto:macaylakonig@gmail.com">
              macaylakonig@gmail.com
            </a>
          </div>

          <div className="contactRow">
            <div className="contactLabel">GitHub</div>
            <a
              className="contactValue contactLink"
              href="https://github.com/macaylak"
              target="_blank"
              rel="noreferrer"
            >
              github.com/macaylak
            </a>
          </div>

          <div className="contactRow">
            <div className="contactLabel">Phone</div>
            <a className="contactValue" href="tel:+15878908845">
              (587) 890-8845
            </a>
          </div>

          <div className="contactRow contactRowNoDivider">
            <div className="contactLabel">Location</div>
            <div className="contactValue contactValueMuted">
              Calgary, AB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}