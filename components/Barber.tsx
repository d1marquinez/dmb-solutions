'use client';

// Barber — barber.gohost.one · Golden Scissors
// Web de ejemplo de barbería. Tema moderno, dark por defecto.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';

const copy = {
  en: {
    brand: 'Golden Scissors',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Book' },
    ],
    hero: {
      title: 'Sharp cuts. Honest craft.',
      lead: 'Traditional barbershop with a modern twist. Cuts, beard sculpting and hot-towel shaves, done right.',
      cta: 'Book a slot',
    },
    services: {
      overline: 'What we do',
      title: 'Services & prices',
      items: [
        ['Haircut', 'From 12'],
        ['Beard trim', 'From 10'],
        ['Hot towel shave', 'From 18'],
        ['Kids cut', 'From 9'],
      ],
      priceCurrency: '€',
    },
    about: {
      overline: 'The shop',
      title: 'A barber in the neighborhood',
      lead: 'Walk in for a sharp cut and a straight-razor finish. Tea’s on, no appointment fuss — booking takes a minute.',
    },
    contact: {
      overline: 'Find us',
      title: 'Drop by',
      hours: 'Tue–Sat · 9:00–20:00',
      address: 'Calle Mayor 12, Distrito 7',
      cta: 'Book now',
    },
    footer: 'Golden Scissors — your neighborhood barber.',
  },
  es: {
    brand: 'Golden Scissors',
    nav: [
      { href: '#services', label: 'Servicios' },
      { href: '#about', label: 'Nosotros' },
      { href: '#contact', label: 'Reservar' },
    ],
    hero: {
      title: 'Cortes precisos. Oficio honesto.',
      lead: 'Barbería tradicional con un toque moderno. Cortes, arreglo de barba y afeitado con toalla caliente, bien hechos.',
      cta: 'Reserva tu cita',
    },
    services: {
      overline: 'Lo que hacemos',
      title: 'Servicios y precios',
      items: [
        ['Corte de pelo', 'Desde 12'],
        ['Arreglo de barba', 'Desde 10'],
        ['Afeitado toalla caliente', 'Desde 18'],
        ['Corte infantil', 'Desde 9'],
      ],
      priceCurrency: '€',
    },
    about: {
      overline: 'La barbería',
      title: 'Una barbería de barrio',
      lead: 'Entra para un corte preciso y un acabado con navaja. Té servido, sin líos — reservar lleva un minuto.',
    },
    contact: {
      overline: 'Encuéntranos',
      title: 'Pásate por aquí',
      hours: 'Mar–Sáb · 9:00–20:00',
      address: 'Calle Mayor 12, Distrito 7',
      cta: 'Reserva ahora',
    },
    footer: 'Golden Scissors — tu barbería de barrio.',
  },
};

export default function Barber() {
  const { lang } = useApp();
  const t = copy[lang];

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      <section className="hero">
        <div className="hero-inner container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.services.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#contact">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.services.overline}</p>
            <h2 className="section-title">{t.services.title}</h2>
          </Reveal>
          <div className="cards">
            {t.services.items.map(([name, price], i) => (
              <Reveal key={name} delay={i * 80}>
                <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0 }}>{name}</h3>
                  <span className="badge" style={{ margin: 0 }}>{t.services.priceCurrency}{price}</span>
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

      <section className="section" id="contact">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.contact.overline}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <div className="stacked" style={{ margin: '16px 0' }}>
              <p style={{ fontWeight: 600, margin: 0 }}>{t.contact.hours}</p>
              <p className="muted" style={{ margin: 0 }}>{t.contact.address}</p>
            </div>
            <a className="btn" href="#">{t.contact.cta}</a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container">{t.footer}</div>
      </footer>
    </>
  );
}
