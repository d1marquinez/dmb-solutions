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
              <p className="cv-kicker">Data · Metrics · AI-assisted analytics</p>
              <h1>David Marquinez Burgos</h1>
              <p className="cv-role">Senior Data Analyst — business partner, metrics &amp; AI-assisted analytics</p>
            </div>
            <div className="cv-contact">
              <span>London, United Kingdom</span>
              <a href="mailto:d1marquinez@gmail.com">d1marquinez@gmail.com</a>
              <a href="https://linkedin.com/in/dmarquinez" target="_blank" rel="noreferrer">linkedin.com/in/dmarquinez</a>
            </div>
          </header>

          <section className="cv-summary">
            <p>
              Senior Data Analyst with 3+ years inside a global fintech, acting as the direct analytics partner to Compliance, Risk and Operations teams. I turn vague business questions into metrics, version-controlled datasets and self-service dashboards that non-technical teams rely on. I build and verify work with AI-assisted agents daily, and train non-technical colleagues to use them effectively. Equally focused on why a number is what it is and how to produce it reliably.
            </p>
          </section>

          <section className="cv-section" id="experience">
            <div className="cv-section-label">01 / Experience</div>
            <div className="cv-section-content">
              <div className="cv-entry">
                <div className="cv-entry-head"><h2>Data Analyst — Revolut</h2><span>London · Mar 2022 – Present</span></div>
                <p className="cv-entry-sub">UK Bank · Compliance, Risk &amp; Operations analytics</p>
                <ul>
                  <li>Led 30+ Compliance Assurance Reviews across FATCA, SMCR, Consumer Duty and US Code of Federal Regulations, translating ambiguous questions into decisions stakeholders could act on.</li>
                  <li>Built the Compliance Quality Control analytics framework from scratch: metric definitions, data caveats and always-filters now used as the team’s single source of truth.</li>
                  <li>Owned datasets, Looker dashboards, monitoring and management information used daily by Compliance and second-line functions.</li>
                  <li>Raised and tracked 1XX control findings through remediation, owning closure end-to-end rather than handing off problems.</li>
                  <li>Pioneered Python bots and web scrapers that removed manual toil from monitoring and reporting workflows.</li>
                  <li>Use an internal AI agent (OpenCode + GLM 5.2) connected to Slack and the data warehouse to analyse data, build indicators, generate reports and automate messages/bots. Verify outputs against source data and train non-technical colleagues to use it safely.</li>
                  <li>Performed UAT and validation of a market-risk model using Python and Excel. Promoted to Mid-Level in 5 quarters versus a typical 12.</li>
                </ul>
              </div>
              <div className="cv-entry">
                <div className="cv-entry-head"><h2>Consultant — Management Solutions</h2><span>Madrid · Jan 2021 – Feb 2022</span></div>
                <p className="cv-entry-sub">Regulatory capital consulting · Agile delivery</p>
                <ul>
                  <li>Shipped a proof-of-concept metric/model layer for regulatory capital requirements under MAR21 alongside the Product Owner.</li>
                  <li>Owned data validation and SQL, Python and Excel analysis, communicating clearly when a number did not mean what a stakeholder assumed.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cv-section" id="projects">
            <div className="cv-section-label">02 / Selected projects</div>
            <div className="cv-section-content cv-projects">
              <div className="cv-project"><h2>Agentic analytics at work</h2><p>Daily use of an internal OpenCode + GLM agent connected to team Slack and the warehouse for analysis, indicators, reporting and automation — with source-data verification as a non-negotiable step.</p></div>
              <div className="cv-project"><h2>Family e-commerce platform</h2><p>Set up and operate a WooCommerce and analytics stack for a family-run lottery shop, including revenue tracking, checkout and compliance-clean implementation on a near-zero budget.</p></div>
              <div className="cv-project"><h2>Personal AI infrastructure</h2><p>Run a personal Hermes + DeepSeek agent connected to VPS infrastructure, the family store and personal workflows — applying agentic tooling beyond analytics.</p></div>
            </div>
          </section>

          <section className="cv-section cv-two-col">
            <div>
              <div className="cv-section-label">03 / Education</div>
              <div className="cv-section-content"><p><strong>Johns Hopkins University</strong><br />Data Science Specialization · Coursera</p><p><strong>Universidad Politécnica de Madrid</strong><br />B.Eng. Computer Software Engineering</p></div>
            </div>
            <div>
              <div className="cv-section-label">04 / Skills</div>
              <div className="cv-section-content"><p>SQL · Python / pandas · Looker · Data validation · Dashboarding &amp; MI · Metric definition · Automation · AI agents · Stakeholder discovery · Written communication</p><p><strong>Languages</strong><br />English · Spanish · Portuguese</p></div>
            </div>
          </section>

          <footer className="cv-footer"><span>David Marquinez Burgos</span><span>Data Analyst · London</span></footer>
        </article>
      </main>
    </>
  );
}
