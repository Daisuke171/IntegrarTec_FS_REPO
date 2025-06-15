// Construye un sistema de cache genérico que pueda almacenar 
// cualquier tipo de dato con TTL (time to live). Utiliza una clase con métodos set, get y cleanup.

interface CacheEntry<T> {
    value: T;
    expiresAt: number;
}

class Timer<T> implements CacheEntry<T> {
    public value: T;
    public expiresAt: number;

    constructor(value: T, ttl: number) {
        this.value = value;
        this.expiresAt = Date.now() + ttl;
    }

    public isExpired(): boolean {
        return Date.now() > this.expiresAt;
    }
}

class GenericCache<T> {
    private store = new Map<string, Timer<T>>();

    set(key: string, value: T, ttl: number): void {
        const entry = new Timer<T>(value, ttl);
        this.store.set(key, entry);
    }

    get(key: string): T | undefined {
        const entry = this.store.get(key);
        if (!entry) return undefined;

        if (entry.isExpired()) {
            this.store.delete(key);
            return undefined;
        }

        return entry.value;
    }

    cleanup(): void {
        for (const [key, entry] of this.store.entries()) {
            if (entry.isExpired()) {
                this.store.delete(key);
            }
        }
    }
}

const cache1 = new GenericCache<string>();
const cache2 = new GenericCache<boolean>();
cache1.set("msj", "juejue", 2000);
cache2.set("bool", true, 8000);

setTimeout(() => {
    console.log(cache1.get("msj")); 
    console.log(cache2.get("bool")); 
    cache1.cleanup(); 
    console.log(cache1.get("msj")); 
    console.log(cache2.get("bool")); 
}, 4000);

