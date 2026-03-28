// components/Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Frontend",
      icon: "⚛",
      iconClass: "icon-fe",
      items: [
        { name: "React / Next.js", pct: 95 },
        { name: "TypeScript", pct: 88 },
        { name: "Tailwind CSS", pct: 96 },
        { name: "Framer Motion", pct: 82 },
      ],
      badges: [
        { icon: "⚛", label: "React" },
        { icon: "▲", label: "Next.js" },
        { icon: "🎨", label: "CSS" },
        { icon: "📐", label: "GSAP" },
      ],
    },
    {
      category: "Backend & APIs",
      icon: "⚙",
      iconClass: "icon-be",
      items: [
        { name: "Node.js / Express", pct: 85 },
        { name: "REST / GraphQL APIs", pct: 88 },
        { name: "PostgreSQL / MongoDB", pct: 78 },
        { name: "Supabase / Firebase", pct: 84 },
      ],
      badges: [
        { icon: "🟩", label: "Node.js" },
        { icon: "🛢", label: "PostgreSQL" },
        { icon: "🔥", label: "Firebase" },
        { icon: "📡", label: "REST" },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: "🛠",
      iconClass: "icon-tools",
      items: [
        { name: "Git / GitHub", pct: 95 },
        { name: "Docker / CI-CD", pct: 72 },
        { name: "Figma / Design", pct: 80 },
        { name: "Postman / Testing", pct: 86 },
      ],
      badges: [
        { icon: "🐙", label: "Git" },
        { icon: "🐳", label: "Docker" },
        { icon: "🎯", label: "Figma" },
        { icon: "📬", label: "Postman" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="section-label">Expertise</div>
      <h2 className="section-title reveal">
        Technical <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((cat, index) => (
          <div
            key={cat.category}
            className={`skill-category reveal reveal-delay-${index + 1}`}
          >
            <div className="skill-cat-header">
              <div className={`skill-cat-icon ${cat.iconClass}`}>
                {cat.icon}
              </div>
              <div className="skill-cat-name">{cat.category}</div>
            </div>

            {cat.items.map(({ name, pct }) => (
              <div className="skill-item" key={name}>
                <div className="skill-info">
                  <span className="skill-name">{name}</span>
                  <span className="skill-pct">{pct}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" data-pct={pct}></div>
                </div>
              </div>
            ))}

            <div className="skill-badges">
              {cat.badges.map((badge) => (
                <span className="badge" key={badge.label}>
                  <span className="badge-icon">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
