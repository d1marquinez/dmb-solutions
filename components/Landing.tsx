'use client';

// Landing — main.gohost.one · DMB Solutions
// Landing de venta: hero, servicios, portafolio (slider), planes con moneda por ubicación.

import { useApp } from './LangContext';
import SiteHeader from './SiteHeader';
import Reveal from './Reveal';
import { SITES } from '@/lib/site-registry';
import { getCurrency, formatPrice } from '@/lib/locale';

const copy = {
  en: {
    brand: 'DMB Solutions',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#plans', label: 'Pricing' },
      { href: '#contact', label: 'Contact' },
    ],
    overline: 'Websites & hosting for local businesses',
    hero: {
      title: 'We build and host the website your business deserves.',
      lead: 'Modern, fast, and easy to manage. Design, hosting, security and updates included — you focus on the work.',
      cta: 'See our work',
    },
    services: {
      title: 'Everything included',
      items: [
        ['Your website', 'A professional site designed around your business.'],
        ['Email & domain', 'A real address that builds trust with customers.'],
        ['Hosting & care', 'Fast, secure, always online. We handle everything.'],
      ],
    },
    work: {
      overline: 'Real websites',
      title: 'Webs designed for real businesses',
      lead: 'Tap through examples of sites we build — each one a complete business website.',
      view: 'Visit site',
    },
    plans: {
      overline: 'Pricing',
      title: 'Simple, transparent plans',
      lead: 'One flat monthly price. No hidden fees, cancel anytime.',
      basic: {
        name: 'Starter',
        features: [
          'Website + hosting',
          'Professional email',
          'SSL & weekly updates',
          'Uptime monitoring',
        ],
        badge: 'Most popular',
      },
      business: {
        name: 'Business',
        features: [
          'Everything in Starter',
          'Your own domain',
          'Enhanced design',
          'Priority support',
        ],
      },
      basicPrice: 59, // EUR
      businessContact: true,
      cta: 'Contact us',
      pricePerMo: '/month',
      contactNote: 'Contact us for a custom quote',
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
    overline: 'Creamos y alojamos la web de tu negocio',
    hero: {
      title: 'Creamos y alojamos la web que tu negocio merece.',
      lead: 'Moderna, rápida y fácil de gestionar. Diseño, hosting, seguridad y actualizaciones incluidos — tú solo dedícate a tu trabajo.',
      cta: 'Ver trabajos',
    },
    services: {
      title: 'Todo incluido',
      items: [
        ['Tu web', 'Una web profesional diseñada alrededor de tu negocio.'],
        ['Correo y dominio', 'Una dirección real que genera confianza.'],
        ['Hosting y cuidado', 'Rápido, seguro y siempre online. Nosotros de todo.'],
      ],
    },
    work: {
      overline: 'Webs reales',
      title: 'Webs diseñadas para negocios reales',
      lead: 'Mira ejemplos de webs que creamos — cada una la web completa de un negocio.',
      view: 'Visitar web',
    },
    plans: {
      overline: 'Precios',
      title: 'Planes simples y transparentes',
      lead: 'Un precio fijo al mes. Sin costes ocultos, cancela cuando quieras.',
      basic: {
        name: 'Básico',
        features: [
          'Web + hosting',
          'Correo profesional',
          'SSL y actualizaciones semanales',
          'Monitorización de uptime',
        ],
        badge: 'El más popular',
      },
      business: {
        name: 'Negocio',
        features: [
          'Todo lo del Básico',
          'Tu propio dominio',
          'Diseño mejorado',
          'Soporte prioritario',
        ],
      },
      basicPrice: 59, // EUR
      businessContact: true,
      cta: 'Contáctanos',
      pricePerMo: '/mes',
      contactNote: 'Contacta para un presupuesto a medida',
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

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner container">
          <Reveal>
            <p className="overline" style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13 }}>
              {t.overline}
            </p>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="cta-row">
              <a className="btn" href="#work">{t.hero.cta}</a>
              <a className="btn btn-ghost" href="#contact">{t.nav[3].label}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <h2 className="section-title">{t.services.title}</h2>
          </Reveal>
          <div className="cards">
            {t.services.items.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="card">
                  <h3 style={{ marginBottom: 8 }}>{title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-2)' }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio — slider */}
      <section className="section" id="work" style={{ background: 'var(--panel)' }}>
        <div className="container">
          <Reveal>
            <p style={{ color: 'var(--accent-hi)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 13, marginBottom: 8 }}>{t.work.overline}</p>
            <h2 className="section-title">{t.work.title}</h2>
            <p className="muted" style={{ maxWidth: 560 }}>{t.work.lead}</p>
          </Reveal>
          <div className="slider">
            {SITES.map((s) => (
              <div key={s.id} className="slide">
                <div className="card" style={{ minHeight: 240, display: 'flex', flexDirection: 'column' }}>
                  <span className="badge">{s.title}</span>
                  <p style={{ color: 'var(--text-2)', flex: 1 }}>{s.tagline[lang]}</p>
                  <a className="btn" href={`//${s.host}`}>
                    {t.work.view} →
                  </a>
                </div>
              </div>
            ))}
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
            {/* Básico */}
            <Reveal delay={80}>
              <div className="card price-card">
                <span className="badge">{t.plans.basic.badge}</span>
                <h3 style={{ marginBottom: 4 }}>{t.plans.basic.name}</h3>
                <div className="price-amount">
                  {format(t.plans.basicPrice)}
                  <span className="price-period">{t.plans.pricePerMo}</span>
                </div>
                <ul className="price-features">
                  {t.plans.basic.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="btn" href="#contact" style={{ marginTop: 'auto' }}>{t.plans.cta}</a>
              </div>
            </Reveal>

            {/* Negocio — contactar por privado */}
            <Reveal delay={160}>
              <div className="card price-card" style={{ borderColor: 'var(--accent)' }}>
                <h3 style={{ marginBottom: 4 }}>{t.plans.business.name}</h3>
                {t.plans.businessContact ? (
                  <p className="muted" style={{ fontSize: '1.4rem', margin: '8px 0', fontWeight: 600 }}>
                    {t.plans.contactNote}
                  </p>
                ) : (
                  <div className="price-amount">
                    {format(99)}
                    <span className="price-period">{t.plans.pricePerMo}</span>
                  </div>
                )}
                <ul className="price-features">
                  {t.plans.business.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="btn btn-ghost" href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.plans.business.name)}`} style={{ marginTop: 'auto' }}>
                  {t.plans.cta}
                </a>
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
