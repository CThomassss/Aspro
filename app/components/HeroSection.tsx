'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { company } from '@/data/siteContent';
import { Header } from './Header';
import { ToolIcon, HandshakeIcon, TruckIcon, PhoneIcon } from './Icons';

const featurePoints = [
  {
    icon: ToolIcon,
    title: `Expertise terrain`,
    description: 'Présence terrain, accompagnement et SAV réactif.'
  },
  {
    icon: HandshakeIcon,
    title: 'Conseil personnalisé',
    description: 'Un interlocuteur unique pour vos métiers.'
  },
  {
    icon: TruckIcon,
    title: 'Livraison rapide',
    description: 'Intervention en Occitanie et au-delà.'
  }
];

const catchphrases = [
  "L'outillage professionnel au service de votre métier",
  "Des solutions adaptées, un service de proximité",
  "Votre succès commence avec les bons outils"
];

const HERO_ROTATION_DELAY = 5200;

export function HeroSection() {
  const [catchphraseIndex, setCatchphraseIndex] = useState(0);

  useEffect(() => {
    if (catchphrases.length <= 1) return;
    const intervalId = window.setInterval(() => {
      setCatchphraseIndex((prev) => (prev + 1) % catchphrases.length);
    }, HERO_ROTATION_DELAY);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeCatchphrase = catchphrases[catchphraseIndex];
  const serviceAreaSummary = useMemo(() => {
    const displayed = company.serviceAreas.slice(0, 4);
    const remaining = Math.max(company.serviceAreas.length - displayed.length, 0);
    return { displayed, remaining };
  }, []);

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <Header overlay />
      <div className="absolute inset-0">
        <Image
          src="/images/Hero-section.webp"
          alt="Atelier équipé AS PRO SERVICES"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,180,0,0.18),_transparent_55%)] mix-blend-screen" />
        <div className="absolute inset-x-0 bottom-[-30%] h-[70%] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent blur-3xl" aria-hidden />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-28 pt-36 lg:flex-row lg:items-center">
        <div className="relative z-10 flex max-w-2xl flex-1 flex-col gap-8 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent shadow-soft">
            Professionnel depuis 2005
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Votre partenaire
            <br />
            <span className="bg-gradient-to-r from-accent via-white to-accent/80 bg-clip-text text-transparent">outillage</span>
            <br />
            professionnel de proximité
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            {company.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="flex h-10 items-center rounded-full border border-white/15 bg-white/10 px-4 font-semibold tracking-widest text-[0.65rem] uppercase text-accent">
              {activeCatchphrase}
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#promotions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(245,180,0,0.25)] transition hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Découvrir les offres du moment
            </Link>
            <Link
              href={`tel:${company.contact.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-accent/60 hover:text-accent whitespace-nowrap"
            >
              <PhoneIcon className="h-5 w-5 flex-shrink-0" />
              <span>Appeler le {company.contact.displayPhone}</span>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
            {serviceAreaSummary.displayed.map((area) => (
              <span key={area} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                {area}
              </span>
            ))}
            {serviceAreaSummary.remaining > 0 && (
              <span className="rounded-full border border-accent/30 bg-accent/20 px-3 py-1 text-accent">
                +{serviceAreaSummary.remaining} départements
              </span>
            )}
          </div>
        </div>

        <div className="relative z-10 flex flex-1 justify-end">
          <div className="relative w-full max-w-lg rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="absolute -left-12 top-16 hidden h-32 w-32 rounded-full bg-accent/20 blur-3xl lg:block" aria-hidden />
            <div className="absolute -right-12 -top-10 hidden h-28 w-28 rounded-full bg-primary/30 blur-3xl lg:block" aria-hidden />
            <div className="flex flex-col gap-5">
              {featurePoints.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-accent/40 hover:bg-slate-950/30"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-slate-900">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-white">{feature.title}</p>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                    <span className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/5 opacity-0 blur group-hover:opacity-100" aria-hidden />
                  </div>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75 shadow-inner">
              <p className="font-semibold text-white">Besoin d’un diagnostic atelier ?</p>
              <p className="mt-1 text-white/60">
                Je me déplace chez vous pour analyser vos besoins, livrer le matériel et activer le SAV en direct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
