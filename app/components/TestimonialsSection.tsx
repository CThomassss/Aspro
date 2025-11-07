'use client';

import { useEffect, useState } from 'react';
import { company } from '@/data/siteContent';

const AUTO_PLAY_INTERVAL = 6000;

export function TestimonialsSection() {
  const testimonials = company.testimonials;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return undefined;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => setCurrent(index);

  return (
    <section id="temoignages" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-100" />
      <div className="absolute inset-x-0 top-1/3 -z-10 h-[420px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Avis clients</p>
          <h2 className="section-title">Ils font confiance à AS PRO SERVICES</h2>
          <p className="section-subtitle mx-auto mt-4">
            Extraits d’avis Google et retours clients, parfaits pour rassurer vos prospects sur la qualité de votre accompagnement.
          </p>
        </div>
        <div className="mt-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/60 p-2 shadow-soft backdrop-blur">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
              aria-live="polite"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="min-w-full px-4 pb-4 pt-6">
                  <article className="relative h-full rounded-[28px] border border-white bg-gradient-to-br from-white via-slate-50 to-white shadow-soft-lg">
                    <div className="absolute -left-16 top-6 hidden h-32 w-32 rounded-full bg-primary/15 blur-3xl md:block" aria-hidden />
                    <div className="absolute -right-10 -top-12 hidden h-24 w-24 rounded-full bg-accent/20 blur-3xl md:block" aria-hidden />
                    <div className="relative flex h-full flex-col gap-5 px-8 py-10 text-left">
                      <div className="flex items-center gap-3 text-accent">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-2xl font-serif">“</span>
                        <div className="flex items-center gap-1 text-sm font-semibold text-accent">
                          {Array.from({ length: testimonial.rating }).map((_, index) => (
                            <span key={`star-${testimonial.author}-${index}`} aria-hidden>
                              ★
                            </span>
                          ))}
                          <span className="ml-2 text-xs uppercase tracking-[0.3em] text-accent/80">Avis vérifié</span>
                        </div>
                      </div>
                      <blockquote className="text-lg leading-relaxed text-slate-700">
                        “{testimonial.text}”
                      </blockquote>
                      <div className="mt-auto">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{testimonial.author}</p>
                        <p className="text-xs text-slate-500">Client professionnel</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 w-10 rounded-full transition-all duration-300 ${
                  current === index ? 'w-12 bg-primary' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Afficher le témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
