'use server';

import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { readPromotions, writePromotions } from '@/lib/promotions';
import type { Promotion } from '@/lib/types';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'asproservices';
const uploadsDir = path.join(process.cwd(), 'public', 'promotions');

function isAuthenticated() {
  return cookies().get('admin-auth')?.value === 'true';
}

function requireAuthentication() {
  if (!isAuthenticated()) {
    throw new Error('Accès non autorisé');
  }
}

export async function authenticate(_prevState: { success: boolean; message: string }, formData: FormData) {
  const password = formData.get('password');

  if (typeof password !== 'string' || password.length === 0) {
    return { success: false, message: 'Merci de saisir votre mot de passe.' };
  }

  if (password !== ADMIN_PASSWORD) {
    return { success: false, message: 'Mot de passe invalide.' };
  }

  cookies().set('admin-auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return { success: true, message: 'Connexion réussie.' };
}

export async function logout() {
  cookies().set('admin-auth', '', {
    path: '/',
    maxAge: 0
  });
  revalidatePath('/admin');
}

function isNonEmptyString(value: FormDataEntryValue | null): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function createPromotion(
  _prevState: { success: boolean; message: string },
  formData: FormData
) {
  requireAuthentication();

  const title = formData.get('title');
  const description = formData.get('description');
  const validUntil = formData.get('validUntil');
  const discount = formData.get('discount');
  const imageUrl = formData.get('imageUrl');
  const imageFile = formData.get('imageFile');

  if (
    !isNonEmptyString(title) ||
    !isNonEmptyString(description) ||
    !isNonEmptyString(validUntil) ||
    !isNonEmptyString(discount)
  ) {
    return { success: false, message: 'Tous les champs sont obligatoires.' };
  }

  let imagePath: string | null = null;

  if (imageFile instanceof File && imageFile.size > 0) {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const originalExt = (path.extname(imageFile.name) || '.jpg').toLowerCase();
    const safeName = path
      .parse(imageFile.name)
      .name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'promotion';
    const fileName = `${safeName}-${Date.now()}${originalExt}`;
    await fs.mkdir(uploadsDir, { recursive: true });
    await fs.writeFile(path.join(uploadsDir, fileName), buffer);
    imagePath = `/promotions/${fileName}`;
  }

  if (!imagePath) {
    if (!isNonEmptyString(imageUrl)) {
      return { success: false, message: 'Ajoutez une image (téléversement ou lien).' };
    }
    imagePath = imageUrl.trim();
  }

  const promotions = await readPromotions();
  const newPromotion: Promotion = {
    id: randomUUID(),
    title: title.trim(),
    description: description.trim(),
    validUntil: validUntil.trim(),
    discount: discount.trim(),
    image: imagePath
  };

  await writePromotions([newPromotion, ...promotions]);
  revalidatePath('/');
  revalidatePath('/admin');

  return { success: true, message: 'Promotion ajoutée avec succès.' };
}

export async function deletePromotion(formData: FormData) {
  requireAuthentication();

  const id = formData.get('id');

  if (typeof id !== 'string') {
    throw new Error('Identifiant promotion invalide');
  }

  const promotions = await readPromotions();
  const target = promotions.find((promo) => promo.id === id);
  const filtered = promotions.filter((promo) => promo.id !== id);

  if (!target) {
    return;
  }

  if (target.image.startsWith('/promotions/')) {
    try {
      await fs.unlink(path.join(process.cwd(), 'public', target.image));
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        console.error('Erreur lors de la suppression du fichier promotion:', error);
      }
    }
  }

  await writePromotions(filtered);
  revalidatePath('/');
  revalidatePath('/admin');
}
