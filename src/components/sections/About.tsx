import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import GlitchSectionTitle from '@/components/shared/GlitchSectionTitle';

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.18);
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver(0.1);

  return (
    <section id="about" className="about-section">
      <div className="section-aura about-aura" aria-hidden="true" />
      <div className="section-inner">
        <div>
          <div>
            <div ref={headerRef as React.RefObject<HTMLDivElement>}>
              <p
                className="section-eyebrow"
                data-animate
                data-visible={headerVisible ? 'true' : undefined}
                data-delay="1"
              >
                About Me
              </p>

              <GlitchSectionTitle
                title={'Builder at heart.\nDesigner by training.'}
                isVisible={headerVisible}
                delay="2"
                className="about-headline"
              />
            </div>

            <p
              className="about-body"
              ref={contentRef as React.RefObject<HTMLParagraphElement>}
              data-animate
              data-visible={contentVisible ? 'true' : undefined}
              data-delay="1"
            >
              I'm a software engineer and multi-disciplinary builder. I graduated{' '}
              <em>Magna Cum Laude</em> from the University of Miami with a BSBA in
              Business Technology and a minor in Game Design — then went straight
              back to building things.
            </p>

            <p
              className="about-body"
              data-animate
              data-visible={contentVisible ? 'true' : undefined}
              data-delay="2"
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
              data-visible={contentVisible ? 'true' : undefined}
              data-delay="3"
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
