// lib/site-registry.ts
// Registro central de sitios (multi-host). Cada subdominio mapea a un sitio.

export type SiteId = 'main' | 'barber' | 'restaurant' | 'florist';

export interface SiteInfo {
  id: SiteId;
  host: string; // subdominio completo
  slug: string; // subdominio corto (primer label)
  title: string; // nombre del sitio
  tagline: { en: string; es: string }; // breve descripción, bilingüe
}

export const SITES: SiteInfo[] = [
  {
    id: 'barber',
    host: 'barber.gohost.one',
    slug: 'barber',
    title: 'Golden Scissors',
    tagline: {
      en: 'A modern barbershop with online booking, services and gallery.',
      es: 'Una barbería moderna con reservas online, servicios y galería.',
    },
  },
  {
    id: 'restaurant',
    host: 'restaurant.gohost.one',
    slug: 'restaurant',
    title: "La Tavola",
    tagline: {
      en: 'A Mediterranean restaurant with a daily menu and table reservations.',
      es: 'Un restaurante mediterráneo con menú del día y reservas de mesa.',
    },
  },
  {
    id: 'florist',
    host: 'florist.gohost.one',
    slug: 'florist',
    title: 'Bloom & Stem',
    tagline: {
      en: 'A flower shop with same-day delivery and bouquets for every moment.',
      es: 'Una floristería con entrega el mismo día y ramos para cada momento.',
    },
  },
];

// Resuelve un site key (de getSiteKey) a una SiteInfo. main por defecto.
export function resolveSite(siteKey: string): SiteInfo {
  const found = SITES.find(
    (s) => s.slug === siteKey || s.host === siteKey
  );
  if (found) return found;
  return {
    id: 'main',
    host: 'main.gohost.one',
    slug: 'main',
    title: 'DMB Solutions',
    tagline: {
      en: 'Websites and hosting for local businesses.',
      es: 'Creamos y alojamos webs para negocios locales.',
    },
  };
}
