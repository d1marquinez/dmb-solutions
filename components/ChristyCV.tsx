'use client';

import SiteHeader from './SiteHeader';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';

export default function ChristyCV() {
  return (
    <>
      <SiteHeader
        brand="DMB Solutions"
        links={[
          { href: '/', label: 'DMB Solutions' },
          { href: '#experience', label: 'Experience' },
          { href: '#skills', label: 'Skills' },
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
              <p className="cv-kicker">TikTok Shop · Affiliate marketing · Creator partnerships</p>
              <h1>Yuxin Wu</h1>
              <p className="cv-role">Affiliate Marketing Manager — campaign management, creator ecosystems &amp; data-driven growth</p>
            </div>
            <div className="cv-contact">
              <span>London, United Kingdom</span>
              <a href="https://www.linkedin.com/in/yuxin-wu-1916b5350" target="_blank" rel="noreferrer">LinkedIn profile</a>
            </div>
          </header>

          <section className="cv-summary">
            <p>
              Affiliate Marketing Manager and TikTok Shop partner experienced in scaling creator campaigns, managing high-volume creator partnerships and supporting brand growth across global creator ecosystems. Strong background in influencer marketing, social media strategy, campaign optimisation, account management and data-driven reporting.
            </p>
            <p className="cv-draft-note no-print">Draft generated from publicly available profile information. Confirm dates, contact details, previous roles and quantified achievements before using this CV professionally.</p>
          </section>

          <section className="cv-section" id="experience">
            <div className="cv-section-label">01 / Experience</div>
            <div className="cv-section-content">
              <div className="cv-entry">
                <div className="cv-entry-head"><h2>Affiliate Marketing Manager — TT Media London Ltd</h2><span>Greater London · Dec 2023 – Present</span></div>
                <p className="cv-entry-sub">TikTok-focused growth agency · Advertising Services</p>
                <ul>
                  <li>Manage affiliate marketing and creator partnership activity across TikTok Shop campaigns.</li>
                  <li>Support brands in scaling creator-led campaigns and driving measurable GMV growth.</li>
                  <li>Manage high-volume creator relationships across global creator ecosystems.</li>
                  <li>Coordinate campaign execution, creator communication, reporting and optimisation.</li>
                  <li>Use data-driven analysis to improve campaign performance and inform brand decisions.</li>
                </ul>
              </div>
              <div className="cv-entry cv-placeholder-entry">
                <div className="cv-entry-head"><h2>Earlier experience</h2><span>To be completed</span></div>
                <p className="cv-entry-sub">Add previous roles, employers and dates from the full LinkedIn profile.</p>
              </div>
            </div>
          </section>

          <section className="cv-section" id="skills">
            <div className="cv-section-label">02 / Core skills</div>
            <div className="cv-section-content cv-projects">
              <div className="cv-project"><h2>Affiliate &amp; creator marketing</h2><p>Affiliate marketing · Creator partnerships · TikTok Shop · Creator ecosystems · Influencer marketing · Brand management</p></div>
              <div className="cv-project"><h2>Campaign growth</h2><p>Campaign strategy · Campaign optimisation · GMV growth · Social media strategy · Content management</p></div>
              <div className="cv-project"><h2>Operations &amp; analysis</h2><p>Account management · Data-driven reporting · Project management · CRM · Stakeholder communication</p></div>
            </div>
          </section>

          <section className="cv-section cv-two-col">
            <div>
              <div className="cv-section-label">03 / Education</div>
              <div className="cv-section-content">
                <p><strong>University of Westminster</strong><br />Master of Arts — Communication and Media Studies</p>
                <p className="cv-placeholder-text">Add undergraduate degree and dates if applicable.</p>
              </div>
            </div>
            <div>
              <div className="cv-section-label">04 / Additional</div>
              <div className="cv-section-content">
                <p><strong>Location</strong><br />London, England, United Kingdom</p>
                <p className="cv-placeholder-text">Add languages, certifications, contact details and selected campaign metrics.</p>
              </div>
            </div>
          </section>

          <footer className="cv-footer"><span>Yuxin Wu</span><span>Affiliate Marketing Manager · London</span></footer>
        </article>
      </main>
    </>
  );
}
