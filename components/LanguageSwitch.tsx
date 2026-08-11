'use client';

// LanguageSwitch: botón EN/ES visible en el header de todos los sitios.
import { useLangCtx } from './LangContext';

export default function LanguageSwitch() {
  const { lang, toggle } = useLangCtx();
  return (
    <button
      onClick={toggle}
      aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
      title={lang === 'en' ? 'ES' : 'EN'}
      className="lang-switch"
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
