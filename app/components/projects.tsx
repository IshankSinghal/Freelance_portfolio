// components/Projects.tsx
import React from "react";
import "./projects.css";

export const projectsData = [
  {
    title: "ShopNova — E-Commerce",
    desc: "Full-stack e-commerce platform with cart, payments via Stripe, and a real-time admin dashboard.",
    tags: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "🛒",
    num: "01",
    featured: true,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    gradient: "linear-gradient(135deg, #0f1117 0%, #1a1032 100%)",
  },
  {
    title: "DataViz Dashboard",
    desc: "Interactive analytics dashboard with live charts, filterable tables and export-to-PDF features.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "📊",
    num: "02",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "linear-gradient(135deg, #0f1117 0%, #1a1032 100%)",
    pattern: "radial-gradient(#38bdf8 1px, transparent 1px)",
  },
  {
    title: "AI Chat Interface",
    desc: "Real-time AI-powered chatbot with streaming responses, custom personas, and conversation memory.",
    tags: ["Next.js", "OpenAI API", "Redis", "TypeScript"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "🤖",
    num: "03",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    gradient: "linear-gradient(135deg, #0d1a0f 0%, #0f1117 100%)",
    pattern: "radial-gradient(#22c55e 1px, transparent 1px)",
  },
  {
    title: "Design Portfolio CMS",
    desc: "Headless CMS-powered design portfolio with instant search, filtering, and a custom admin panel.",
    tags: ["Astro", "Sanity", "Tailwind", "GSAP"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "🎨",
    num: "04",
    featured: false,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",
    gradient: "linear-gradient(135deg, #1a0f0d 0%, #1a1117 100%)",
    pattern: "radial-gradient(#fb923c 1px, transparent 1px)",
  },
  {
    title: "Fintech Mobile App",
    desc: "Mobile-first financial tracker with expense categorization, budget alerts, and data visualization.",
    tags: ["React Native", "Expo", "Supabase"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "📱",
    num: "05",
    featured: false,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    gradient: "linear-gradient(135deg, #0d0f1a 0%, #111728 100%)",
    pattern: "radial-gradient(#a78bfa 1px, transparent 1px)",
  },
  {
    title: "EduLearn Platform",
    desc: "Online learning platform with video courses, progress tracking, quizzes and certificate generation.",
    tags: ["Next.js", "tRPC", "PostgreSQL", "Mux"],
    links: [
      { text: "↗ Live Demo", primary: true },
      { text: "GitHub", primary: false },
    ],
    emoji: "🎓",
    num: "06",
    featured: false,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    gradient: "linear-gradient(135deg, #0a1a18 0%, #0f1117 100%)",
    pattern: "radial-gradient(#34d399 1px, transparent 1px)",
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">My Work</div>
        <h2 className="section-title reveal">
          Selected <span>Projects</span>
        </h2>

        <div className="projects-grid mt-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card-wrapper reveal reveal-delay-${(index % 5) + 1}`}
            >
              {/* Image — never moves */}
              <div className="image-panel">
                {project.image && (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="img-scrim" />
              </div>

              {/* Title — slides from bottom to top on hover */}
              <div className="img-title">
                <div className="project-num">
                  {project.featured && <span className="featured-dot" />}
                  {project.num}
                </div>
                <h3>{project.title}</h3>
              </div>

              {/* Details — fades + drifts in on hover */}
              <div className="details-panel">
                <p className="panel-desc">{project.desc}</p>

                <div className="tags-container">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="buttons-row">
                  {project.links.map((link, i) =>
                    link.primary ? (
                      <button key={i} className="project-btn primary">
                        {link.text}
                      </button>
                    ) : (
                      <button key={i} className="project-btn secondary">
                        <GitHubIcon />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;