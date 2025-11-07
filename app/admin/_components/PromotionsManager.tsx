'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { Promotion } from '@/lib/types';
import { createPromotion, deletePromotion, logout } from '../actions';

const initialState = { success: false, message: '' };

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="cta-button justify-center" disabled={pending}>
      {pending ? 'Enregistrement…' : label}
    </button>
  );
}

function DeleteSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
      disabled={pending}
    >
      {pending ? 'Suppression…' : 'Supprimer'}
    </button>
  );
}

function DeleteForm({ id }: { id: string }) {
  return (
    <form action={deletePromotion} className="inline">
      <input type="hidden" name="id" value={id} />
      <DeleteSubmitButton />
    </form>
  );
}

export function PromotionsManager({ promotions }: { promotions: Promotion[] }) {
  const [state, formAction] = useFormState(createPromotion, initialState);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Gestion des promotions</h1>
          <p className="text-sm text-slate-500">
            Ajoutez, mettez à jour ou supprimez les offres mises en avant sur la page d’accueil.
          </p>
        </div>
        <form action={logout}>
          <button type="submit" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
            Se déconnecter
          </button>
        </form>
      </div>
      <form action={formAction} className="card bg-white" encType="multipart/form-data">
        <h2 className="text-xl font-semibold text-slate-900">Ajouter une promotion</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label htmlFor="title" className="text-sm font-semibold text-slate-700">
              Titre de l’offre
            </label>
            <input id="title" name="title" type="text" placeholder="Ex : Pack outillage électricien" className="mt-2 w-full" required />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="discount" className="text-sm font-semibold text-slate-700">
              Avantage / remise
            </label>
            <input id="discount" name="discount" type="text" placeholder="Ex : -20%" className="mt-2 w-full" required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description" className="text-sm font-semibold text-slate-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Détails de l’offre, contenu du pack, services inclus…"
              className="mt-2 w-full"
              rows={3}
              required
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="validUntil" className="text-sm font-semibold text-slate-700">
              Valable jusqu’au
            </label>
            <input id="validUntil" name="validUntil" type="date" className="mt-2 w-full" required />
          </div>
          <div>
            <label htmlFor="imageFile" className="text-sm font-semibold text-slate-700">
              Image de l’offre (téléversement)
            </label>
            <input
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/*"
              className="mt-2 w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:border-primary"
            />
            <p className="mt-2 text-xs text-slate-400">Formats JPG/PNG/WebP, 2 Mo max. Optionnel si vous fournissez un lien.</p>
          </div>
          <div>
            <label htmlFor="imageUrl" className="text-sm font-semibold text-slate-700">
              URL image (optionnel)
            </label>
            <input id="imageUrl" name="imageUrl" type="url" placeholder="https://…" className="mt-2 w-full" />
            <p className="mt-2 text-xs text-slate-400">À renseigner seulement si vous n’uploadez pas d’image.</p>
          </div>
        </div>
        {state.message && (
          <p className={`mt-4 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>{state.message}</p>
        )}
        <div className="mt-6 flex justify-end">
          <SubmitButton label="Ajouter la promotion" />
        </div>
      </form>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Promotions en cours</h2>
        {promotions.length === 0 ? (
          <p className="text-sm text-slate-500">
            Aucune promotion enregistrée. Ajoutez votre première offre via le formulaire ci-dessus.
          </p>
        ) : (
          <div className="grid gap-4">
            {promotions.map((promotion) => (
              <div key={promotion.id} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{promotion.discount}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{promotion.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{promotion.description}</p>
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    Valable jusqu’au {new Date(promotion.validUntil).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3 md:items-end">
                  <a href={promotion.image} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                    Ouvrir l’image
                  </a>
                  <DeleteForm id={promotion.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
