/* Sektions-Kicker statt Badge-Pill: kurze Linie + Versalien */
export default function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] ${light ? 'text-amber-400' : 'text-amber-600'}`}>
      <span className="h-px w-10 bg-current" aria-hidden />
      {children}
    </span>
  );
}
