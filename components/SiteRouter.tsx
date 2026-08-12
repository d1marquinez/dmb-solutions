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
import ChristyCV from './ChristyCV';

export default function SiteRouter() {
  const [site, setSite] = useState<string | null>(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    setSite(getSiteKey());
    setPath(window.location.pathname);
  }, []);

  if (!site) return <div style={{ minHeight: '100vh' }} />;

  const isCV = path === '/cv' || path === '/cv/';
  const isChristy = path === '/christy' || path === '/christy/';

  return (
    <LangProvider>
      {site === 'main' && isCV ? (
        <CV />
      ) : site === 'main' && isChristy ? (
        <ChristyCV />
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
