import Link from 'next/link';
import { company } from '@/data/siteContent';

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976076758-347942db197f?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-40 md:flex-row md:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
            +20 ans d’expérience
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Votre partenaire outillage & consommables dans le Sud-Ouest
          </h1>
          <p className="text-lg text-white/80 md:text-xl">{company.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="cta-button bg-white text-primary hover:bg-white/90">
              Découvrir nos services
            </Link>
            <Link
              href="tel:+33562000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Appeler le SAV
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Sélection exigeante', description: 'Marques reconnues & garanties constructeur.', icon: '✓' },
            { title: 'SAV réactif', description: 'Diagnostic et réparation sur site.', icon: '⚙︎' },
            { title: 'Conseil personnalisé', description: 'Un interlocuteur unique pour chaque métier.', icon: '★' },
            { title: 'Livraison régionale', description: company.area, icon: '🚚' }
          ].map((item) => (
            <div key={item.title} className="card bg-white/10 p-5 shadow-none backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
