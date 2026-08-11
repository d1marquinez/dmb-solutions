'use client';

// Barber — barber.gohost.one · Golden Scissors barber shop

import { useLangCtx } from './LangContext';
import LanguageSwitch from './LanguageSwitch';

const copy = {
  en: {
    hero: 'Golden Scissors',
    sub: 'Traditional barber shop. Cuts, shaves and hot-towel treatments.',
    book: 'Book now',
    services: 'Services',
    price: 'from €12',
    about: 'About',
    aboutText:
      'A modern take on the classic barbershop. Walk in for a sharp cut and a straight-razor finish.',
    hours: 'Opening hours',
    hoursValue: 'Tue–Sat · 9:00–20:00',
    contact: 'Find us',
    contactValue: 'District 7, Calle Mayor 12',
    footer: 'Golden Scissors · your neighborhood barber',
  },
  es: {
    hero: 'Golden Scissors',
    sub: 'Barbería tradicional. Cortes, afeitados y toallas calientes.',
    book: 'Reserva ahora',
    services: 'Servicios',
    price: 'desde 12€',
    about: 'Nosotros',
    aboutText:
      'Una visión moderna de la barbería clásica. Entra para un corte preciso y un acabado con navaja.',
    hours: 'Horario',
    hoursValue: 'Mar–Sáb · 9:00–20:00',
    contact: 'Encuéntranos',
    contactValue: 'Distrito 7, Calle Mayor 12',
    footer: 'Golden Scissors · tu barbería de barrio',
  },
};

const serviceList = {
  en: ['Haircut', 'Beard trim', 'Hot towel shave', 'Kids cut'],
  es: ['Corte de pelo', 'Arreglo de barba', 'Afeitado toalla caliente', 'Corte infantil'],
};

export default function Barber() {
  const { lang } = useLangCtx();
  const t = copy[lang];
  const services = serviceList[lang];

  return (
    <>
      <header className="container site-header">
        <strong>Golden Scissors</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav>
            <a href="#services">{t.services}</a>
            <a href="#about">{t.about}</a>
            <a href="#contact">{t.contact}</a>
          </nav>
          <LanguageSwitch />
        </div>
      </header>

      <section
        className="hero"
        style={{ background: 'linear-gradient(135deg, #3a2a1a 0%, #6b4a2a 100%)' }}
      >
        <div className="container">
          <h1>{t.hero}</h1>
          <p>{t.sub}</p>
          <a className="btn" href="#contact">
            {t.book}
          </a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title">{t.services}</h2>
          <div className="cards">
            {services.map((s, i) => (
              <div className="card" key={s}>
                <h3>{s}</h3>
                <span className="badge">{t.price} {i === 3 ? '· 10€' : ''}</span>
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
