import { useState } from "react";
import {
  profile, interests, projects, publications, scholarUrl, experience,
  education, testScores, service, honors, skills, certifications,
} from "../data/content.js";
import Media from "./Media.jsx";
import Links from "./Links.jsx";

const Section = ({ id, title, subtitle, aside, intro, children }) => (
  <section id={id}>
    <div className="sec-head">
      <div>
        <h2>{title}</h2>
        {subtitle && <p className="sec-subtitle">{subtitle}</p>}
      </div>
      {aside}
    </div>
    {intro && <p className="sec-intro">{intro}</p>}
    {children}
  </section>
);

const Tags = ({ items = [] }) =>
  items.length ? (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  ) : null;

/* --- SVG icons for social links --- */
const SocialIcon = ({ label }) => {
  switch (label) {
    case "Google Scholar":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
          <path d="M0 12 12 0l12 12h-6v-2L12 4 6 10v2z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
};

/* ---------- Research interests (2x2 tiles) ---------- */
export const Research = () => (
  <Section id="research" title="Research Interests" subtitle="Areas of active investigation and scholarly focus">
    <div className="interests">
      {interests.map((i) => (
        <div key={i.title} className="interest-card">
          <h3>{i.title}</h3>
          <p>{i.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------- Projects (vertical tiles with filter) ---------- */
export function Projects() {
  const types = ["All", ...new Set(projects.map((p) => p.type))];
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected research and software projects I have worked on"
      aside={
        <div className="filters" role="group" aria-label="Filter projects">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              className={filter === t ? "on" : ""}
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
      }
    >
      <div className="project-list">
        {shown.map((p) => (
          <article className="project-tile" key={p.title}>
            <div className="project-tile-header">
              <p className="tile-meta">
                <span className="type-badge">{p.type}</span>
                <span>{p.period}</span>
              </p>
              {p.tag && <span className="status">{p.tag}</span>}
            </div>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.text}</p>
            <div className="project-tile-footer">
              <Tags items={p.tags} />
              <Links links={p.links} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Publications (tile cards) ---------- */
export const Publications = () => (
  <Section
    id="publications"
    title="Publications"
    subtitle="Peer-reviewed conference papers and journal articles"
    aside={<a className="sec-link" href={scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>}
  >
    <div className="pub-list">
      {publications.map((p) => (
        <article className="pub-tile" key={p.title}>
          <div className="pub-tile-side">
            <span className="pub-tile-year">{p.year}</span>
            <span className="pub-tile-type">{p.type}</span>
          </div>
          <div className="pub-tile-body">
            <h3>{p.title}</h3>
            <p className="meta authors">
              {p.authors.map((a, i) => (
                <span key={a}>
                  {a === profile.name ? <b>{a}</b> : a}
                  {i < p.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p className="meta">{p.venue}</p>
            <Links links={p.links} />
          </div>
        </article>
      ))}
    </div>
  </Section>
);

/* ---------- Experience (tile cards with timeline) ---------- */
export const Experience = () => (
  <Section id="experience" title="Experience" subtitle="Professional and academic positions">
    <div className="timeline-wrap">
      {experience.map((e, idx) => (
        <article className={`tl-item${idx === experience.length - 1 ? " tl-last" : ""}`} key={e.period + e.title}>
          <div className="tl-line">
            <span className="tl-dot" />
          </div>
          <div className="tl-card">
            <div className="tl-card-inner">
              <div className="tl-card-logo">
                {"logo" in e ? (
                  <Media src={e.logo} alt={`${e.org} logo`} className="exp-logo" hint="Logo" />
                ) : (
                  <div className="exp-logo-placeholder" />
                )}
              </div>
              <div className="tl-card-body">
                <div className="tl-card-top">
                  <h3>{e.title}</h3>
                  <span className="period-tag">{e.period}</span>
                </div>
                <p className="sub">{e.orgUrl ? <a href={e.orgUrl} target="_blank" rel="noopener noreferrer">{e.org}</a> : e.org}</p>
                {e.text && <p className="tl-desc">{e.text}</p>}
                <Tags items={e.tags} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

/* ---------- Education (tile cards with timeline) ---------- */
export const Education = () => (
  <Section id="education" title="Education" subtitle="Academic qualifications and certifications">
    <div className="timeline-wrap">
      {education.map((e, idx) => (
        <article className={`tl-item${idx === education.length - 1 ? " tl-last" : ""}`} key={e.period + e.title}>
          <div className="tl-line">
            <span className="tl-dot" />
          </div>
          <div className="tl-card">
            <div className="tl-card-inner">
              <div className="tl-card-logo">
                {"logo" in e ? (
                  <Media src={e.logo} alt={`${e.org} logo`} className="edu-logo" hint="Logo" />
                ) : (
                  <div className="edu-logo-placeholder" />
                )}
              </div>
              <div className="tl-card-body">
                <div className="tl-card-top">
                  <h3>{e.title}</h3>
                  <span className="period-tag">{e.period}</span>
                </div>
                <p className="sub">{e.orgUrl ? <a href={e.orgUrl} target="_blank" rel="noopener noreferrer">{e.org}</a> : e.org}</p>
                {e.text && <p className="tl-desc">{e.text}</p>}
                <Tags items={e.tags} />
                <Links links={e.links} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    {testScores.length > 0 && (
      <>
        <h3 className="subhead">Test Scores</h3>
        <div className="timeline-wrap">
          {testScores.map((e, idx) => (
            <article className={`tl-item${idx === testScores.length - 1 ? " tl-last" : ""}`} key={e.period + e.title}>
              <div className="tl-line">
                <span className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-inner">
                  <div className="tl-card-logo">
                    {"logo" in e ? (
                      <Media src={e.logo} alt={`${e.org} logo`} className="edu-logo" hint="Logo" />
                    ) : (
                      <div className="edu-logo-placeholder" />
                    )}
                  </div>
                  <div className="tl-card-body">
                    <div className="tl-card-top">
                      <h3>{e.title}</h3>
                      <span className="period-tag">{e.period}</span>
                    </div>
                    <p className="sub">{e.orgUrl ? <a href={e.orgUrl} target="_blank" rel="noopener noreferrer">{e.org}</a> : e.org}</p>
                    {e.text && <p className="tl-desc">{e.text}</p>}
                    <Tags items={e.tags} />
                    <Links links={e.links} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </>
    )}
  </Section>
);

/* ---------- Service (mini tile cards with org tags) ---------- */
export const Service = () => (
  <Section id="service" title="Academic Service" subtitle="Reviewing, judging, and community contributions">
    <div className="service-grid">
      {service.map((g) => (
        <div key={g.heading} className="service-block">
          <h3 className="service-heading">
            {g.heading === "Reviewing Conference Papers" && <span className="service-icon">📝</span>}
            {g.heading === "Judging" && <span className="service-icon">⚖️</span>}
            {g.heading !== "Reviewing Conference Papers" && g.heading !== "Judging" && <span className="service-icon">📋</span>}
            {g.heading}
          </h3>
          <div className="service-items">
            {g.items.map((it) => (
              <div key={it.text} className="service-chip">
                <p className="service-chip-text">
                  {it.url ? <a href={it.url} target="_blank" rel="noopener noreferrer">{it.text}</a> : it.text}
                </p>
                {it.org && <span className="service-org-tag">{it.org}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------- Honors and Activities (separate section) ---------- */
export const Honors = () => (
  <Section id="honors" title="Honors & Activities" subtitle="Awards, leadership roles, and extracurricular achievements">
    <div className="honors-grid">
      {honors.map((h) => (
        <div key={h.text} className="honor-card">
          <span className="honor-icon">{h.icon}</span>
          <p className="honor-text">{h.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------- Skills and certifications ---------- */
export const Skills = () => (
  <Section id="skills" title="Skills & Certifications" subtitle="Technical competencies and professional credentials">
    <div className="skillgroups">
      {skills.map((s) => (
        <div key={s.group} className="skill-block">
          <h3>{s.group}</h3>
          <Tags items={s.items} />
        </div>
      ))}
    </div>
    <h3 className="subhead">Certifications</h3>
    <div className="cert-list">
      {certifications.map((c) => (
        <div key={c.title} className="cert-tile">
          <div className="cert-content">
            <p className="cert-title">{c.title}</p>
            <p className="cert-issuer">{c.by}</p>
          </div>
          <a
            className="cert-btn"
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate ↗
          </a>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------- Contact (tile card) ---------- */
export const Contact = () => (
  <Section id="contact" title="Get in Touch" subtitle="Open to collaborations, supervision, and research discussions">
    <div className="contact-tile">
      <div className="contact-tile-main">
        <p className="contact-text">{profile.contactText}</p>
        <a className="contact-email-link" href={`mailto:${profile.email}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 7l-10 7L2 7" />
          </svg>
          {profile.email}
        </a>
        <p className="contact-address">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {profile.address}
        </p>
      </div>
      <div className="contact-tile-links">
        <p className="contact-links-label">Find me on</p>
        <div className="social-pills">
          {profile.links.map((l) => (
            <a key={l.label} className="social-pill" href={l.url} target="_blank" rel="noopener noreferrer">
              <SocialIcon label={l.label} />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const Footer = () => (
  <footer>
    <span>&copy; {new Date().getFullYear()} {profile.name}</span>
    <a href="#home">Back to top ↑</a>
  </footer>
);
