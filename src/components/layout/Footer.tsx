export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span>&copy; {new Date().getFullYear()} Justin Rudolph</span>
        <span>Designed &amp; built with React + Vite</span>
      </div>
    </footer>
  );
}
