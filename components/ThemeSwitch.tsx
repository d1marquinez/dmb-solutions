'use client';

// ThemeSwitch — toggle claro/oscuro. Dark por defecto.
import { useApp } from './LangContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useApp();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggleTheme}
      className="toggle-btn"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      style={{ fontSize: 15 }}
    >
      {isDark ? '☾' : '☀'}
    </button>
  );
}
