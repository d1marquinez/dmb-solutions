'use client';

// LangContext: provee el idioma actual y la función para cambiarlo a todos los
// sitios. El LanguageSwitch lo consume; cada sitio lee lang del contexto.

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { getInitialLang, setLang as persistLang, type Lang } from '@/lib/i18n';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  const setLang = (l: Lang) => {
    persistLang(l);
    setLangState(l);
  };
  const toggle = () => setLang(lang === 'en' ? 'es' : 'en');

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>;
}

export function useLangCtx() {
  return useContext(Ctx);
}
