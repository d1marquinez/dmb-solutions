'use client';

// Florist — florist.gohost.one · Bloom & Stem
// Web de ejemplo de floristería. Tema moderno, dark por defecto.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';

const copy = {
  en: {
    brand: 'Bloom & Stem',
    nav: [
      { href: '#occasions', label: 'Occasions' },
      { href: '#about', label: 'About' },
      { href: '#order', label: 'Order' },
    ],
    hero: {
      title: 'Fresh flowers for every moment.',
      lead: 'Locally grown flowers, arranged by hand and delivered with care the same day.',
      cta: 'Order flowers',
    },
    occasions: {
      overline: 'Occasions',
      title: 'A bouquet for whatever comes',
      lead: 'Birthdays, weddings, sympathy, or just because — we’ll help you get it right.',
      items: ['Birthdays', 'Weddings', 'Sympathy', 'Just because'],
    },
    about: {
      overline: 'Our studio',
      title: 'Local stems, arranged by hand',
      lead: 'Grown nearby, arranged the same morning, and delivered across the city by afternoon.',
    },
    order: {
      overline: 'Order',
      title: 'Same-day delivery',
      hours: 'Mon–Sat · 8:30–20:00',
      address: 'Green Lane 27, Riverside',
      cta: 'Send flowers',
    },
    footer: 'Bloom & Stem — fresh flowers, your way.',
  },
  es: {
    brand: 'Bloom & Stem',
    nav: [
      { href: '#occasions', label: 'Ocasiones' },
      { href: '#about', label: 'Nosotros' },
      { href: '#order', label: 'Pedir' },
    ],
    hero: {
      title: 'Flores frescas para cada momento.',
      lead: 'Flores de cultivo local, arregladas a mano y entregadas con cariño el mismo día.',
      cta: 'Pide flores',
    },
    occasions: {
      overline: 'Ocasiones',
      title: 'Un ramo para lo que venga',
      lead: 'Cumpleaños, bodas, pésames o porque sí — te ayudamos a acertar.',
      items: ['Cumpleaños', 'Bodas', 'Pésame', 'Porque sí'],
    },
    about: {
      overline: 'Nuestro estudio',
      title: 'Flores locales, a mano',
      lead: 'Cultivadas cerca, arregladas esa misma mañana y entregadas por la ciudad por la tarde.',
    },
    order: {
      overline: 'Pedido',
      title: 'Entrega el mismo día',
      hours: 'Lun–Sáb · 8:30–20:00',
      address: 'Green Lane 27, Riverside',
      cta: 'Envía flores',
    },
    footer: 'Bloom & Stem — flores frescas, a tu manera.',
  },
};

export default function Florist() {
  const { lang } = useApp();
  const t = copy[lang];

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      <section className="hero">
        <div className="hero-inner container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.occasions.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#order">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="occasions">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.occasions.overline}</p>
            <h2 className="section-title">{t.occasions.title}</h2>
            <p className="muted">{t.occasions.lead}</p>
          </Reveal>
          <div className="cards">
            {t.occasions.items.map((occ, i) => (
              <Reveal key={occ} delay={i * 80}>
                <div className="card">
                  <h3 style={{ margin: 0 }}>{occ}</h3>
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

      <section className="section" id="order">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.order.overline}</p>
            <h2 className="section-title">{t.order.title}</h2>
            <div className="stacked" style={{ margin: '16px 0' }}>
              <p style={{ fontWeight: 600, margin: 0 }}>{t.order.hours}</p>
              <p className="muted" style={{ margin: 0 }}>{t.order.address}</p>
            </div>
            <a className="btn" href="#">{t.order.cta}</a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container">{t.footer}</div>
      </footer>
    </>
  );
}
