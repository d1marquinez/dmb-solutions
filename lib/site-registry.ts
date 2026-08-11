// lib/site-registry.ts
// Registro central de sitios (multi-host). Cada subdominio mapea a un sitio.
// Se usa para decidir qué site renderizar y, en el landing, para el portafolio.

export type SiteId = 'main' | 'barber' | 'restaurant' | 'florist';

export interface SiteInfo {
  id: SiteId;
  host: string; // subdominio completo
  slug: string; // subdominio corto (primer label)
  title: string; // título cuando está colgado (landing)
  description: string;
}

export const SITES: SiteInfo[] = [
  {
    id: 'barber',
    host: 'barber.gohost.one',
    slug: 'barber',
    title: 'Golden Scissors — Barber Shop',
    description: 'Modern barbershop with bookings, services and gallery.',
  },
  {
    id: 'restaurant',
    host: 'restaurant.gohost.one',
    slug: 'restaurant',
    title: 'La Tavola — Mediterranean Restaurant',
    description: 'Menu of the day, reservations and authentic Mediterranean cuisine.',
  },
  {
    id: 'florist',
    host: 'florist.gohost.one',
    slug: 'florist',
    title: 'Bloom & Stem — Flower Shop',
    description: 'Same-day flower delivery, bouquets for every occasion.',
  },
];

// Resuelve un site key (de getSiteKey) a una SiteInfo. main por defecto.
export function resolveSite(siteKey: string): SiteInfo {
  const found = SITES.find(
    (s) => s.slug === siteKey || s.host === siteKey,
  );
  if (found) return found;
  return {
    id: 'main',
    host: 'main.gohost.one',
    slug: 'main',
    title: 'DMB Solutions',
    description: 'We build and host websites for local businesses.',
  };
}
