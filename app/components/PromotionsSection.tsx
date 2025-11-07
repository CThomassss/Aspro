'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import promotionsData from '@/data/promotions.json';
import type { Promotion } from '@/lib/types';

const promotions = promotionsData as Promotion[];

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return 'Date à préciser';
  return parsed.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
}

const CHUNK_SIZE = 2;

function chunkPromotions(items: Promotion[]): Promotion[][] {
  if (items.length === 0) {
    return [];
  }
  if (items.length <= CHUNK_SIZE) {
    return [items];
  }
  const chunks: Promotion[][] = [];
  for (let i = 0; i < items.length; i += CHUNK_SIZE) {
    chunks.push(items.slice(i, i + CHUNK_SIZE));
  }
  return chunks;
}

export function PromotionsSection() {
  const validPromotions = useMemo(
    () =>
      promotions.filter(
        (promotion) =>
          Boolean(promotion.title?.trim()) &&
          Boolean(promotion.description?.trim()) &&
          Boolean(promotion.validUntil?.trim())
      ),
    []
  );
  const slides = useMemo(() => chunkPromotions(validPromotions), [validPromotions]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isCarousel = slides.length > 1;

  useEffect(() => {
    if (slides.length === 0) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => (prev >= slides.length ? 0 : prev));
  }, [slides.length]);

  const goTo = (direction: 'prev' | 'next') => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
      return prev === slides.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="promotions" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,174,210,0.1),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Offres spéciales</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Promotions & offres du moment</h2>
          </div>
          {isCarousel && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo('prev')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white shadow-lg transition hover:scale-110 hover:border-accent hover:bg-accent hover:text-slate-900"
                aria-label="Voir les offres précédentes"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => goTo('next')}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white shadow-lg transition hover:scale-110 hover:border-accent hover:bg-accent hover:text-slate-900"
                aria-label="Voir les offres suivantes"
              >
                ›
              </button>
            </div>
          )}
        </div>
        {validPromotions.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-sm text-white/70">
            Aucune promotion n’est disponible pour le moment. Revenez bientôt ou contactez-nous pour préparer votre prochaine opération.
          </div>
        ) : slides.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-sm text-white/70">
            Promotions indisponibles pour le moment. Contactez-nous pour recevoir nos prochaines offres.
          </div>
        ) : !isCarousel ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {slides[0].map((promotion) => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((group, slideIndex) => (
                  <div key={`slide-${slideIndex}`} className="grid w-full flex-shrink-0 gap-8 md:grid-cols-2">
                    {group.map((promotion) => (
                      <PromotionCard key={promotion.id} promotion={promotion} />
                    ))}
                    {group.length < CHUNK_SIZE && <div className="hidden md:block" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-10 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-12 bg-accent' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Afficher les promotions ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PromotionCard({ promotion }: { promotion: Promotion }) {
  const hasImage = Boolean(promotion.image);
  const discountLabel = promotion.discount?.trim() || 'Offre spéciale';

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {hasImage ? (
          <Image
            src={promotion.image}
            alt={promotion.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-slate-900/60 to-accent/30" aria-hidden />
        )}
        <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-lg">
          {discountLabel}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-8 text-white">
        <h3 className="text-2xl font-semibold leading-tight">{promotion.title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{promotion.description}</p>
        <p className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Offre valable jusqu'au {formatDate(promotion.validUntil)}
        </p>
      </div>
    </article>
  );
}
