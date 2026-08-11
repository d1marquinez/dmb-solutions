'use client';

// Florist — florist.gohost.one · Bloom & Stem flower shop

import { useLangCtx } from './LangContext';
import LanguageSwitch from './LanguageSwitch';

const copy = {
  en: {
    hero: 'Bloom & Stem',
    sub: 'Fresh flowers for every moment. Bouquets, deliveries and same-day service.',
    order: 'Order flowers',
    occasions: 'Occasions',
    occasionsList: ['Birthdays', 'Weddings', 'Sympathy', 'Just because'],
    about: 'Our florists',
    aboutText:
      'Locally grown flowers, arranged by hand and delivered with care the same day.',
    hours: 'Opening hours',
    hoursValue: 'Mon–Sat · 8:30–20:00',
    contact: 'Find us',
    contactValue: 'Green Lane 27, Riverside',
    footer: 'Bloom & Stem · fresh flowers, your way',
  },
  es: {
    hero: 'Bloom & Stem',
    sub: 'Flores frescas para cada momento. Ramos, entregas y servicio el mismo día.',
    order: 'Pide flores',
    occasions: 'Ocasiones',
    occasionsList: ['Cumpleaños', 'Bodas', 'Pésame', 'Porque sí'],
    about: 'Nuestras floristas',
    aboutText:
      'Flores de cultivo local, arregladas a mano y entregadas con cariño el mismo día.',
    hours: 'Horario',
    hoursValue: 'Lun–Sáb · 8:30–20:00',
    contact: 'Encuéntranos',
    contactValue: 'Green Lane 27, Riverside',
    footer: 'Bloom & Stem · flores frescas, a tu manera',
  },
};

export default function Florist() {
  const { lang } = useLangCtx();
  const t = copy[lang];

  return (
    <>
      <header className="container site-header">
        <strong>Bloom &amp; Stem</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav>
            <a href="#occasions">{t.occasions}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </nav>
          <LanguageSwitch />
        </div>
      </header>

      <section
        className="hero"
        style={{ background: 'linear-gradient(135deg, #6b2a5a 0%, #a44a8a 100%)' }}
      >
        <div className="container">
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <a className="btn" href="#contact">
            {t.order}
          </a>
        </div>
      </section>

      <section className="section" id="occasions">
        <div className="container">
          <h2 className="section-title">{t.occasions}</h2>
          <div className="cards">
            {t.occasionsList.map((occ) => (
              <div className="card" key={occ}>
                <h3>{occ}</h3>
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
