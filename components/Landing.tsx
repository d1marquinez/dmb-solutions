'use client';

// Landing — main.gohost.one · DMB Solutions
// Página de venta: quiénes somos, qué hacemos, portafolio de ejemplos, planes.

import { useLangCtx } from './LangContext';
import LanguageSwitch from './LanguageSwitch';
import { SITES } from '@/lib/site-registry';

const copy = {
  en: {
    tagline: 'Websites & hosting for local businesses',
    hero: {
      title: 'We build and host the website your business deserves.',
      sub: 'Modern, fast, and easy to manage. We take care of everything — design, hosting, security and updates. You focus on your business.',
      cta: 'See our work',
    },
    services: {
      title: 'Everything included',
      items: [
        ['Your website', 'A professional site designed for your business.'],
        ['Domain & email', 'A real address that looks serious to customers.'],
        ['Hosting & care', 'Fast, secure, always online. We handle maintenance.'],
      ],
    },
    portfolio: {
      title: 'Real websites, made by us',
      sub: 'Take a look at examples of sites we build, each one a complete business website.',
      view: 'Visit site',
      theseAre: 'Example',
    },
    plans: {
      title: 'Simple, transparent pricing',
      row1: 'Starter — monthly',
      row2: 'Business — your own domain',
      cta: 'Let’s talk',
    },
    footer: {
      made: 'Made by DMB Solutions',
      tag: 'Websites for local businesses.',
    },
  },
  es: {
    tagline: 'Creamos y alojamos la web de tu negocio',
    hero: {
      title: 'Creamos y alojamos la web que tu negocio merece.',
      sub: 'Moderna, rápida y fácil de gestionar. Nos ocupamos de todo — diseño, hosting, seguridad y actualizaciones. Tú solo dedícate a tu negocio.',
      cta: 'Ver nuestros trabajos',
    },
    services: {
      title: 'Todo incluido',
      items: [
        ['Tu web', 'Una web profesional diseñada para tu negocio.'],
        ['Dominio y correo', 'Una dirección real que transmite seriedad.'],
        ['Hosting y cuidado', 'Rápido, seguro y siempre online. Nosotros mantenemos.'],
      ],
    },
    portfolio: {
      title: 'Webs reales, hechas por nosotros',
      sub: 'Echa un vistazo a ejemplos de webs que creamos, cada una una web completa de negocio.',
      view: 'Visitar web',
      theseAre: 'Ejemplo',
    },
    plans: {
      title: 'Precios simples y transparentes',
      row1: 'Básico — mensual',
      row2: 'Negocio — tu propio dominio',
      cta: 'Hablemos',
    },
    footer: {
      made: 'Hecho por DMB Solutions',
      tag: 'Webs para negocios locales.',
    },
  },
};

export default function Landing() {
  const { lang } = useLangCtx();
  const t = copy[lang];

  return (
    <>
      {/* Header */}
      <header className="container site-header">
        <strong>DMB&nbsp;Solutions</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav>
            <a href="#services">{lang === 'en' ? 'Services' : 'Servicios'}</a>
            <a href="#portfolio">{lang === 'en' ? 'Work' : 'Trabajos'}</a>
            <a href="#plans">{lang === 'en' ? 'Pricing' : 'Precios'}</a>
          </nav>
          <LanguageSwitch />
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p style={{ opacity: 0.85, margin: 0 }}>{t.tagline}</p>
          <h1 style={{ margin: '12px 0 16px' }}>{t.hero.title}</h1>
          <p>{t.hero.sub}</p>
          <a className="btn" href="#portfolio">
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title">{t.services.title}</h2>
          <div className="cards">
            {t.services.items.map(([title, desc]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="section" id="portfolio" style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="section-title">{t.portfolio.title}</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 560 }}>{t.portfolio.sub}</p>
          <div className="cards">
            {SITES.map((s) => (
              <div className="card" key={s.id}>
                <span className="badge">{t.portfolio.theseAre}</span>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{s.description}</p>
                <a
                  className="btn"
                  href={`//${s.host}`}
                  style={{ marginTop: 12, fontSize: 14 }}
                >
                  {t.portfolio.view} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="section" id="plans">
        <div className="container">
          <h2 className="section-title">{t.plans.title}</h2>
          <div className="cards">
            <div className="card">
              <h3>{t.plans.row1}</h3>
              <p style={{ fontSize: '2rem', margin: '8px 0' }}>€29<span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/mo</span></p>
              <ul style={{ color: 'var(--muted)', paddingLeft: 18 }}>
                <li>{lang === 'en' ? 'Website + hosting' : 'Web + hosting'}</li>
                <li>{lang === 'en' ? 'Professional email' : 'Correo profesional'}</li>
                <li>{lang === 'en' ? 'SSL & updates' : 'SSL y actualizaciones'}</li>
              </ul>
            </div>
            <div className="card" style={{ borderColor: 'var(--accent)' }}>
              <h3>{t.plans.row2}</h3>
              <p style={{ fontSize: '2rem', margin: '8px 0' }}>€49<span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/mo</span></p>
              <ul style={{ color: 'var(--muted)', paddingLeft: 18 }}>
                <li>{lang === 'en' ? 'Everything in Starter' : 'Todo lo del Básico'}</li>
                <li>{lang === 'en' ? 'Your own domain' : 'Tu propio dominio'}</li>
                <li>{lang === 'en' ? 'Priority support' : 'Soporte prioritario'}</li>
              </ul>
            </div>
          </div>
          <a className="btn" href="mailto:info@gohost.one" style={{ marginTop: 24 }}>
            {t.plans.cta}
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          {t.footer.made} — {t.footer.tag}
        </div>
      </footer>
    </>
  );
}
