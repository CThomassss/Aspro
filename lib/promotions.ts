import { promises as fs } from 'fs';
import path from 'path';
import type { Promotion } from './types';

const dataPath = path.join(process.cwd(), 'data', 'promotions.json');

export async function readPromotions(): Promise<Promotion[]> {
  try {
    const file = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(file) as Promotion[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function writePromotions(promotions: Promotion[]): Promise<void> {
  const json = JSON.stringify(promotions, null, 2);
  await fs.writeFile(dataPath, `${json}\n`, 'utf-8');
}
