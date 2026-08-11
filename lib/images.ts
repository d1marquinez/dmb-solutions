// lib/images.ts
// Centraliza las imágenes reales (Unsplash) de todos los sitios.
// Se usan como URLs directas de images.unsplash.com, cuyo CDN ya optimiza
// (w, q, auto=format). Esto funciona en builds estáticos (output: 'export').

export type ImgRef = {
  src: string; // photo id de Unsplash
  alt: string;
};

// Helper: construye la URL optimizada
// host permite imágenes premium de plus.unsplash.com
export function u(photoId: string, w = 1200, q = 75, host: string = 'images.unsplash.com'): string {
  return `https://${host}/${photoId}?w=${w}&q=${q}&auto=format&fit=crop`;
}

// ---- Barber: Golden Scissors ----
export const barberImgs = {
  hero: {
    src: u('photo-1585747860715-2ba37e788b70', 1800, 80),
    alt: 'Interior de una barbería moderna con asientos y espejos',
  },
  // afeitado con toalla (foto de David)
  shave: {
    src: u('photo-1733995471058-3d6ff2013de3', 900, 75),
    alt: 'Afeitado de un cliente con toalla caliente en la barbería',
  },
  beard: {
    src: u('photo-1599351431202-1e0f0137899a', 900, 75),
    alt: 'Arreglo de barba en la barbería',
  },
  // corte infantil (foto de David)
  kids: {
    src: u('premium_photo-1677098576199-971c398f5403', 900, 75, 'plus.unsplash.com'),
    alt: 'Estilista cortando y secando el pelo a un cliente joven',
  },
};

// ---- Restaurant: La Tavola ----
// Platos con fotos específicas (paella + tiramisú verificados; otros comida realista)
export const restaurantImgs = {
  hero: {
    src: u('photo-1517248135467-4c7edcad34c4', 1800, 80),
    alt: 'Interior elegante de restaurante con mesas preparadas',
  },
  paella: {
    src: u('photo-1534080564583-6be75777b70a', 900, 75),
    alt: 'Paella de marisco en su paellera',
  },
  croquetas: {
    src: u('photo-1541529086526-db283c563270', 900, 75),
    alt: 'Croquetas doradas en un plato',
  },
  pulpo: {
    src: u('photo-1599084993091-1cb5c0721cc6', 900, 75),
    alt: 'Plato de pulpo a la brasa',
  },
  tiramisu: {
    src: u('photo-1571877227200-a0d98ea607e9', 900, 75),
    alt: 'Porción de tiramisú casero',
  },
};

// ---- Florist: Bloom & Stem ----
// Set renovado con fotos premium y limpias de floristería.
export const floristImgs = {
  hero: {
    src: u('photo-1567696153798-9111f9cd3d0d', 1800, 80),
    alt: 'Ramo de flores coloridas recién arreglado',
  },
  bouquet: {
    src: u('photo-1519378058457-4c29a0a2efac', 900, 75),
    alt: 'Ramo elegante de flores rosas presentado',
  },
  shop: {
    src: u('photo-1526318896980-cf78c088247c', 900, 75),
    alt: 'Florista arreglando flores en el estudio',
  },
  white: {
    src: u('photo-1508610048659-a06b669e3321', 900, 75),
    alt: 'Flores blancas y verdes frescas',
  },
};

// ---- Landing: DMB Solutions ----
export const landingImgs = {
  hero: {
    src: u('photo-1467232004584-a241de8bcf5d', 1800, 80),
    alt: 'Mesa de trabajo con portátil y tareas de diseño web',
  },
  work: {
    src: u('photo-1522542550221-31fd19575a2d', 900, 75),
    alt: 'Espacio de trabajo digital para crear webs',
  },
  hands: {
    src: u('photo-1486312338219-ce68d2c6f44d', 900, 75),
    alt: 'Manos escribiendo en un portátil',
  },
};
