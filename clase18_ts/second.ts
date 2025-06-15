type CacheEntry<T> = {
  value: T;
  expiresAt: number;
};

class GenericCache<T> {
  private store: Map<string, CacheEntry<T>> = new Map();

  // Establecer un valor con un TTL en milisegundos
  set(key: string, value: T, ttl: number): void {
    const expiresAt = Date.now() + ttl;
    this.store.set(key, { value, expiresAt });
  }

  // Obtener el valor si aún no expiró
  get(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }

    return entry.value;
  }

  // Limpiar las entradas expiradas
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now > entry.expiresAt) {
        this.store.delete(key);
      }
    }
  }
}
