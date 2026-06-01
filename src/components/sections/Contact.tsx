import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HEADLINE = 'Say hello.';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div
        className="contact-inner"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <p
          className="contact-eyebrow"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
        >
          Let's work together
        </p>

        {/* Per-letter entrance for the headline */}
        <h2 className="contact-headline" aria-label={HEADLINE}>
          {HEADLINE.split('').map((char, i) =>
            char === ' ' ? (
              <span key={i} className="letter letter--space"> </span>
            ) : (
              <span
                key={i}
                className="letter"
                aria-hidden="true"
                style={
                  isVisible
                    ? { animationDelay: `${i * 0.045}s` }
                    : { opacity: 0, animation: 'none' }
                }
              >
                {char}
              </span>
            )
          )}
        </h2>

        <p
          className="contact-sub"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
          data-delay="3"
        >
          Whether it's a project, a role, or just a conversation — I'm always
          open to connecting with people doing interesting work.
        </p>

        <div
          className="contact-ctas"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
          data-delay="4"
        >
          <a href="mailto:rudolph.justin01@gmail.com" className="btn-primary">
            rudolph.justin01@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/justin-rudolph/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn →
          </a>
        </div>

        <div
          className="contact-links"
          data-animate
          data-visible={isVisible ? 'true' : undefined}
          data-delay="5"
        >
          <a
            href="https://github.com/Justin-Rudolph"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/justin-rudolph/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/rudy2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
