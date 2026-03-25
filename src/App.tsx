import { useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Products', href: '#products' },
  { label: 'Atlas', href: '#atlas' },
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
    title: 'Home Automation',
    body: 'Software experiences for connected home environments that make control, status, and routines easier to manage.',
  },
  {
    title: 'Veteran Guidance Tools',
    body: 'Guided tools designed to help veterans navigate benefits workflows with more clarity, structure, and confidence.',
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

const heroSignals = [
  'Parent brand built for multiple product tracks',
  'Atlas is live now for education operations',
  'Expansion areas stay visible without competing with the live product',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="site-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-lockup" href="#top" onClick={closeMenu}>
            <img
              className="brand-lockup__logo"
              src="/assets/corebox-systems-logo.png"
              alt="Corebox Systems"
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
              <a
                className="header-login"
                href="https://atlas.coreboxsystems.com/login"
                onClick={closeMenu}
              >
                Atlas Login
              </a>
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
              <p className="eyebrow">Corebox Systems</p>
              <h1>Software for systems that have to work.</h1>
              <p className="hero-support">
                Corebox Systems builds focused software for operational
                environments where clarity, control, and execution matter. Our
                first live product, Atlas, helps education teams manage
                scheduling, communication, and student workflows in one place.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contact">
                  Request Demo
                </a>
                <a
                  className="button button--secondary"
                  href="https://atlas.coreboxsystems.com"
                >
                  Explore Atlas
                </a>
              </div>
              <p className="hero-proof">Live product: Atlas CRM</p>
            </div>

            <div className="hero-visual" aria-label="Corebox systems overview">
              <div className="hero-visual__panel hero-visual__panel--brand">
                <div className="panel-kicker">Parent Company</div>
                <img
                  className="hero-logo"
                  src="/assets/corebox-systems-logo.png"
                  alt="Corebox Systems logo"
                />
                <p>
                  Focused software for education operations, connected systems,
                  and guided service workflows.
                </p>
              </div>

              <div className="hero-visual__stack">
                <div className="hero-visual__panel hero-visual__panel--signal">
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

                <div className="hero-visual__panel hero-visual__panel--notes">
                  <div className="panel-kicker">Company Direction</div>
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
            <div className="section-heading">
              <p className="eyebrow">Products</p>
              <h2>Focused products. Structured systems.</h2>
              <p>
                Corebox Systems is built to develop practical software for
                operations-heavy environments. Atlas is live today, and future
                products will extend the same systems-first approach into
                connected environments, guided workflows, and service-driven
                tools.
              </p>
            </div>

            <div className="products-grid">
              <article className="feature-card feature-card--atlas">
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

              <article className="feature-card feature-card--support">
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
            <div className="section-heading section-heading--tight">
              <p className="eyebrow">Live Product</p>
              <h2>Atlas brings structure to education operations.</h2>
              <p>
                Built for tutoring and education teams, Atlas helps keep
                scheduling, communication, and student progress connected in one
                operating system.
              </p>
            </div>

            <div className="atlas-proof">
              <div className="atlas-window">
                <div className="atlas-window__topbar">
                  <span>Atlas workflow preview</span>
                  <span>Education operations</span>
                </div>

                <div className="atlas-window__body">
                  <aside className="atlas-sidebar">
                    <div className="atlas-sidebar__brand">Atlas</div>
                    <div className="atlas-sidebar__link is-active">Dashboard</div>
                    <div className="atlas-sidebar__link">Students</div>
                    <div className="atlas-sidebar__link">Sessions</div>
                    <div className="atlas-sidebar__link">Billing</div>
                    <div className="atlas-sidebar__link">Payroll</div>
                  </aside>

                  <div className="atlas-content">
                    <div className="atlas-metrics">
                      <div className="atlas-metric">
                        <span>Today&apos;s sessions</span>
                        <strong>18</strong>
                      </div>
                      <div className="atlas-metric">
                        <span>Open alerts</span>
                        <strong>3</strong>
                      </div>
                      <div className="atlas-metric">
                        <span>Student progress</span>
                        <strong>92%</strong>
                      </div>
                      <div className="atlas-metric">
                        <span>Revenue posted</span>
                        <strong>$4.8k</strong>
                      </div>
                    </div>

                    <div className="atlas-panels">
                      <div className="atlas-panel">
                        <div className="atlas-panel__heading">
                          <strong>Today&apos;s sessions</strong>
                          <span>6 upcoming</span>
                        </div>
                        <div className="session-row">
                          <div>
                            <strong>9:00 AM</strong>
                            <span>Algebra review</span>
                          </div>
                          <span>Scheduled</span>
                        </div>
                        <div className="session-row">
                          <div>
                            <strong>11:30 AM</strong>
                            <span>Parent check-in</span>
                          </div>
                          <span>Confirmed</span>
                        </div>
                        <div className="session-row">
                          <div>
                            <strong>3:00 PM</strong>
                            <span>Progress summary</span>
                          </div>
                          <span>Ready</span>
                        </div>
                      </div>

                      <div className="atlas-panel atlas-panel--accent">
                        <div className="atlas-panel__heading">
                          <strong>Operational alerts</strong>
                          <span>Needs review</span>
                        </div>
                        <div className="alert-row">
                          <strong>Insufficient funds</strong>
                          <span>2 sessions awaiting action</span>
                        </div>
                        <div className="alert-row">
                          <strong>Deletion approval</strong>
                          <span>1 request pending admin review</span>
                        </div>
                      </div>

                      <div className="atlas-panel atlas-panel--wide">
                        <div className="atlas-panel__heading">
                          <strong>Learning workflow</strong>
                          <span>Shared across teams</span>
                        </div>
                        <div className="progress-track">
                          <span className="progress-step is-complete">
                            Session notes
                          </span>
                          <span className="progress-step is-complete">
                            Parent summary
                          </span>
                          <span className="progress-step">Homework follow-up</span>
                          <span className="progress-step">Billing trace</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="atlas-copy">
                <div className="atlas-badge">Atlas workflow preview</div>
                {atlasProofPoints.map((point) => (
                  <article key={point.title} className="proof-item">
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
                <a className="button button--primary" href="#contact">
                  Request Atlas Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="section-heading section-heading--tight">
              <p className="eyebrow">Approach</p>
              <h2>Built for operational clarity.</h2>
              <p>
                Corebox Systems creates software for environments where loose
                process creates real friction. Our products are designed to make
                the work easier to see, easier to manage, and easier to improve.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((principle) => (
                <article key={principle.title} className="principle-card">
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--muted">
          <div className="container">
            <div className="section-heading section-heading--tight">
              <p className="eyebrow">Expansion Areas</p>
              <h2>Where Corebox is expanding.</h2>
              <p>
                Atlas is the first live product. The broader Corebox roadmap
                extends the same practical design approach into additional
                systems where guidance, coordination, and reliable execution
                matter.
              </p>
            </div>

            <div className="expansion-grid">
              {expansionAreas.map((area) => (
                <article key={area.title} className="expansion-card">
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Bring structure to the work that matters.</h2>
              <p>
                Whether you are evaluating Atlas or interested in what Corebox
                Systems is building next, start the conversation here.
              </p>
            </div>

            <div className="contact-panel">
              <div className="contact-lanes">
                <div>
                  <span>Atlas demos</span>
                  <strong>For tutoring and education teams</strong>
                </div>
                <div>
                  <span>Partnerships</span>
                  <strong>For operators, collaborators, and referrals</strong>
                </div>
                <div>
                  <span>Future products</span>
                  <strong>For early conversations around expansion areas</strong>
                </div>
              </div>
              <div className="contact-actions">
                <a className="button button--primary" href="#top">
                  Request Demo
                </a>
                <a className="button button--secondary" href="#contact">
                  Contact Corebox
                </a>
                <a
                  className="button button--ghost"
                  href="https://atlas.coreboxsystems.com/login"
                >
                  Atlas Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/assets/corebox-systems-logo.png"
              alt="Corebox Systems"
            />
            <p>Corebox Systems builds focused software for real-world operations.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Products</span>
              <a href="https://atlas.coreboxsystems.com">Atlas</a>
            </div>
            <div>
              <span>Company</span>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <span>Access</span>
              <a href="#contact">Request Demo</a>
              <a href="#contact">Contact Corebox</a>
              <a href="https://atlas.coreboxsystems.com/login">Atlas Login</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {year} Corebox Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
