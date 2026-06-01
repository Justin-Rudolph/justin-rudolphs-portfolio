import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.12);

  return (
    <section id="about" className="about-section">
      <div className="section-aura about-aura" aria-hidden="true" />
      <div
        className="section-inner"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div>
          <div>
            <p
              className="section-eyebrow"
              data-animate
              data-visible={isVisible ? 'true' : undefined}
              data-delay="1"
            >
              About Me
            </p>

            <h2
              className="about-headline"
              data-animate
              data-visible={isVisible ? 'true' : undefined}
              data-delay="2"
            >
              Builder at heart.<br />Designer by training.
            </h2>

            <p
              className="about-body"
              data-animate
              data-visible={isVisible ? 'true' : undefined}
              data-delay="3"
            >
              I'm a software engineer and multi-disciplinary builder. I graduated{' '}
              <em>Magna Cum Laude</em> from the University of Miami with a BSBA in
              Business Technology and a minor in Game Design — then went straight
              back to building things.
            </p>

            <p
              className="about-body"
              data-animate
              data-visible={isVisible ? 'true' : undefined}
              data-delay="4"
              style={{ marginTop: '-0.75rem' }}
            >
              I care about software that works beautifully — from the database
              schema to the pixel. Whether it's a health-tech portal, a funded
              mobile app, or a Unity game that wins awards, I'm most at home
              when design and engineering overlap.
            </p>

            <div
              className="about-role-card"
              data-animate
              data-visible={isVisible ? 'true' : undefined}
              data-delay="5"
            >
              <div className="about-role-dot" aria-hidden="true" />
              <div>
                <p className="about-role-label">Current Role</p>
                <p className="about-role-title">Software Engineer · Roshal Health</p>
                <p className="about-role-sub">
                  Web Client &amp; Admin Portals · Mobile iOS/Android · REST APIs<br />
                  DB Architecture · Power BI · HubSpot · Monday.com · Twilio · Azure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
