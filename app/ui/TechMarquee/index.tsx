import { useState } from "react";
import "./TechMarquee.css";

export interface Tool {
  name: string;
  /** URL to the tool's icon/logo (SVG, PNG, etc.) */
  icon: string;
}

export interface TechMarqueeProps {
  /** Array of tools to display */
  tools?: Tool[];
  /** Label shown above the marquee */
  label?: string;
  /** Animation duration in seconds — higher value = slower scroll (default: 40) */
  speed?: number;
  /** Pause the scroll animation on mouse hover (default: true) */
  pauseOnHover?: boolean;
  /** Show tool name labels below each icon (default: true) */
  showNames?: boolean;
}

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const defaultTools: Tool[] = [
  // ── Core Web ─────────────────────────────────────────────────────────────
  { name: "HTML5",        icon: `${BASE}/html5/html5-original.svg` },
  { name: "CSS3",         icon: `${BASE}/css3/css3-original.svg` },
  { name: "JavaScript",   icon: `${BASE}/javascript/javascript-original.svg` },
  { name: "TypeScript",   icon: `${BASE}/typescript/typescript-original.svg` },

  // ── CSS Frameworks & Preprocessors ───────────────────────────────────────
  { name: "Tailwind CSS", icon: `${BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap",    icon: `${BASE}/bootstrap/bootstrap-original.svg` },
//   { name: "Bulma",        icon: `${BASE}/bulma/bulma-plain.svg` },
  { name: "Sass",         icon: `${BASE}/sass/sass-original.svg` },
//   { name: "Less",         icon: `${BASE}/less/less-plain-wordmark.svg` },

  // ── JS Frameworks & Libraries ────────────────────────────────────────────
  { name: "React",        icon: `${BASE}/react/react-original.svg` },
//   { name: "Angular",      icon: `${BASE}/angularjs/angularjs-original.svg` },
  { name: "Vue.js",       icon: `${BASE}/vuejs/vuejs-original.svg` },
  { name: "Next.js",      icon: `${BASE}/nextjs/nextjs-original.svg` },
//   { name: "Nuxt.js",      icon: `${BASE}/nuxtjs/nuxtjs-original.svg` },
//   { name: "Svelte",       icon: `${BASE}/svelte/svelte-original.svg` },
//   { name: "Preact",       icon: `${BASE}/preact/preact-original.svg` },

  // ── Build Tools ──────────────────────────────────────────────────────────
  { name: "Vite",         icon: `${BASE}/vite/vite-original.svg` },
  { name: "Webpack",      icon: `${BASE}/webpack/webpack-original.svg` },

  // ── Package Managers ─────────────────────────────────────────────────────
  { name: "npm",          icon: `${BASE}/npm/npm-original-wordmark.svg` },
  { name: "Yarn",         icon: `${BASE}/yarn/yarn-original.svg` },

  // ── State / Data Fetching ────────────────────────────────────────────────
  { name: "Redux",        icon: `${BASE}/redux/redux-original.svg` },
  { name: "Axios",        icon: `${BASE}/axios/axios-plain.svg` },

  // ── Animation & Visualization ────────────────────────────────────────────
  { name: "Three.js",     icon: `${BASE}/threejs/threejs-original.svg` },
  { name: "D3.js",        icon: `${BASE}/d3js/d3js-original.svg` },
  { name: "Chart.js",     icon: `${BASE}/chartjs/chartjs-original.svg` },

  // ── UI Component Libraries ───────────────────────────────────────────────
  { name: "Material UI",  icon: `${BASE}/materialui/materialui-original.svg` },
  { name: "Ant Design",   icon: `${BASE}/antdesign/antdesign-original.svg` },

  // ── Testing ──────────────────────────────────────────────────────────────
//   { name: "Jest",         icon: `${BASE}/jest/jest-plain.svg` },
//   { name: "Cypress",      icon: `${BASE}/cypressio/cypressio-original.svg` },
//   { name: "Playwright",   icon: `${BASE}/playwright/playwright-plain.svg` },

  // ── Version Control ──────────────────────────────────────────────────────
  { name: "Git",          icon: `${BASE}/git/git-original.svg` },
  { name: "GitHub",       icon: `${BASE}/github/github-original.svg` },
  { name: "GitLab",       icon: `${BASE}/gitlab/gitlab-original.svg` },
  { name: "Bitbucket",    icon: `${BASE}/bitbucket/bitbucket-original.svg` },

  // ── Tooling & Design ─────────────────────────────────────────────────────
  { name: "Postman",      icon: `${BASE}/postman/postman-original.svg` },
  { name: "Figma",        icon: `${BASE}/figma/figma-original.svg` },
  { name: "Adobe XD",     icon: `${BASE}/xd/xd-plain.svg` },
];


export default function TechMarquee({
  tools = defaultTools,
  label = "Tech Stack",
  speed = 40,
  pauseOnHover = true,
  showNames = true,
}: TechMarqueeProps) {
  const [paused, setPaused] = useState<boolean>(false);

  // Duplicate list so the second copy picks up seamlessly when the first ends
  const items: Tool[] = [...tools, ...tools];

  return (
    <div className="marquee-root">
      {label && <p className="marquee-label">{label}</p>}

      <div
        className="marquee-track-wrapper"
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`marquee-track${paused ? " marquee-track--paused" : ""}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {items.map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="marquee-item-group">
              <div className="marquee-item" title={tool.name}>
                <div className="marquee-icon-wrap">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    loading="lazy"
                    width={30}
                    height={30}
                  />
                </div>
                {showNames && (
                  <span className="marquee-name">{tool.name}</span>
                )}
              </div>
              {i < items.length - 1 && (
                <div className="marquee-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}