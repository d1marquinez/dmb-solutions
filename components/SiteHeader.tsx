'use client';

// SiteHeader — header sticky compartido por todos los sitios.
// Logo + navegación + LanguageSwitch + ThemeSwitch.

import LanguageSwitch from './LanguageSwitch';
import ThemeSwitch from './ThemeSwitch';

interface NavLink {
  href: string;
  label: string;
}

export default function SiteHeader({
  brand,
  links,
}: {
  brand: string;
  links: NavLink[];
}) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <strong style={{ fontSize: 18, letterSpacing: '-0.01em' }}>{brand}</strong>
        <nav>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
