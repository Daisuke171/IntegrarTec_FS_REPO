import { create } from "zustand";

interface Digimon {
  name: string;
  img: string;
  level: string;
}

interface DigimonState {
  digimons: Digimon[];
  loading: boolean;
  error: string | null;
  fetchDigimons: () => Promise<void>;
}

export const useDigimonStore = create<DigimonState>((set) => ({
  digimons: [],
  loading: false,
  error: null,
  fetchDigimons: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://digimon-api.vercel.app/api/digimon");
      const data: Digimon[] = await res.json();
      set({ digimons: data, loading: false });
    } catch {
      set({ error: "Error al cargar Digimon", loading: false });
    }
  },
}));
