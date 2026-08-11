'use client';

// Florist — florist.gohost.one · Bloom & Stem
// Rediseño profesional: hero con flores, ramos con fotos, galería.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';
import Img from './Img';
import { floristImgs } from '@/lib/images';
import { getCurrency, formatPrice } from '@/lib/locale';

const copy = {
  en: {
    brand: 'Bloom & Stem',
    nav: [
      { href: '#bouquets', label: 'Bouquets' },
      { href: '#about', label: 'About' },
      { href: '#order', label: 'Order' },
    ],
    hero: {
      overline: 'Fresh flowers · Same-day delivery',
      title: 'Fresh flowers for every moment.',
      lead: 'Locally grown flowers, arranged by hand and delivered with care the same day.',
      cta: 'Order flowers',
    },
    bouquets: {
      overline: 'Our bouquets',
      title: 'A bouquet for whatever comes',
      lead: 'Arranged the same morning, delivered by afternoon.',
      from: 'From',
      items: [
        ['The Bloom', 45, floristImgs.bouquet],
        ['The Stem', 35, floristImgs.pink],
        ['The Field', 55, floristImgs.field],
        ['Jardin', 40, floristImgs.bouquet],
      ],
    },
    about: {
      overline: 'Our studio',
      title: 'Local stems, arranged by hand',
      lead: 'Grown nearby, arranged the same morning, and delivered across the city by afternoon.',
      mediaAlt: 'Ramos de flores frescas en la floristería',
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
      { href: '#bouquets', label: 'Ramos' },
      { href: '#about', label: 'Nosotros' },
      { href: '#order', label: 'Pedir' },
    ],
    hero: {
      overline: 'Flores frescas · Entrega el mismo día',
      title: 'Flores frescas para cada momento.',
      lead: 'Flores de cultivo local, arregladas a mano y entregadas con cariño el mismo día.',
      cta: 'Pide flores',
    },
    bouquets: {
      overline: 'Nuestros ramos',
      title: 'Un ramo para lo que venga',
      lead: 'Arreglados esa misma mañana, entregados por la tarde.',
      from: 'Desde',
      items: [
        ['El Bloom', 45, floristImgs.bouquet],
        ['El Stem', 35, floristImgs.pink],
        ['El Field', 55, floristImgs.field],
        ['Jardin', 40, floristImgs.bouquet],
      ],
    },
    about: {
      overline: 'Nuestro estudio',
      title: 'Flores locales, a mano',
      lead: 'Cultivadas cerca, arregladas esa misma mañana y entregadas por la ciudad por la tarde.',
      mediaAlt: 'Ramos de flores frescas en la floristería',
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
  const currency = getCurrency(lang);
  const format = (amt: number) => formatPrice(amt, currency);

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      {/* Hero con foto de flores */}
      <section className="hero-photo">
        <Img src={floristImgs.hero.src} alt={floristImgs.hero.alt} className="hero-bg" priority />
        <div className="container hero-inner">
          <Reveal>
            <p className="overline" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.hero.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#order">{t.hero.cta}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ramos con imágenes */}
      <section className="section" id="bouquets">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.bouquets.overline}</p>
            <h2 className="section-title">{t.bouquets.title}</h2>
            <p className="muted">{t.bouquets.lead}</p>
          </Reveal>
          <div className="gallery">
            {(t.bouquets.items as [string, number, { src: string; alt: string }][]).map(([name, price, img], i) => (
              <Reveal key={name} delay={i * 70}>
                <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="tile" style={{ borderRadius: 0, aspectRatio: '4/3' }}>
                    <Img src={img.src} alt={name} />
                  </div>
                  <div style={{ padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{name}</h3>
                    <span className="badge" style={{ margin: 0 }}>{t.bouquets.from} {format(price)}</span>
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
              <Img src={floristImgs.pink.src} alt={t.about.mediaAlt} />
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

      {/* Pedido */}
      <section className="section" id="order">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.order.overline}</p>
            <h2 className="section-title" style={{ margin: '0 auto 12px' }}>{t.order.title}</h2>
            <div className="stacked" style={{ margin: '16px auto', maxWidth: 300 }}>
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
