import { useState } from "react";
import { SHOW_PLACEHOLDERS } from "../data/content.js";

// Turns "assets/x.png" into a URL that works wherever the site is hosted.
export const asset = (path) =>
  path ? import.meta.env.BASE_URL + path.replace(/^\//, "") : "";

/**
 * Shows an image from /public. If the file is missing, shows a dashed
 * placeholder naming the file to add (while SHOW_PLACEHOLDERS is true).
 */
export default function Media({ src, alt = "", className = "", hint }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        className={className}
        src={asset(src)}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }
  if (!SHOW_PLACEHOLDERS) return null;

  return (
    <div
      className={`ph ${className}`}
      role="img"
      aria-label={`Image placeholder: ${alt || src}`}
      title={src ? `Add image at public/${src}` : "Add an image"}
    >
      <span>{hint ?? (src ? `Add image: public/${src}` : "Add image")}</span>
    </div>
  );
}
