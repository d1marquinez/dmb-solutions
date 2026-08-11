'use client';

// LanguageSwitch: botón EN/ES visible en el header de todos los sitios.
import { useApp } from './LangContext';

export default function LanguageSwitch() {
  const { lang, toggleLang } = useApp();
  return (
    <button
      onClick={toggleLang}
      className="toggle-btn"
      aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
      title={lang === 'en' ? 'ES' : 'EN'}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
