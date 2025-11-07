import Link from 'next/link';
import { company } from '@/data/siteContent';
import { PhoneIcon } from './Icons';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(142,174,210,0.1),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Un contact direct et rapide</h2>
            <p className="text-lg text-white/70">
              Pour toute demande de devis, disponibilité produit ou visite sur vos chantiers, contactez-moi directement par téléphone ou
              email. Je me déplace dans vos ateliers principalement en Occitanie.
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-soft">
                <p className="text-sm font-semibold uppercase text-white/60">Téléphone</p>
                <Link href={`tel:${company.contact.phone}`} className="mt-2 inline-flex items-center text-xl font-semibold text-white hover:text-accent">
                  {company.contact.displayPhone}
                </Link>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-soft">
                <p className="text-sm font-semibold uppercase text-white/60">Email</p>
                <Link href={`mailto:${company.contact.email}`} className="mt-2 inline-flex items-center text-lg text-white hover:text-accent">
                  {company.contact.email}
                </Link>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-soft">
                <p className="text-sm font-semibold uppercase text-white/60">Adresse</p>
                <p className="mt-2 text-white/80">{company.contact.address}</p>
                <p className="text-xs text-white/60">{company.contact.hours}</p>
              </div>
            </div>
            <Link
              href={`tel:${company.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-accent/90"
            >
              <PhoneIcon className="h-5 w-5" />
              Appeler maintenant
            </Link>
          </div>
          <div className="flex h-full items-center">
            <iframe
              title="Carte AS PRO SERVICES"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.3112860246385!2d0.2419!3d43.7593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12abb5dc5517da8f%3A0x86ad9edc0dbe11b9!2sNougaroulet!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="500"
              loading="lazy"
              className="w-full rounded-3xl border-0 shadow-xl"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
