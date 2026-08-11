'use client';

// Barber — barber.gohost.one · Golden Scissors
// Rediseño profesional: hero con foto inmersiva, servicios con imágenes, galería.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';
import Img from './Img';
import { getCurrency, formatPrice } from '@/lib/locale';
import { barberImgs } from '@/lib/images';

const copy = {
  en: {
    brand: 'Golden Scissors',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Book' },
    ],
    hero: {
      overline: 'Barber shop · Sharp cuts',
      title: 'Sharp cuts. Honest craft.',
      lead: 'Traditional barbershop with a modern twist. Cuts, beard sculpting and hot-towel shaves, done right.',
      cta: 'Book a slot',
    },
    services: {
      overline: 'What we do',
      title: 'Services & prices',
      from: 'From',
      items: [
        ['Haircut', 12, barberImgs.beard],
        ['Beard trim', 10, barberImgs.shave],
        ['Hot towel shave', 18, barberImgs.shave],
        ['Kids cut', 9, barberImgs.kids],
      ],
      cta: 'Book this service',
    },
    about: {
      overline: 'The shop',
      title: 'A barber in the neighborhood',
      lead: 'Walk in for a sharp cut and a straight-razor finish. Tea’s on, no appointment fuss — booking takes a minute.',
      mediaAlt: 'Barbero trabajando en un cliente',
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
      overline: 'Barbería · Cortes precisos',
      title: 'Cortes precisos. Oficio honesto.',
      lead: 'Barbería tradicional con un toque moderno. Cortes, arreglo de barba y afeitado con toalla caliente, bien hechos.',
      cta: 'Reserva tu cita',
    },
    services: {
      overline: 'Lo que hacemos',
      title: 'Servicios y precios',
      from: 'Desde',
      items: [
        ['Corte de pelo', 12, barberImgs.beard],
        ['Arreglo de barba', 10, barberImgs.shave],
        ['Afeitado toalla caliente', 18, barberImgs.shave],
        ['Corte infantil', 9, barberImgs.kids],
      ],
      cta: 'Reserva este servicio',
    },
    about: {
      overline: 'La barbería',
      title: 'Una barbería de barrio',
      lead: 'Entra para un corte preciso y un acabado con navaja. Té servido, sin líos — reservar lleva un minuto.',
      mediaAlt: 'Barbero trabajando en un cliente',
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
  const currency = getCurrency(lang);
  const format = (amt: number) => formatPrice(amt, currency);

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      {/* Hero con foto de la barbería */}
      <section className="hero-photo">
        <Img src={barberImgs.hero.src} alt={barberImgs.hero.alt} className="hero-bg" priority />
        <div className="container hero-inner">
          <Reveal>
            <p className="overline" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.hero.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#contact">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios con imágenes */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.services.overline}</p>
            <h2 className="section-title">{t.services.title}</h2>
          </Reveal>
          <div className="cards">
            {(t.services.items as [string, number, { src: string; alt: string }][]).map(([name, price, img], i) => (
              <Reveal key={name} delay={i * 80}>
                <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Img src={img.src} alt={img.alt} />
                  </div>
                  <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{name}</h3>
                    <span className="badge" style={{ margin: 0 }}>{t.services.from} {format(price)}</span>
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
              <Img src={barberImgs.shave.src} alt={t.about.mediaAlt} />
            </div>
            <div className="copy">
              <Reveal>
                <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.about.overline}</p>
                <h2 className="section-title">{t.about.title}</h2>
                <p className="muted">{t.about.lead}</p>
                <a className="btn" href="#contact">{t.hero.cta}</a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="section" id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.contact.overline}</p>
            <h2 className="section-title" style={{ margin: '0 auto 12px' }}>{t.contact.title}</h2>
            <div className="stacked" style={{ margin: '16px auto', maxWidth: 300 }}>
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
