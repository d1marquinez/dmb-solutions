'use client';

// Restaurant — restaurant.gohost.one · La Tavola Mediterranean restaurant

import { useLangCtx } from './LangContext';
import LanguageSwitch from './LanguageSwitch';

const copy = {
  en: {
    hero: 'La Tavola',
    sub: 'Authentic Mediterranean cuisine. Lunch menu, dinner and wine pairing.',
    reserve: 'Reserve a table',
    menu: 'Menu of the day',
    menuNote: 'Available Mon–Fri, 13:00–16:00',
    dishes: 'Signature dishes',
    about: 'Our kitchen',
    aboutText:
      'Seasonal produce, wood-fired oven, and recipes passed down for generations.',
    hours: 'Opening hours',
    hoursValue: 'Mon–Sun · 12:00–23:00',
    contact: 'Find us',
    contactValue: 'Plaza del Sol 3, Old Town',
    footer: 'La Tavola · Mediterranean restaurant',
  },
  es: {
    hero: 'La Tavola',
    sub: 'Cocina mediterránea auténtica. Menú del día, cenas y maridaje de vinos.',
    reserve: 'Reserva mesa',
    menu: 'Menú del día',
    menuNote: 'Disponible Lun–Vie, 13:00–16:00',
    dishes: 'Platos estrella',
    about: 'Nuestra cocina',
    aboutText:
      'Producto de temporada, horno de leña y recetas heredadas de generación en generación.',
    hours: 'Horario',
    hoursValue: 'Lun–Dom · 12:00–23:00',
    contact: 'Encuéntranos',
    contactValue: 'Plaza del Sol 3, Casco Antiguo',
    footer: 'La Tavola · restaurante mediterráneo',
  },
};

const dishList = {
  en: ['Wood-fired paella', 'Iberian ham croquettes', 'Grilled octopus', 'Homemade tiramisu'],
  es: ['Paella al horno', 'Croquetas de jamón ibérico', 'Pulpo a la brasa', 'Tiramisú casero'],
};

export default function Restaurant() {
  const { lang } = useLangCtx();
  const t = copy[lang];
  const dishes = dishList[lang];

  return (
    <>
      <header className="container site-header">
        <strong>La Tavola</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav>
            <a href="#menu">{t.menu}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </nav>
          <LanguageSwitch />
        </div>
      </header>

      <section
        className="hero"
        style={{ background: 'linear-gradient(135deg, #5c2a1a 0%, #a34a2a 100%)' }}
      >
        <div className="container">
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <a className="btn" href="#contact">
            {t.reserve}
          </a>
        </div>
      </section>

      <section className="section" id="menu">
        <div className="container">
          <h2 className="section-title">{t.menu}</h2>
          <p style={{ color: 'var(--muted)' }}>{t.menuNote}</p>
          <h3 style={{ marginTop: 24 }}>{t.dishes}</h3>
          <div className="cards">
            {dishes.map((d) => (
              <div className="card" key={d}>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="section-title">{t.about}</h2>
          <p style={{ maxWidth: 560, color: 'var(--muted)' }}>{t.aboutText}</p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title">{t.hours}</h2>
          <p style={{ fontWeight: 600 }}>{t.hoursValue}</p>
          <h3 style={{ marginTop: 24 }}>{t.contact}</h3>
          <p style={{ color: 'var(--muted)' }}>{t.contactValue}</p>
        </div>
      </section>

      <footer>
        <div className="container">{t.footer}</div>
      </footer>
    </>
  );
}
