import { useEffect, useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Products', href: '#products' },
  { label: 'Atlas', href: '#atlas' },
  { label: 'Fort Knox Ledger', href: '#ledger' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
]

const principles = [
  {
    title: 'Built for real workflows',
    body: 'We start with the actual work: schedules, communication, follow-through, and the moving parts teams manage every day.',
  },
  {
    title: 'Designed for visibility and control',
    body: 'The goal is not more software. The goal is clearer decisions, cleaner handoffs, and fewer blind spots.',
  },
  {
    title: 'Structured for growth and automation',
    body: 'Each product is built to support repeatable operations now while leaving room for smarter automation over time.',
  },
]

const expansionAreas = [
  {
    title: 'Education Systems',
    body: 'Additional tools for education organizations that need stronger coordination, communication, and operational visibility.',
  },
  {
    title: 'Owner Consoles',
    body: 'Administrative tools that help product owners manage access, settings, usage, and operational visibility from one place.',
  },
  {
    title: 'Guided Service Tools',
    body: 'Structured tools for specialized workflows where users need clear steps, reliable records, and practical next actions.',
  },
]

const atlasProofPoints = [
  {
    title: 'Scheduling and coordination',
    body: 'Keep calendars, sessions, and day-to-day follow-through moving in one place.',
  },
  {
    title: 'Communication visibility',
    body: 'Give teams a clearer view of conversations, activity, and operational status across the work.',
  },
  {
    title: 'Student workflow support',
    body: 'Track progress, notes, and execution without relying on scattered tools and disconnected updates.',
  },
]

const ledgerProofPoints = [
  {
    title: 'Private vault ledgers',
    body: 'Track gold and silver entries inside user-owned ledgers with account-scoped records and controlled access.',
  },
  {
    title: 'Metal valuation tools',
    body: 'Use spot-price references, melt calculations, alerts, and reports to understand recorded holdings without investment advice claims.',
  },
  {
    title: 'Server-ready foundation',
    body: 'Built with authentication, owner settings, API usage visibility, email-ready alerts, and Docker deployment in mind.',
  },
]

const heroSignals = [
  'Parent brand built for multiple product tracks',
  'Atlas and Fort Knox Ledger are active product tracks',
  'Expansion areas stay visible without competing with live products',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal--left, .reveal--right',
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="site-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand-lockup"
            href="#top"
            onClick={closeMenu}
            aria-label="CoreBox Systems"
          >
            <img
              className="brand-logo brand-logo--header"
              src="/assets/corebox-systems-logo.png"
              alt="CoreBox Systems"
            />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`header-nav-wrap${menuOpen ? ' is-open' : ''}`}>
            <nav className="site-nav" aria-label="Primary">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="header-actions">
              <a className="button button--primary" href="#contact" onClick={closeMenu}>
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-reveal hero-reveal--1">CoreBox Systems</p>
              <h1 className="hero-reveal hero-reveal--2">
                Software for systems that have to work.
              </h1>
              <p className="hero-support hero-reveal hero-reveal--3">
                CoreBox Systems builds focused software for operational
                environments where clarity, control, and execution matter.
                Atlas supports education operations, and Fort Knox Ledger brings
                the same structured approach to private precious-metals records.
              </p>
              <div className="hero-actions hero-reveal hero-reveal--4">
                <a className="button button--primary" href="#contact">
                  Request Demo
                </a>
                <a
                  className="button button--secondary"
                  href="https://atlas.coreboxsystems.com"
                >
                  Explore Atlas
                </a>
                <a
                  className="button button--secondary"
                  href="https://ledger.coreboxsystems.com"
                >
                  Open Fort Knox Ledger
                </a>
              </div>
              <p className="hero-proof hero-reveal hero-reveal--5">
                Live product tracks: Atlas CRM and Fort Knox Ledger
              </p>
            </div>

            <div className="hero-visual" aria-label="CoreBox systems overview">
              <div className="hero-visual__panel hero-visual__panel--brand hero-reveal hero-reveal--6">
                <div className="panel-kicker">Parent Company</div>
                <div className="hero-brand" aria-label="CoreBox Systems">
                  <img
                    className="brand-logo brand-logo--hero"
                    src="/assets/corebox-systems-logo.png"
                    alt="CoreBox Systems"
                  />
                </div>
                <p>
                  Focused software for education operations, connected systems,
                  and guided service workflows.
                </p>
              </div>

              <div className="hero-visual__stack">
                <div className="hero-visual__panel hero-visual__panel--signal hero-reveal hero-reveal--7 float-slow">
                  <div className="panel-kicker">Live now</div>
                  <div className="signal-head">
                    <strong>Atlas</strong>
                    <span>Education operations platform</span>
                  </div>
                  <div className="signal-metrics">
                    <div>
                      <span>Scheduling</span>
                      <strong>Connected</strong>
                    </div>
                    <div>
                      <span>Communication</span>
                      <strong>Visible</strong>
                    </div>
                    <div>
                      <span>Progress</span>
                      <strong>Tracked</strong>
                    </div>
                  </div>
                </div>

                <div className="hero-visual__panel hero-visual__panel--ledger hero-reveal hero-reveal--8">
                  <div className="panel-kicker">New product track</div>
                  <div className="ledger-mini">
                    <div className="ledger-mini__dial" aria-hidden="true">
                      <span />
                    </div>
                    <div>
                      <strong>Fort Knox Ledger</strong>
                      <span>Private precious-metals vault ledger</span>
                    </div>
                  </div>
                  <ul>
                    {heroSignals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-heading reveal reveal--1">
              <p className="eyebrow">Products</p>
              <h2>Focused products. Structured systems.</h2>
              <p>
                CoreBox Systems is built to develop practical software for
                operations-heavy environments. Atlas and Fort Knox Ledger are
                active product tracks, and future products will extend the same
                systems-first approach into guided workflows and service-driven
                tools.
              </p>
            </div>

            <div className="products-grid">
              <article className="feature-card feature-card--atlas reveal reveal--1 lift-card">
                <div className="feature-card__tag">Live Product</div>
                <h3>Atlas</h3>
                <p>
                  A CRM and operations platform for tutoring and education teams
                  managing scheduling, communication, and student progress.
                </p>
                <div className="feature-card__rail">
                  <span>CRM</span>
                  <span>Scheduling</span>
                  <span>Progress</span>
                </div>
                <a
                  className="text-link"
                  href="https://atlas.coreboxsystems.com"
                >
                  Explore Atlas
                </a>
              </article>

              <article className="feature-card feature-card--ledger reveal reveal--2 lift-card">
                <div className="feature-card__tag">Beta Product</div>
                <h3>Fort Knox Ledger</h3>
                <p>
                  A private precious-metals ledger for tracking gold and silver
                  entries, melt-value calculations, price alerts, and vault
                  summaries.
                </p>
                <div className="feature-card__rail">
                  <span>Vault Ledgers</span>
                  <span>Spot Prices</span>
                  <span>Reports</span>
                </div>
                <a
                  className="text-link"
                  href="https://ledger.coreboxsystems.com"
                >
                  Open Fort Knox Ledger
                </a>
              </article>

              <article className="feature-card feature-card--support reveal reveal--3 lift-card">
                <div className="panel-kicker">Built around real workflows</div>
                <h3>Operational systems with less friction.</h3>
                <p>
                  We design products around the moving parts teams actually
                  manage every day: appointments, follow-through,
                  communication, visibility, and operational accountability.
                </p>
                <div className="workflow-list">
                  <span>Appointments</span>
                  <span>Follow-through</span>
                  <span>Visibility</span>
                  <span>Accountability</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--wide" id="atlas">
          <div className="container">
            <div className="section-heading section-heading--tight reveal reveal--1">
              <p className="eyebrow">Live Product</p>
              <h2>Atlas brings structure to education operations.</h2>
              <p>
                Built for tutoring and education teams, Atlas helps keep
                scheduling, communication, and student progress connected in one
                operating system.
              </p>
            </div>

            <div className="atlas-proof">
              <figure className="atlas-screenshot-panel reveal--left">
                <div className="atlas-screenshot-panel__frame">
                  <img
                    className="atlas-screenshot"
                    src="/assets/atlas-admin-tutors.png"
                    alt="Atlas tutor management workspace showing live tutor records and admin actions."
                  />
                </div>
                <figcaption className="atlas-screenshot-caption">
                  <span>Actual Atlas product capture</span>
                  <strong>Tutor management workspace</strong>
                </figcaption>
              </figure>

              <div className="atlas-copy reveal--right">
                <div className="atlas-badge">Live product screenshot</div>
                {atlasProofPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className={`proof-item reveal reveal--${index + 1} lift-card`}
                  >
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
                <a
                  className="button button--primary"
                  href="https://atlas.coreboxsystems.com"
                >
                  Explore Atlas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--wide" id="ledger">
          <div className="container">
            <div className="section-heading section-heading--tight reveal reveal--1">
              <p className="eyebrow">Beta Product</p>
              <h2>Fort Knox Ledger is built for private asset records.</h2>
              <p>
                Fort Knox Ledger is a browser-friendly precious-metals ledger
                for personal vault records, valuation references, alerts, and
                reports. It is designed for controlled beta testing under
                ledger.coreboxsystems.com.
              </p>
            </div>

            <div className="ledger-proof">
              <div className="ledger-vault-panel reveal--left">
                <div className="vault-door" aria-hidden="true">
                  <div className="vault-door__ring" />
                  <div className="vault-door__dial">
                    <span />
                  </div>
                </div>
                <div className="ledger-vault-panel__copy">
                  <span>Product access</span>
                  <strong>ledger.coreboxsystems.com</strong>
                  <p>
                    Beta-ready app experience with private account ledgers,
                    spot-price tools, alert setup, and owner console controls.
                  </p>
                </div>
              </div>

              <div className="ledger-copy reveal--right">
                {ledgerProofPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className={`proof-item reveal reveal--${index + 1} lift-card`}
                  >
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
                <div className="ledger-disclaimer lift-card">
                  Fort Knox Ledger provides inventory math, weight conversions,
                  market reference data, and reporting tools. It is not
                  investment, financial, tax, legal, appraisal, or trading
                  advice.
                </div>
                <a
                  className="button button--primary"
                  href="https://ledger.coreboxsystems.com"
                >
                  Open Fort Knox Ledger
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="section-heading section-heading--tight reveal reveal--1">
              <p className="eyebrow">Approach</p>
              <h2>Built for operational clarity.</h2>
              <p>
                CoreBox Systems creates software for environments where loose
                process creates real friction. Our products are designed to make
                the work easier to see, easier to manage, and easier to improve.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className={`principle-card reveal reveal--${index + 1} lift-card`}
                >
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--muted">
          <div className="container">
            <div className="section-heading section-heading--tight reveal reveal--1">
              <p className="eyebrow">Expansion Areas</p>
              <h2>Where CoreBox is expanding.</h2>
              <p>
                Atlas and Fort Knox Ledger are the first active product tracks.
                The broader CoreBox roadmap extends the same practical design
                approach into additional systems where guidance, coordination,
                and reliable execution matter.
              </p>
            </div>

            <div className="expansion-grid">
              {expansionAreas.map((area, index) => (
                <article
                  key={area.title}
                  className={`expansion-card reveal reveal--${index + 1} lift-card`}
                >
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy reveal--left">
              <p className="eyebrow">Contact</p>
              <h2>Bring structure to the work that matters.</h2>
              <p>
                Whether you are evaluating Atlas or interested in what CoreBox
                Systems is building next, start the conversation here.
              </p>
            </div>

            <div className="contact-panel reveal--right">
              <div className="contact-lanes">
                <div className="lift-card">
                  <span>Atlas inquiries</span>
                  <strong>For tutoring and education teams</strong>
                </div>
                <div className="lift-card">
                  <span>Fort Knox Ledger</span>
                  <strong>For private precious-metals ledger beta access</strong>
                </div>
                <div className="lift-card">
                  <span>Partnerships</span>
                  <strong>For operators, collaborators, and referrals</strong>
                </div>
                <div className="lift-card">
                  <span>Future products</span>
                  <strong>For early conversations around expansion areas</strong>
                </div>
              </div>
              <div className="contact-actions">
                <a
                  className="button button--primary"
                  href="https://atlas.coreboxsystems.com/login"
                >
                  Atlas Login
                </a>
                <a
                  className="button button--secondary"
                  href="https://ledger.coreboxsystems.com"
                >
                  Open Fort Knox Ledger
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="footer-brand__lockup" aria-label="CoreBox Systems">
              <img
                className="brand-logo brand-logo--footer"
                src="/assets/corebox-systems-logo.png"
                alt="CoreBox Systems"
              />
            </div>
            <p>CoreBox Systems builds focused software for real-world operations.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Products</span>
              <a href="https://atlas.coreboxsystems.com">Atlas</a>
              <a href="https://ledger.coreboxsystems.com">Fort Knox Ledger</a>
            </div>
            <div>
              <span>Company</span>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <span>Access</span>
              <a href="https://atlas.coreboxsystems.com">Explore Atlas</a>
              <a href="https://ledger.coreboxsystems.com">Open Fort Knox Ledger</a>
              <a href="#contact">Contact CoreBox</a>
              <a href="https://atlas.coreboxsystems.com/login">Atlas Login</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {year} CoreBox Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
