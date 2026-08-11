// lib/images.ts
// Centraliza las imágenes reales (Unsplash) de todos los sitios.
// Se usan como URLs directas de images.unsplash.com, cuyo CDN ya optimiza
// (w, q, auto=format). Esto funciona en builds estáticos (output: 'export').

export type ImgRef = {
  src: string; // photo id de Unsplash
  alt: string;
};

// Helper: construye la URL optimizada
export function u(photoId: string, w = 1200, q = 75): string {
  return `https://images.unsplash.com/${photoId}?w=${w}&q=${q}&auto=format&fit=crop`;
}

// ---- Barber: Golden Scissors ----
export const barberImgs = {
  hero: {
    src: u('photo-1585747860715-2ba37e788b70', 1800, 80),
    alt: 'Interior de una barbería moderna con asientos y espejos',
  },
  shave: {
    src: u('photo-1503951914875-452162b0f3f1', 900, 75),
    alt: 'Barbero afeitando a un cliente con navaja y toalla',
  },
  beard: {
    src: u('photo-1599351431202-1e0f0137899a', 900, 75),
    alt: 'Arreglo de barba en la barbería',
  },
  tools: {
    src: u('photo-1605497788044-5a32c7078486', 900, 75),
    alt: 'Herramientas y tijeras de barbero sobre la encimera',
  },
};

// ---- Restaurant: La Tavola ----
export const restaurantImgs = {
  hero: {
    src: u('photo-1517248135467-4c7edcad34c4', 1800, 80),
    alt: 'Interior elegante de restaurante con mesas preparadas',
  },
  food1: {
    src: u('photo-1414235077428-338989a2e8c0', 900, 75),
    alt: 'Plato gourmet recién emplatado',
  },
  food2: {
    src: u('photo-1552566626-52f8b828add9', 900, 75),
    alt: 'Detalle de un plato del menú del día',
  },
  food3: {
    src: u('photo-1544148103-0773bf10d330', 900, 75),
    alt: 'Presentación de plato en el comedor',
  },
};

// ---- Florist: Bloom & Stem ----
export const floristImgs = {
  hero: {
    src: u('photo-1463320726281-696a485928c7', 1800, 80),
    alt: 'Ramo de flores frescas coloridas',
  },
  bouquet: {
    src: u('photo-1470509037663-253afd7f0f51', 900, 75),
    alt: 'Ramos de flores en una floristería',
  },
  pink: {
    src: u('photo-1447175008436-054170c2e979', 900, 75),
    alt: 'Flores rosas y blancas en un ramo',
  },
  field: {
    src: u('photo-1490750967868-88aa4486c946', 900, 75),
    alt: 'Campo de flores de colores',
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
