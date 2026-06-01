import { useEffect, useState } from 'react';

const NAV = [
  { href: '#projects',   label: 'Work' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handler = () => setPastHero(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="header-root">
      <div className="header-inner">
        <button
          className="header-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          JR
        </button>
        <nav className={`header-nav${pastHero ? ' header-nav--visible' : ''}`} aria-label="Site navigation">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="header-nav-link"
              onClick={e => { e.preventDefault(); scrollTo(href); }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
