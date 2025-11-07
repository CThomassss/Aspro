'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../actions';

const initialState = { success: false, message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="cta-button w-full justify-center" disabled={pending}>
      {pending ? 'Connexion…' : 'Se connecter'}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <form action={formAction} className="card max-w-sm mx-auto bg-white">
      <h1 className="text-2xl font-semibold text-slate-900">Espace administrateur</h1>
      <p className="mt-2 text-sm text-slate-500">Saisissez le mot de passe fourni par AS PRO SERVICES pour gérer les promotions.</p>
      <label className="mt-6 block text-sm font-semibold text-slate-700" htmlFor="password">
        Mot de passe
      </label>
      <input id="password" name="password" type="password" required placeholder="Mot de passe" className="mt-2 w-full" />
      {state.message && (
        <p className={`mt-4 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>{state.message}</p>
      )}
      <div className="mt-6">
        <SubmitButton />
      </div>
    </form>
  );
}
