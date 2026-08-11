// lib/locale.ts
// Detección de moneda según la ubicación del dispositivo.
'use client';

export type Currency = 'EUR' | 'GBP';

// Determina la moneda según el idioma/locale del navegador.
// España -> EUR · UK -> GBP · por defecto EUR.
export function getCurrency(lang: string): Currency {
  const nav = (lang || 'en').toLowerCase();
  if (nav.startsWith('es')) return 'EUR';
  if (nav.startsWith('en-gb') || nav === 'en') {
    // en-gb -> UK; 'en' con timezone UK -> GBP
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.startsWith('Europe/London')) return 'GBP';
    } catch {
      /* fallback */
    }
  }
  return 'EUR';
}

// Formatea una cantidad en la moneda dada.
export function formatPrice(amount: number, currency: Currency): string {
  return new Intl.NumberFormat(currency === 'EUR' ? 'es-ES' : 'en-GB', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
