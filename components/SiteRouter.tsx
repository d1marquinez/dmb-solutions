'use client';

// SiteRouter — decide el sitio por subdominio y la ruta /cv en main.
import { useEffect, useState } from 'react';
import { getSiteKey } from '@/lib/i18n';
import { LangProvider } from './LangContext';
import Landing from './Landing';
import Barber from './Barber';
import Restaurant from './Restaurant';
import Florist from './Florist';
import CV from './CV';

export default function SiteRouter() {
  const [site, setSite] = useState<string | null>(null);
  const [isCV, setIsCV] = useState(false);

  useEffect(() => {
    setSite(getSiteKey());
    setIsCV(window.location.pathname === '/cv' || window.location.pathname === '/cv/');
  }, []);

  if (!site) return <div style={{ minHeight: '100vh' }} />;

  return (
    <LangProvider>
      {site === 'main' && isCV ? (
        <CV />
      ) : site === 'barber' ? (
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
