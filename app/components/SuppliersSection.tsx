import Image from 'next/image';
import Link from 'next/link';
import { company } from '@/data/siteContent';
import { ScrollReveal } from './ScrollReveal';

export function SuppliersSection() {
  return (
    <section id="fournisseurs" className="relative bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-white" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Fournisseurs</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Des marques professionnelles reconnues et durables</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Je sélectionne des partenaires fiables pour garantir des solutions performantes, des fiches techniques claires et un SAV
            simplifié.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {company.suppliers.map((supplier, index) => (
            <ScrollReveal key={supplier.name} delay={index * 100}>
              <article className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft transition hover:shadow-xl">
              <div className="relative mb-4 flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                <Image src={supplier.image} alt={supplier.name} fill className="object-contain p-4 transition duration-500 group-hover:scale-110" sizes="(min-width: 1280px) 240px, (min-width: 768px) 220px, 100vw" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{supplier.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{supplier.description}</p>
                <Link
                  href={supplier.catalogUrl}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulter le catalogue
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden>→</span>
                </Link>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
