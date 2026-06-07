import { useEffect, useState } from 'react';
import { useScramble } from '@/hooks/useScramble';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ROLES = ['Software Engineer', 'App Developer', 'Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Founder'];
const TARGET = 'JUSTIN\nRUDOLPH';
const FINAL_NAME_LINES = ['Justin', 'Rudolph'];
type NamePhase = 'scrambling' | 'glitching' | 'styled';

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function GlitchTransition({ text, onComplete }: { text: string; onComplete: () => void }) {
  const lines = text.split('\n');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <div
      className="hero-name glitch-transition"
      onAnimationEnd={event => {
        if (event.currentTarget === event.target && event.animationName === 'glitchTransitionFrame') {
          onComplete();
        }
      }}
      aria-hidden="true"
    >
      <div className="glitch-transition__base">
        {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
      </div>
      {['red', 'green', 'blue'].map(channel => (
        <div
          key={channel}
          className={`glitch-transition__rgb glitch-transition__rgb--${channel}`}
        >
          {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
        </div>
      ))}
      <div className="glitch-transition__slice glitch-transition__slice--top">
        {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
      </div>
      <div className="glitch-transition__slice glitch-transition__slice--bottom">
        {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
      </div>
    </div>
  );
}

export default function Hero() {
  const { display, isComplete } = useScramble(TARGET, 300);
  const [hasFinishedGlitch, setHasFinishedGlitch] = useState(false);
  const { ref: nameRef, isVisible: nameVisible } = useIntersectionObserver(0.42);

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
  const namePhase: NamePhase = !isComplete ? 'scrambling' : hasFinishedGlitch ? 'styled' : 'glitching';
  const isStyledNameVisible = namePhase === 'styled';

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

            <div
              ref={nameRef as React.RefObject<HTMLDivElement>}
              className={`hero-name-wrapper hero-name-wrapper--${namePhase}`}
              aria-label="Justin Rudolph"
            >
              <div
                className="hero-name hero-name--mono"
                aria-hidden={namePhase !== 'scrambling'}
              >
                {lines.map((line, i) => <div key={i}>{line || ' '}</div>)}
              </div>
              {namePhase === 'glitching' && (
                <GlitchTransition
                  text={display}
                  onComplete={() => setHasFinishedGlitch(true)}
                />
              )}
              <div
                className="hero-name hero-name--serif hero-name-replay-glitch"
                data-visible={isStyledNameVisible && nameVisible ? 'true' : undefined}
                aria-hidden={!isStyledNameVisible}
              >
                <div className="hero-name-replay-glitch__base">
                  {FINAL_NAME_LINES.map(line => <div key={line}>{line}</div>)}
                </div>
                {['red', 'green', 'blue'].map(channel => (
                  <div
                    key={channel}
                    className={`hero-name-replay-glitch__rgb hero-name-replay-glitch__rgb--${channel}`}
                    aria-hidden="true"
                  >
                    {FINAL_NAME_LINES.map(line => <div key={line}>{line}</div>)}
                  </div>
                ))}
                <div className="hero-name-replay-glitch__slice hero-name-replay-glitch__slice--top" aria-hidden="true">
                  {FINAL_NAME_LINES.map(line => <div key={line}>{line}</div>)}
                </div>
                <div className="hero-name-replay-glitch__slice hero-name-replay-glitch__slice--bottom" aria-hidden="true">
                  {FINAL_NAME_LINES.map(line => <div key={line}>{line}</div>)}
                </div>
              </div>
            </div>

            <div
              className="hero-roles"
              style={{ opacity: isStyledNameVisible ? 1 : 0, transition: 'opacity 0.5s ease 0.15s' }}
            >
              {ROLES.map((role, i) => (
                <span key={role} className={`hero-role-pill${i === 0 ? ' hero-role-pill--active' : ''}`}>
                  {role}
                </span>
              ))}
            </div>

            <div
              className="hero-ctas"
              style={{ opacity: isStyledNameVisible ? 1 : 0, transition: 'opacity 0.5s ease 0.4s' }}
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

    </section>
  );
}
