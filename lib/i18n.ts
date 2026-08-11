// lib/i18n.ts
// Internacionalización: detección automática de idioma + switch manual persistido.
'use client';

import { useEffect, useState } from 'react';

export type Lang = 'en' | 'es';

export const LANG_KEY = 'dmb-lang';

// Detecta el idioma inicial del dispositivo (o el guardado).
export function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('es') ? 'es' : 'en';
}

// Persiste la elección del usuario.
export function setLang(lang: Lang) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
}

// Hook que expone el idioma actual y un setter que persiste.
export function useLang() {
  const [lang, setLangState] = useState<Lang>('en');
  useEffect(() => {
    setLangState(getInitialLang());
  }, []);
  const change = (next: Lang) => {
    setLang(next);
    setLangState(next);
  };
  return { lang, setLang: change };
}

// Obtiene el subdominio actual del header Host / hostname.
export function getSiteKey(): string {
  if (typeof window === 'undefined') return 'main';
  const host = window.location.hostname.replace(/^www\./, '');
  const first = host.split('.')[0] || 'main';
  return first.replace(/[^a-z0-9-]/gi, '') || 'main';
}
