'use client';

// LangContext — provee idioma (EN/ES) y tema (dark/light) a todos los sitios.
// Dark es el modo por defecto. La elección se persiste en localStorage.

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { getInitialLang, setLang as persistLang, type Lang } from '@/lib/i18n';

export type Theme = 'dark' | 'light';
export const THEME_KEY = 'dmb-theme';

interface AppCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Ctx = createContext<AppCtx>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  theme: 'dark', // dark por defecto
  toggleTheme: () => {},
});

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    /* ignore */
  }
  return 'dark'; // por defecto oscuro
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    setLangState(getInitialLang());
    setThemeState(getInitialTheme());
  }, []);

  // Aplica el atributo data-theme al <html> y persiste
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setLang = (l: Lang) => {
    persistLang(l);
    setLangState(l);
  };
  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');
  const toggleTheme = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Ctx.Provider value={{ lang, setLang, toggleLang, theme, toggleTheme }}>
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  return useContext(Ctx);
}
