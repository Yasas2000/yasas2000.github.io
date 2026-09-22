import { SHOW_PLACEHOLDERS } from "../data/content.js";

/** A row of links. Entries with an empty url show as placeholders until filled in. */
export default function Links({ links = [] }) {
  const visible = links.filter((l) => l.url || SHOW_PLACEHOLDERS);
  if (!visible.length) return null;
  return (
    <p className="linkrow">
      {visible.map((l) =>
        l.url ? (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ) : (
          <span key={l.label} className="linkph" title="Add the URL in src/data/content.js">
            {l.label}: add link
          </span>
        )
      )}
    </p>
  );
}
