'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/data/siteContent';

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => (previous + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="temoignages" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
          Avis clients
        </span>
        <p className="text-3xl font-semibold md:text-4xl">{testimonial.quote}</p>
        <div className="flex items-center gap-2">
          {Array.from({ length: testimonial.rating }).map((_, star) => (
            <span key={star} aria-hidden>★</span>
          ))}
        </div>
        <p className="text-sm text-white/70">
          {testimonial.author} — {testimonial.role}
        </p>
        <div className="flex gap-3">
          {testimonials.map((item, idx) => (
            <button
              key={item.author}
              onClick={() => setIndex(idx)}
              className={`h-2 w-8 rounded-full transition ${idx === index ? 'bg-white' : 'bg-white/30'}`}
              aria-label={`Afficher l'avis de ${item.author}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
