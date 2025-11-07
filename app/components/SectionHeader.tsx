interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </div>
  );
}
