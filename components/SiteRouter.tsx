'use client';

// SiteRouter — decide qué sitio renderizar según el subdominio actual.
// Envuelve todo en LangProvider para que cada subdominio comparta el idioma.

import { useEffect, useState } from 'react';
import { getSiteKey } from '@/lib/i18n';
import { LangProvider } from './LangContext';
import Landing from './Landing';
import Barber from './Barber';
import Restaurant from './Restaurant';
import Florist from './Florist';

export default function SiteRouter() {
  const [site, setSite] = useState<string | null>(null);

  useEffect(() => {
    setSite(getSiteKey());
  }, []);

  if (!site) return <div style={{ minHeight: '100vh' }} />;

  return (
    <LangProvider>
      {site === 'barber' ? (
        <Barber />
      ) : site === 'restaurant' ? (
        <Restaurant />
      ) : site === 'florist' ? (
        <Florist />
      ) : (
        <Landing />
      )}
    </LangProvider>
  );
}
