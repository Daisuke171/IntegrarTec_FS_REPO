import { promises as fs } from 'fs';

export async function readData<T = any>(filePath: string): Promise<T> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');

    if (!data.trim()) {
      // Si el archivo existe pero está vacío, devolvés un array u objeto vacío según lo esperado
      return [] as T;
    }

    return JSON.parse(data) as T;
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code?: string }).code === 'ENOENT'
    ) {
      return [] as T;
    }
    throw error;
  }
}

export async function writeData<T = any>(
  filePath: string,
  data: T,
): Promise<void> {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
