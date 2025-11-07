import Link from 'next/link';
import { company } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-accent/15 to-transparent blur-2xl" aria-hidden />
      <div className="border-b border-white/10 bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">Prendre contact</p>
            <h3 className="mt-2 text-2xl font-semibold">Parlons de vos besoins outillage</h3>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              Une question sur une marque, un besoin urgent ou un SAV ? Je réponds directement et me déplace dans votre atelier si nécessaire.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <Link
              href={`tel:${company.contact.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-3 text-base font-semibold text-slate-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Appeler le {company.contact.displayPhone}
            </Link>
            <Link
              href={`mailto:${company.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white/80 transition hover:border-accent/60 hover:text-accent"
            >
              {company.contact.email}
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="text-sm text-white/60">
            Fourniture d’outillage et consommables pour professionnels. {company.experience}+ ans d’expertise au service de vos chantiers et ateliers.
          </p>
          <p className="text-sm text-white/40">{company.contact.address}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Engagements</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {company.engagements.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</h4>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Téléphone</p>
            <Link href={`tel:${company.contact.phone}`} className="mt-1 block text-lg font-semibold text-white hover:text-accent">
              {company.contact.displayPhone}
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Horaires</p>
            <p className="mt-1">{company.contact.hours}</p>
          </div>
          <Link href="/admin" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-accent">
            Administration des promotions →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {company.name} — Tous droits réservés.
      </div>
    </footer>
  );
}
