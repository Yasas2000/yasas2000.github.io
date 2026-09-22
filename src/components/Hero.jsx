import { profile } from "../data/content.js";
import Media, { asset } from "./Media.jsx";

// A visible unit = one letter plus any marks attached to it (vowel signs, virama).
const units = (str) => str.match(/\p{L}\p{M}*|\s/gu) ?? [];
const count = (s) => units(s).filter((u) => !/^\s$/.test(u)).length;

function Chips({ text, cls }) {
  let n = 0;
  return (
    <div className="chips" lang={cls === "si" ? "si" : undefined}>
      {units(text).map((u, k) =>
        /^\s$/.test(u) ? (
          <span key={k} className="gap" />
        ) : (
          <span key={k} className={`chip ${cls}`} style={{ "--i": n++ }}>{u}</span>
        )
      )}
    </div>
  );
}

function ScriptFigure() {
  return (
    <figure className="scriptfig" aria-label="My name split into characters in Sinhala script and in Romanized form">
      <div className="row">
        <div className="rowlabel">Sinhala script: {count(profile.nativeName)} units</div>
        <Chips text={profile.nativeName} cls="si" />
      </div>
      <div className="row">
        <div className="rowlabel">Romanized: {count(profile.shortName)} letters</div>
        <Chips text={profile.shortName} cls="la" />
      </div>
      <figcaption>
        My name split into its smallest visible units. Writing the same name in Latin letters takes noticeably more pieces, a small taste of the script and tokenization question in <a href="#projects">my Sinhala study</a>.
      </figcaption>
    </figure>
  );
}

/**
 * Convert a Google Drive "view" link to an embeddable/openable link.
 * If the URL contains /file/d/<ID>/view, we keep it as-is (it opens in Drive viewer).
 * This ensures the CV opens properly in a new tab.
 */
function driveUrl(url) {
  return url || "";
}

export default function Hero() {
  const cvHref = profile.cv.startsWith("http") ? profile.cv : asset(profile.cv);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="greeting">{profile.greeting}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <p className="lede">{profile.intro}</p>
        <ul className="taglist" aria-label="Areas">
          {profile.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="hero-links">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href={cvHref} target="_blank" rel="noopener noreferrer">View My CV</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
      <Media src={profile.photo} alt={`Portrait of ${profile.name}`} className="portrait" hint="Add your photo" />
      {profile.nativeName && <ScriptFigure />}
    </section>
  );
}
