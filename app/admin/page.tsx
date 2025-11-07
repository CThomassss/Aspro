import { cookies } from 'next/headers';
import { readPromotions } from '@/lib/promotions';
import { PromotionsManager } from './_components/PromotionsManager';
import { LoginForm } from './_components/LoginForm';

export default async function AdminPage() {
  const isAuthenticated = cookies().get('admin-auth')?.value === 'true';
  const promotions = await readPromotions();

  return (
    <main className="min-h-screen bg-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-4">
        {isAuthenticated ? <PromotionsManager promotions={promotions} /> : <LoginForm />}
      </div>
    </main>
  );
}
