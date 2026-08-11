'use client';

// Landing — main.gohost.one · DMB Solutions
// Rediseño profesional: hero con fotografía inmersiva, secciones imagen+texto,
// portafolio con previews, planes con moneda por ubicación.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';
import Img from './Img';
import { SITES } from '@/lib/site-registry';
import { getCurrency, formatPrice } from '@/lib/locale';
import { landingImgs, u } from '@/lib/images';

const copy = {
  en: {
    brand: 'DMB Solutions',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#plans', label: 'Pricing' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      overline: 'Websites & hosting for local businesses',
      title: 'We build and host the website your business deserves.',
      lead: 'Design, hosting, security and updates included. We handle everything — you focus on the work.',
      cta: 'See our work',
      cta2: 'Talk to us',
    },
    services: {
      overline: 'Everything included',
      title: 'A website that looks as good as your business',
      lead: 'One flat monthly price. We take care of the details so your website always looks professional.',
      items: [
        ['Your website', 'A professional site designed around your business, with real photography and a modern look.'],
        ['Email & domain', 'A real address that builds trust with every customer.'],
        ['Hosting & care', 'Fast, secure, always online. Updates and monitoring included.'],
      ],
      mediaAlt: 'Equipo de diseño web trabajando en una web profesional',
    },
    work: {
      overline: 'Our work',
      title: 'Real websites, built for real businesses',
      lead: 'Each one a complete business website — tap through to see them live.',
      view: 'Visit',
    },
    plans: {
      overline: 'Pricing',
      title: 'Simple, transparent plans',
      lead: 'One flat monthly price. No hidden fees, cancel anytime.',
      basic: {
        name: 'Starter',
        features: ['Website + hosting', 'Professional email', 'SSL & weekly updates', 'Uptime monitoring'],
        badge: 'Most popular',
      },
      business: {
        name: 'Business',
        features: ['Everything in Starter', 'Your own domain', 'Enhanced design', 'Priority support'],
      },
      basicPrice: 59,
      businessContact: true,
      cta: 'Contact us',
      pricePerMo: '/mo',
      contactNote: 'Custom quote',
    },
    contact: {
      overline: 'Get started',
      title: 'Let’s build your website',
      lead: 'Tell us about your business and we’ll take it from there.',
      email: 'info@gohost.one',
    },
    footer: 'DMB Solutions — websites for local businesses.',
  },
  es: {
    brand: 'DMB Solutions',
    nav: [
      { href: '#services', label: 'Servicios' },
      { href: '#work', label: 'Trabajos' },
      { href: '#plans', label: 'Precios' },
      { href: '#contact', label: 'Contacto' },
    ],
    hero: {
      overline: 'Creamos y alojamos la web de tu negocio',
      title: 'Creamos y alojamos la web que tu negocio merece.',
      lead: 'Diseño, hosting, seguridad y actualizaciones incluidos. Nos encargamos de todo — tú solo dedícate a tu trabajo.',
      cta: 'Ver trabajos',
      cta2: 'Hablemos',
    },
    services: {
      overline: 'Todo incluido',
      title: 'Una web que luce tan bien como tu negocio',
      lead: 'Un solo precio fijo al mes. Nos ocupamos de los detalles para que tu web siempre se vea profesional.',
      items: [
        ['Tu web', 'Una web profesional diseñada alrededor de tu negocio, con fotografía real y aspecto moderno.'],
        ['Correo y dominio', 'Una dirección real que genera confianza con cada cliente.'],
        ['Hosting y cuidado', 'Rápido, seguro y siempre online. Actualizaciones y monitorización incluidas.'],
      ],
      mediaAlt: 'Equipo de diseño web trabajando en una web profesional',
    },
    work: {
      overline: 'Nuestros trabajos',
      title: 'Webs reales, para negocios reales',
      lead: 'Cada una la web completa de un negocio — pulsa para verlas en vivo.',
      view: 'Visitar',
    },
    plans: {
      overline: 'Precios',
      title: 'Planes simples y transparentes',
      lead: 'Un precio fijo al mes. Sin costes ocultos, cancela cuando quieras.',
      basic: {
        name: 'Básico',
        features: ['Web + hosting', 'Correo profesional', 'SSL y actualizaciones semanales', 'Monitorización de uptime'],
        badge: 'El más popular',
      },
      business: {
        name: 'Negocio',
        features: ['Todo lo del Básico', 'Tu propio dominio', 'Diseño mejorado', 'Soporte prioritario'],
      },
      basicPrice: 59,
      businessContact: true,
      cta: 'Contáctanos',
      pricePerMo: '/mes',
      contactNote: 'Presupuesto a medida',
    },
    contact: {
      overline: 'Empieza',
      title: 'Creamos tu web',
      lead: 'Cuéntanos tu negocio y nos encargamos del resto.',
      email: 'info@gohost.one',
    },
    footer: 'DMB Solutions — webs para negocios locales.',
  },
};

