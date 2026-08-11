'use client';

// Restaurant — restaurant.gohost.one · La Tavola
// Rediseño profesional: hero con foto inmersiva del comedor, platos con imágenes, galería.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';
import Img from './Img';
import { restaurantImgs } from '@/lib/images';

const copy = {
  en: {
    brand: 'La Tavola',
    nav: [
      { href: '#menu', label: 'Menu' },
      { href: '#about', label: 'About' },
      { href: '#book', label: 'Book' },
    ],
    hero: {
      overline: 'Mediterranean restaurant',
      title: 'Mediterranean cooking, from the wood oven.',
      lead: 'Seasonal produce, recipes passed down for generations, and a daily menu that changes with the market.',
      cta: 'Reserve a table',
    },
    menu: {
      overline: 'Daily menu',
      title: 'Lunch menu',
      lead: 'Available Mon–Fri, 13:00–16:00.',
      dishes: [
        ['Wood-fired paella', 'Arroz bomba, seafood and sofrito, from the ember of the oven.', restaurantImgs.food1],
        ['Iberian ham croquettes', 'Creamy bechamel, cured ham, golden crust.', restaurantImgs.food2],
        ['Grilled octopus', 'Galician octopus, smoked paprika, olive oil and potato.', restaurantImgs.food3],
        ['Homemade tiramisu', 'Mascarpone, coffee and cocoa. Made each morning.', restaurantImgs.food1],
      ],
      cta: 'Reserve',
    },
    about: {
      overline: 'Our kitchen',
      title: 'Wood, fire, family',
      lead: 'A wood-fired oven, market-fresh ingredients, and recipes that have fed our family for generations.',
      mediaAlt: 'Interior del restaurante con mesas preparadas',
    },
    book: {
      overline: 'Reservations',
      title: 'Book a table',
      hours: 'Mon–Sun · 12:00–23:00',
      address: 'Plaza del Sol 3, Old Town',
      cta: 'Reserve now',
    },
    footer: 'La Tavola — Mediterranean restaurant.',
  },
  es: {
    brand: 'La Tavola',
    nav: [
      { href: '#menu', label: 'Menú' },
      { href: '#about', label: 'Nosotros' },
      { href: '#book', label: 'Reservar' },
    ],
    hero: {
      overline: 'Restaurante mediterráneo',
      title: 'Cocina mediterránea, desde el horno de leña.',
      lead: 'Producto de temporada, recetas heredadas y un menú diario que cambia con el mercado.',
      cta: 'Reserva mesa',
    },
    menu: {
      overline: 'Menú diario',
      title: 'Menú del día',
      lead: 'Disponible Lun–Vie, 13:00–16:00.',
      dishes: [
        ['Paella de leña', 'Arroz bomba, marisco y sofrito, desde la brasa del horno.', restaurantImgs.food1],
        ['Croquetas de jamón', 'Bechamel cremosa, jamón curado y crujiente dorado.', restaurantImgs.food2],
        ['Pulpo a la brasa', 'Pulpo gallego, pimentón ahumado, aceite de oliva y patata.', restaurantImgs.food3],
        ['Tiramisú casero', 'Mascarpone, café y cacao. Hecho cada mañana.', restaurantImgs.food1],
      ],
      cta: 'Reservar',
    },
    about: {
      overline: 'Nuestra cocina',
      title: 'Leña, fuego, familia',
      lead: 'Un horno de leña, ingredientes frescos del mercado y recetas que han alimentado a nuestra familia durante generaciones.',
      mediaAlt: 'Interior del restaurante con mesas preparadas',
    },
    book: {
      overline: 'Reservas',
      title: 'Reserva mesa',
      hours: 'Lun–Dom · 12:00–23:00',
      address: 'Plaza del Sol 3, Casco Antiguo',
      cta: 'Reserva ahora',
    },
    footer: 'La Tavola — restaurante mediterráneo.',
  },
};

export default function Restaurant() {
  const { lang } = useApp();
  const t = copy[lang];

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      {/* Hero con foto del comedor */}
      <section className="hero-photo">
        <Img src={restaurantImgs.hero.src} alt={restaurantImgs.hero.alt} className="hero-bg" priority />
        <div className="container hero-inner">
          <Reveal>
            <p className="overline" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.hero.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#book">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menú con imágenes de platos */}
      <section className="section" id="menu">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.menu.overline}</p>
            <h2 className="section-title">{t.menu.title}</h2>
            <p className="muted">{t.menu.lead}</p>
          </Reveal>

          <div className="gallery" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {(t.menu.dishes as [string, string, { src: string; alt: string }][]).map(([name, desc, img], i) => (
              <Reveal key={name} delay={i * 70}>
                <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Img src={img.src} alt={name} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <h3 style={{ marginBottom: 6 }}>{name}</h3>
                    <p style={{ margin: 0, color: 'var(--text-2)', fontSize: 14 }}>{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About con imagen + texto */}
      <section className="section" id="about" style={{ background: 'var(--panel)' }}>
        <div className="container">
          <div className="split">
            <div className="media" style={{ aspectRatio: '4/3' }}>
              <Img src={restaurantImgs.food2.src} alt={t.about.mediaAlt} />
            </div>
            <div className="copy">
              <Reveal>
                <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.about.overline}</p>
                <h2 className="section-title">{t.about.title}</h2>
                <p className="muted">{t.about.lead}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reservas */}
      <section className="section" id="book">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.book.overline}</p>
            <h2 className="section-title" style={{ margin: '0 auto 12px' }}>{t.book.title}</h2>
            <div className="stacked" style={{ margin: '16px auto', maxWidth: 300 }}>
              <p style={{ fontWeight: 600, margin: 0 }}>{t.book.hours}</p>
              <p className="muted" style={{ margin: 0 }}>{t.book.address}</p>
            </div>
            <a className="btn" href="#">{t.book.cta}</a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container">{t.footer}</div>
      </footer>
    </>
  );
}
