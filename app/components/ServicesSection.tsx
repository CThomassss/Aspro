import Link from 'next/link';
import { company } from '@/data/siteContent';
import { GearIcon, CheckCircleIcon, ClipboardIcon, WrenchIcon, TruckIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

type ServiceIconKey = 'gear' | 'wrench' | 'clipboard' | 'check' | 'truck';

const serviceIcons: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  gear: GearIcon,
  wrench: WrenchIcon,
  clipboard: ClipboardIcon,
  check: CheckCircleIcon,
  truck: TruckIcon
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(30,76,122,0.08),_transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-slate-100/70 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Services</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Des solutions complètes, du conseil au suivi après-vente</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Du premier diagnostic à la livraison, chaque mission est gérée par un interlocuteur unique qui connaît vos chantiers et vos impératifs.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {company.services.map((service) => {
            const IconComponent = service.icon ? serviceIcons[service.icon as ServiceIconKey] ?? GearIcon : GearIcon;
            return (
              <ScrollReveal key={service.name}>
                <article className="group relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 p-8 shadow-soft transition hover:border-primary/40 hover:shadow-soft-lg">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                    <p className="text-base text-slate-600">{service.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary/80 transition group-hover:text-primary">
                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                    Service disponible sur demande
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/10" aria-hidden />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-14 rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/5 via-white to-accent/10 p-8 text-sm text-slate-700 shadow-soft md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Accompagnement continu</p>
            <p className="mt-2 text-base md:text-lg">
              Besoin d’un suivi régulier de vos consommables ou d’une mise à jour de parc ? Je planifie des visites terrain pour anticiper vos besoins.
            </p>
          </div>
          <Link href="#contact" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white md:mt-0">
            Organiser un point atelier →
          </Link>
        </div>
      </div>
    </section>
  );
}
