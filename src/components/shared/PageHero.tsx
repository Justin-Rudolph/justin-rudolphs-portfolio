interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-jr-dark py-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {label && (
          <p className="text-jr-indigo text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {label}
          </p>
        )}
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-slate-400 text-lg font-light max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
