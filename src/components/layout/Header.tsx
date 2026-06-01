import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 flex h-14 items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight">
          Justin Rudolph
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
