import Image from "next/image";
import { MEDIA_QUERY } from "@/lib/constants";
import { HERO_COPY } from "@/lib/content/hero";
import { FULL_NAME, PROFILE } from "@/lib/content/profile";
import { cn } from "@/lib/utils/cn";
import styles from "./PortraitFrame.module.scss";

// There is a single hero on the page, so a fixed id is unique.
const DIAGONAL_GRADIENT_ID = "hero-portrait-diagonal";

// Rendered width of the frame: its max-width on desktop and below.
const PHOTO_SIZES = `${MEDIA_QUERY.desktop} 480px, 380px`;

const CORNERS = ["topLeft", "topRight", "bottomLeft", "bottomRight"] as const;

type PortraitPhotoProps = {
  src: string;
};

function PortraitPhoto({ src }: PortraitPhotoProps) {
  return (
    <div className={styles.media}>
      {/* Eager: the preloader covers the hero first, so the photo is ready when it opens. */}
      <Image
        src={src}
        alt={`Portrait of ${FULL_NAME}`}
        fill
        sizes={PHOTO_SIZES}
        loading="eager"
        className={styles.photo}
      />
    </div>
  );
}

/** The design's stand-in until there is a photo: a soft silhouette and a caption. */
function PortraitPlaceholder() {
  return (
    <div className={styles.media} aria-hidden="true">
      <span className={styles.silhouette} />
      <p className={styles.placeholder}>
        {HERO_COPY.portraitPlaceholder.title}
        <em>{HERO_COPY.portraitPlaceholder.hint}</em>
      </p>
    </div>
  );
}

/** Portrait composition: duotone photo or placeholder, blueprint overlay, corner marks, badges. */
export function PortraitFrame() {
  return (
    <div className={styles.portrait}>
      <div className={styles.frame}>
        {PROFILE.portraitUrl ? (
          <PortraitPhoto src={PROFILE.portraitUrl} />
        ) : (
          <PortraitPlaceholder />
        )}

        <svg
          className={styles.overlay}
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={DIAGONAL_GRADIENT_ID} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="0.5" stopColor="rgba(255, 255, 255, 0.35)" />
              <stop offset="1" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
          <line className={styles.lineStrong} x1="0" y1="120" x2="400" y2="120" strokeWidth="0.5" />
          <line className={styles.lineStrong} x1="0" y1="320" x2="400" y2="320" strokeWidth="0.5" />
          <line className={styles.lineSoft} x1="60" y1="0" x2="60" y2="500" strokeWidth="0.5" />
          <line className={styles.lineSoft} x1="340" y1="0" x2="340" y2="500" strokeWidth="0.5" />
          <g className={styles.target}>
            <path d="M 140 200 L 140 180 L 160 180" />
            <path d="M 260 180 L 280 180 L 280 200" />
            <path d="M 280 280 L 280 300 L 260 300" />
            <path d="M 160 300 L 140 300 L 140 280" />
          </g>
          <text className={styles.coordinates} x="210" y="172">
            X:210 Y:240
          </text>
          <line
            x1="0"
            y1="500"
            x2="400"
            y2="0"
            stroke={`url(#${DIAGONAL_GRADIENT_ID})`}
            strokeWidth="0.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>

        {CORNERS.map((corner) => (
          <span key={corner} className={cn(styles.corner, styles[corner])} />
        ))}
      </div>

      <p className={styles.badge}>
        <strong>{PROFILE.experienceYears}+</strong>
        {HERO_COPY.portraitBadge}
      </p>
      <p className={styles.tech}>{HERO_COPY.portraitTech}</p>
    </div>
  );
}
