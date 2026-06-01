export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Justin Rudolph</p>
        <p>Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}
