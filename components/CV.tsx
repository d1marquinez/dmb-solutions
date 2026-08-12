'use client';

import SiteHeader from './SiteHeader';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

export default function CV() {
  return (
    <>
      <SiteHeader
        brand="DMB Solutions"
        links={[
          { href: '/', label: 'DMB Solutions' },
          { href: '#experience', label: 'Experience' },
          { href: '#projects', label: 'Projects' },
        ]}
      />
      <main className="cv-page">
        <div className="cv-toolbar no-print">
          <a className="cv-back" href="/">← Back to DMB Solutions</a>
          <div className="cv-actions">
            <LanguageSwitch />
            <ThemeSwitch />
            <button className="btn cv-print" onClick={() => window.print()}>Print / PDF</button>
          </div>
        </div>

        <article className="cv-document">
          <header className="cv-hero">
            <div>
              <p className="cv-kicker">Data Analytics · Compliance · Automation</p>
              <h1>David Marquinez Burgos</h1>
              <p className="cv-role">Senior Data Analyst</p>
            </div>
            <div className="cv-contact">
              <span>📍 London, United Kingdom</span>
              <a href="mailto:d1marquinez@gmail.com">✉️ d1marquinez@gmail.com</a>
              <a href="https://linkedin.com/in/dmarquinez" target="_blank" rel="noreferrer">🌐 linkedin.com/in/dmarquinez</a>
            </div>
          </header>

          <section className="cv-summary">
            <p>
              Senior Data Analyst with 4+ years of experience in Analytics and Compliance. I create insightful dashboards, build bots, perform data analytics for compliance reviews and work with AI-assisted agents daily, while training non-technical colleagues to use them effectively.
            </p>
          </section>

          <section className="cv-section" id="experience">
            <div className="cv-section-label">01 / Experience</div>
            <div className="cv-section-content">
              <div className="cv-entry">
                <div className="cv-entry-head"><h2>UK Bank — Compliance</h2><span>Revolut · London · Mar 2022 – Present</span></div>
                <p className="cv-entry-sub">Data Analytics · Compliance reviews · Monitoring &amp; Management Information</p>
                <ul>
                  <li>Led and supported 30+ Compliance Assurance Reviews across critical business areas and regulatory frameworks, including FATCA, SMCR, Consumer Duty, US Code of Federal Regulations, Crypto using Elliptic and Regulatory Reporting.</li>
                  <li>Built the Compliance Quality Control analytics framework from scratch: sampled data, developed metric definitions and enhanced the monitoring and Management Information (MI) used as the team’s source of truth.</li>
                  <li>Raised and tracked control findings through remediation, owning closure end-to-end and driving outcomes across Compliance and second-line functions.</li>
                  <li>Built Python bots and web scrapers that automated monitoring and reporting workflows, reducing manual effort and accelerating analysis.</li>
                  <li>Use AI-assisted agents daily for analysis, indicator creation, reporting and workflow automation. Verify outputs against source data and train non-technical colleagues to use agents effectively.</li>
                  <li>Promoted to Mid-Level in 5 quarters versus a typical 12.</li>
                </ul>
              </div>
              <div className="cv-entry">
                <div className="cv-entry-head"><h2>Consultant — Management Solutions</h2><span>Madrid · Jan 2021 – Feb 2022</span></div>
                <p className="cv-entry-sub">Regulatory capital consulting · Agile delivery</p>
                <ul>
                  <li>Shipped a proof-of-concept metric/model layer for regulatory capital requirements under MAR21 alongside the Product Owner.</li>
                  <li>Owned data validation and SQL, Python and Excel analysis within an agile delivery team.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cv-section" id="projects">
            <div className="cv-section-label">02 / Selected projects</div>
            <div className="cv-section-content cv-projects">
              <div className="cv-project"><h2>Family e-commerce platform</h2><p>Set up and operate a WooCommerce and analytics stack for a family-run lottery shop, including revenue tracking, checkout and compliance-clean implementation on a near-zero budget.</p></div>
              <div className="cv-project"><h2>Personal AI infrastructure</h2><p>Run a personal Hermes + DeepSeek agent connected to VPS infrastructure, the family store and personal workflows — applying agentic tooling beyond analytics.</p></div>
            </div>
          </section>

          <section className="cv-section cv-two-col">
            <div>
              <div className="cv-section-label">03 / Education</div>
              <div className="cv-section-content">
                <p><strong>University of Nicosia</strong><br />MSc in Blockchain and Digital Currency · Sept 2024 – 2027</p>
                <p><strong>Johns Hopkins University</strong><br />Data Science Specialization · Coursera</p>
                <p><strong>Universidad Politécnica de Madrid</strong><br />B.Eng. Computer Software Engineering</p>
              </div>
            </div>
            <div>
              <div className="cv-section-label">04 / Skills</div>
              <div className="cv-section-content">
                <p>SQL · Python / pandas · Looker · Data validation · Dashboarding &amp; MI · Metric definition · Automation · AI agents · Stakeholder management</p>
                <p><strong>Languages</strong><br />English · Spanish · Portuguese · Chinese Mandarin (Beginner)</p>
              </div>
            </div>
          </section>

          <footer className="cv-footer"><span>David Marquinez Burgos</span><span>Senior Data Analyst · London</span></footer>
        </article>
      </main>
    </>
  );
}
