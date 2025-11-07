import Image from 'next/image';
import { company } from '@/data/siteContent';
import { ScrollReveal } from './ScrollReveal';

const stats = [
  {
    value: `${company.experience}+`,
    label: 'années d’engagement',
    description: 'Disponibilité terrain, conseils et SAV réactif pour chaque client.'
  },
  {
    value: `${company.serviceAreas.length}`,
    label: 'départements couverts',
    description: company.serviceAreas.join(' · ')
  },
  {
    value: '100%',
    label: 'marques sélectionnées',
    description: 'Des fabricants reconnus pour la fiabilité de leurs outils.'
  }
];

export function AboutSection() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(30,76,122,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,180,0,0.05),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">À propos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Indépendant, engagé et proche du terrain
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              J'accompagne les artisans, PME, collectivités et industriels principalement en Occitanie.
              Ma différence : des visites régulières sur site, une sélection exigeante des produits et un service après-vente que je pilote directement.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid optimisée */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Stats compactes - Colonne gauche */}
          <div className="flex flex-col gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-primary/5 p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                  <div className="relative">
                    <p className="bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-5xl font-bold text-transparent">{stat.value}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-primary/70">{stat.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Image principale - Centre (plus grande) */}
          <ScrollReveal delay={300} className="lg:col-span-2">
            <div className="group relative min-h-[500px] overflow-hidden rounded-[36px] bg-slate-900 shadow-2xl transition-all duration-700 hover:shadow-3xl">
              <Image
                src="/images/Stive-camion.jpg"
                alt="Stive, fondateur AS PRO SERVICES en visite chez un client"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-10 transition-transform duration-500 group-hover:translate-y-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/90 px-5 py-2 shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-2xl">👨‍💼</span>
                  <span className="text-sm font-bold uppercase tracking-wide text-slate-900">Stive, fondateur</span>
                </div>
                <p className="text-2xl font-bold leading-tight text-white drop-shadow-lg">
                  "Rester joignable et présent sur le terrain est la meilleure façon d'apporter une réponse rapide à chaque besoin."
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/90 drop-shadow">
                  Accompagnement sur site, diagnostic atelier, suivi de vos commandes et déclenchement des réparations SAV.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Engagements & Zones - Grille 2 colonnes */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Nos engagements */}
          <ScrollReveal delay={400}>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/8 via-primary/5 to-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Mes engagements</p>
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  {company.engagements.map((engagement, index) => (
                    <li key={engagement} className="group/item flex items-start gap-3 transition-all duration-300 hover:translate-x-1" style={{ animationDelay: `${index * 50}ms` }}>
                      <div className="mt-0.5 rounded-full bg-gradient-to-br from-primary to-primary/70 p-1 shadow-sm transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-md">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="flex-1">{engagement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {company.missions.map((mission) => (
                    <span key={mission} className="rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary transition-all duration-300 hover:scale-105 hover:from-primary/20 hover:to-primary/10 hover:shadow-md">
                      {mission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Zones d'intervention */}
          <ScrollReveal delay={500}>
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/8 via-accent/5 to-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />
              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2">
                  <div className="rounded-full bg-accent/20 p-2">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Zones d'intervention</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {company.serviceAreas.map((area, index) => (
                    <div
                      key={area}
                      className="group/area relative overflow-hidden rounded-xl border-2 border-accent/20 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-gradient-to-br hover:from-accent/10 hover:to-accent/5 hover:shadow-md"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 transition-all duration-300 group-hover/area:from-accent/5 group-hover/area:to-accent/10" />
                      <span className="relative">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 transition-colors hover:bg-accent/10">
                    <span>📦</span> Livraison
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 transition-colors hover:bg-accent/10">
                    <span>🔧</span> Mise en route
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 transition-colors hover:bg-accent/10">
                    <span>⚙️</span> Suivi SAV
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 transition-colors hover:bg-accent/10">
                    <span>💡</span> Conseils
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Frise chronologique */}
        <ScrollReveal delay={600}>
          <div className="group mt-6 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 shadow-soft transition-all duration-500 hover:shadow-xl lg:p-12">
            <div className="mb-2 inline-flex items-center gap-2">
              <div className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-primary">Mon histoire</p>
            </div>
            <div className="relative mt-10">
              <div className="absolute left-0 top-0 h-1 w-full overflow-hidden rounded-full bg-slate-200" aria-hidden>
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-primary via-accent to-primary" />
              </div>
              <div className="grid gap-12 pt-12 md:grid-cols-3">
                {company.history.map((step, index) => (
                  <div
                    key={step.year}
                    className="group/step relative transition-all duration-500 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute -top-12 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary via-primary to-accent shadow-lg transition-all duration-500 group-hover/step:scale-125 group-hover/step:shadow-xl group-hover/step:shadow-primary/30" aria-hidden>
                      <span className="text-xs font-bold text-white">{String(step.year).slice(-2)}</span>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-sm transition-all duration-500 group-hover/step:shadow-lg">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/15 to-accent/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                        {step.year}
                      </span>
                      <p className="mt-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-base font-bold uppercase tracking-wide text-transparent">{step.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