export default function Landing() {
  const { lang } = useApp();
  const t = copy[lang];
  const currency = getCurrency(lang);
  const format = (amt: number) => formatPrice(amt, currency);

  return (
    <>
      <SiteHeader brand={t.brand} links={t.nav} />

      {/* Hero con fotografía inmersiva */}
      <section className="hero-photo">
        <Img src={landingImgs.hero.src} alt={landingImgs.hero.alt} className="hero-bg" priority />
        <div className="container hero-inner">
          <Reveal>
            <p className="overline" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.hero.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#work">{t.hero.cta}</a>
              <a className="btn btn-ghost" href="#contact">{t.hero.cta2}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios con imagen + texto */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.services.overline}</p>
            <h2 className="section-title">{t.services.title}</h2>
          </Reveal>

          <div className="split" style={{ marginTop: 48 }}>
            <div className="copy">
              <Reveal>
                <div className="stacked" style={{ gap: 20 }}>
                  {t.services.items.map(([title, desc]) => (
                    <div key={title} style={{ padding: '18px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                      <h3 style={{ marginBottom: 6 }}>{title}</h3>
                      <p style={{ margin: 0, color: 'var(--text-2)' }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="media" style={{ aspectRatio: '4/3' }}>
              <Img src={landingImgs.work.src} alt={t.services.mediaAlt} />
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="section" id="work" style={{ background: 'var(--panel)' }}>
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.work.overline}</p>
            <h2 className="section-title">{t.work.title}</h2>
            <p className="muted" style={{ maxWidth: 560 }}>{t.work.lead}</p>
          </Reveal>

          <div className="slider" style={{ marginTop: 32 }}>
            {SITES.map((s, i) => {
              // Preview image por site
              const previews = [
                { src: u('photo-1585747860715-2ba37e788b70', 800, 75), alt: 'Peluquería Golden Scissors' },
                { src: u('photo-1517248135467-4c7edcad34c4', 800, 75), alt: 'Restaurante La Tavola' },
                { src: u('photo-1463320726281-696a485928c7', 800, 75), alt: 'Floristería Bloom & Stem' },
              ];
              return (
                <div key={s.id} className="slide" style={{ flex: '0 0 min(420px, 84vw)' }}>
                  <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                      <Img src={previews[i].src} alt={previews[i].alt} />
                    </div>
                    <div style={{ padding: 22 }}>
                      <span className="badge">{s.title}</span>
                      <p style={{ color: 'var(--text-2)', margin: '8px 0 16px' }}>{s.tagline[lang]}</p>
                      <a className="btn" href={`//${s.host}`} style={{ marginTop: 'auto' }}>
                        {t.work.view} →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="section" id="plans">
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.plans.overline}</p>
            <h2 className="section-title">{t.plans.title}</h2>
            <p className="muted" style={{ maxWidth: 560 }}>{t.plans.lead}</p>
          </Reveal>
          <div className="cards">
            <Reveal delay={80}>
              <div className="card price-card">
                <span className="badge">{t.plans.basic.badge}</span>
                <h3 style={{ marginBottom: 4 }}>{t.plans.basic.name}</h3>
                <div className="price-amount">
                  {format(t.plans.basicPrice)}
                  <span className="price-period">{t.plans.pricePerMo}</span>
                </div>
                <ul className="price-features">
                  {t.plans.basic.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a className="btn" href="#contact" style={{ marginTop: 'auto' }}>{t.plans.cta}</a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card price-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ marginBottom: 4 }}>{t.plans.business.name}</h3>
                <p className="muted" style={{ fontSize: '1.4rem', margin: '8px 0', fontWeight: 600 }}>{t.plans.contactNote}</p>
                <ul className="price-features">
                  {t.plans.business.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a className="btn btn-ghost" href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.plans.business.name)}`} style={{ marginTop: 'auto' }}>{t.plans.cta}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="section" id="contact" style={{ background: 'var(--panel)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.contact.overline}</p>
            <h2 className="section-title" style={{ margin: '0 auto 12px' }}>{t.contact.title}</h2>
            <p className="muted" style={{ maxWidth: 520, margin: '0 auto 24px' }}>{t.contact.lead}</p>
            <a className="btn" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="container">{t.footer}</div>
      </footer>
    </>
  );
}
