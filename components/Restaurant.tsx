'use client';

// Restaurant — restaurant.gohost.one · La Tavola
// Web de ejemplo de restaurante. Tema moderno, dark por defecto.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';

const copy = {
  en: {
    brand: 'La Tavola',
    nav: [
      { href: '#menu', label: 'Menu' },
      { href: '#about', label: 'About' },
      { href: '#book', label: 'Book' },
    ],
    hero: {
      title: 'Mediterranean cooking, from the wood oven.',
      lead: 'Seasonal produce, recipes passed down for generations, and a daily menu that changes with the market.',
      cta: 'Reserve a table',
    },
    menu: {
      overline: 'Daily menu',
      title: 'Lunch menu',
      lead: 'Available Mon–Fri, 13:00–16:00.',
      dishes: [
        'Wood-fired paella',
        'Iberian ham croquettes',
        'Grilled octopus',
        'Homemade tiramisu',
      ],
    },
    about: {
      overline: 'Our kitchen',
      title: 'Wood, fire, family',
      lead: 'A wood-fired oven, market-fresh ingredients, and recipes that have fed our family for generations.',
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
      title: 'Cocina mediterránea, desde el horno de leña.',
      lead: 'Producto de temporada, recetas heredadas de generación en generación y un menú diario que cambia con el mercado.',
      cta: 'Reserva mesa',
    },
    menu: {
      overline: 'Menú diario',
      title: 'Menú del día',
      lead: 'Disponible Lun–Vie, 13:00–16:00.',
      dishes: [
        'Paella al horno de leña',
        'Croquetas de jamón ibérico',
        'Pulpo a la brasa',
        'Tiramisú casero',
      ],
    },
    about: {
      overline: 'Nuestra cocina',
      title: 'Leña, fuego, familia',
      lead: 'Un horno de leña, ingredientes frescos del mercado y recetas que han alimentado a nuestra familia durante generaciones.',
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

      <section className="hero">
        <div className="hero-inner container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.menu.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#book">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.menu.overline}</p>
            <h2 className="section-title">{t.menu.title}</h2>
            <p className="muted">{t.menu.lead}</p>
          </Reveal>
          <div className="cards">
            {t.menu.dishes.map((dish, i) => (
              <Reveal key={dish} delay={i * 80}>
                <div className="card">
                  <h3 style={{ margin: 0 }}>{dish}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ background: 'var(--panel)' }}>
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.about.overline}</p>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="muted" style={{ maxWidth: 560 }}>{t.about.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="book">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.book.overline}</p>
            <h2 className="section-title">{t.book.title}</h2>
            <div className="stacked" style={{ margin: '16px 0' }}>
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
