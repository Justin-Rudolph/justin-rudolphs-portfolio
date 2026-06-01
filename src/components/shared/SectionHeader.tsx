interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {label && (
        <p className="text-jr-indigo text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-base max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
