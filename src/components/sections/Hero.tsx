import { useEffect } from 'react';
import { useScramble } from '@/hooks/useScramble';

const ROLES = ['Software Engineer', 'App Developer', 'Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Founder'];
const TARGET = 'JUSTIN\nRUDOLPH';

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const { display, isComplete } = useScramble(TARGET, 300);

  useEffect(() => {
    const section = document.getElementById('hero') as HTMLElement | null;
    if (!section) return;
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, section.offsetHeight);
        section.style.setProperty('--prlx-grid', `${y * 0.18}px`);
        section.style.setProperty('--prlx-orb',  `${y * 0.09}px`);
        section.style.setProperty('--prlx-img',  `${-y * 0.05}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
  const lines = display.split('\n');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-scan-line" />
      </div>
      <div className="hero-glow-orb" aria-hidden="true" />
      <div className="hero-glow-orb-2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-layout">

          {/* ── Text column ── */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" aria-hidden="true" />
              Available for opportunities
            </div>

            <div className="hero-name-wrapper" aria-label="Justin Rudolph">
              <div
                className="hero-name hero-name--mono"
                style={{ opacity: isComplete ? 0 : 1 }}
                aria-hidden={isComplete}
              >
                {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
              </div>
              <div
                className="hero-name hero-name--serif"
                style={{ opacity: isComplete ? 1 : 0 }}
                aria-hidden={!isComplete}
              >
                <div>Justin</div>
                <div>Rudolph</div>
              </div>
            </div>

            <div
              className="hero-roles"
              style={{ opacity: isComplete ? 1 : 0, transition: 'opacity 0.5s ease 0.15s' }}
            >
              {ROLES.map((role, i) => (
                <span key={role} className={`hero-role-pill${i === 0 ? ' hero-role-pill--active' : ''}`}>
                  {role}
                </span>
              ))}
            </div>

            <div
              className="hero-ctas"
              style={{ opacity: isComplete ? 1 : 0, transition: 'opacity 0.5s ease 0.4s' }}
            >
              <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); scrollTo('#projects'); }}>
                View My Work
              </a>
              <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* ── Portrait column ── */}
          <div className="hero-image-col" aria-hidden="true">
            <div className="hero-portrait-ring" />
            <div className="hero-portrait-ring hero-portrait-ring--2" />
            <div className="hero-portrait-glow" />
            <img
              src="/self_portrait.png"
              alt="Justin Rudolph"
              className="hero-portrait"
            />
            <div className="hero-portrait-fade" />
          </div>

        </div>
      </div>

      <div
        className="hero-scroll"
        style={{ opacity: isComplete ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}
        aria-hidden="true"
      >
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
