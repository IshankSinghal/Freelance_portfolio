// components/Projects.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="section-label">My Work</div>
      <h2 className="section-title reveal">
        Selected <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {/* Project 01 */}
        <div className="project-card reveal reveal-delay-1" data-tilt>
          <div className="card-top">
            <div className="card-pattern"></div>
            <div className="card-emoji">🛒</div>
            <div className="card-num">01</div>
            <div className="card-featured">Featured</div>
          </div>
          <div className="card-body">
            <div className="card-title">ShopNova — E-Commerce</div>
            <div className="card-desc">
              Full-stack e-commerce platform with cart, payments via Stripe, and
              a real-time admin dashboard.
            </div>
            <div className="card-tags">
              <span className="tag">Next.js</span>
              <span className="tag">Tailwind</span>
              <span className="tag">Stripe</span>
              <span className="tag">Prisma</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="project-card reveal reveal-delay-2" data-tilt>
          <div
            className="card-top"
            style={{
              background: "linear-gradient(135deg, #0f1117 0%, #1a1032 100%)",
            }}
          >
            <div
              className="card-pattern"
              style={{
                backgroundImage:
                  "radial-gradient(#38bdf8 1px, transparent 1px)",
              }}
            ></div>
            <div className="card-emoji">📊</div>
            <div className="card-num">02</div>
          </div>
          <div className="card-body">
            <div className="card-title">DataViz Dashboard</div>
            <div className="card-desc">
              Interactive analytics dashboard with live charts, filterable
              tables and export-to-PDF features.
            </div>
            <div className="card-tags">
              <span className="tag">React</span>
              <span className="tag">D3.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>

        {/* Project 03 */}
        <div className="project-card reveal reveal-delay-3" data-tilt>
          <div
            className="card-top"
            style={{
              background: "linear-gradient(135deg, #0d1a0f 0%, #0f1117 100%)",
            }}
          >
            <div
              className="card-pattern"
              style={{
                backgroundImage:
                  "radial-gradient(#22c55e 1px, transparent 1px)",
              }}
            ></div>
            <div className="card-emoji">🤖</div>
            <div className="card-num">03</div>
            <div className="card-featured">Featured</div>
          </div>
          <div className="card-body">
            <div className="card-title">AI Chat Interface</div>
            <div className="card-desc">
              Real-time AI-powered chatbot with streaming responses, custom
              personas, and conversation memory.
            </div>
            <div className="card-tags">
              <span className="tag">Next.js</span>
              <span className="tag">OpenAI API</span>
              <span className="tag">Redis</span>
              <span className="tag">TypeScript</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>

        {/* Project 04 */}
        <div className="project-card reveal reveal-delay-4" data-tilt>
          <div
            className="card-top"
            style={{
              background: "linear-gradient(135deg, #1a0f0d 0%, #1a1117 100%)",
            }}
          >
            <div
              className="card-pattern"
              style={{
                backgroundImage:
                  "radial-gradient(#fb923c 1px, transparent 1px)",
              }}
            ></div>
            <div className="card-emoji">🎨</div>
            <div className="card-num">04</div>
          </div>
          <div className="card-body">
            <div className="card-title">Design Portfolio CMS</div>
            <div className="card-desc">
              Headless CMS-powered design portfolio with instant search,
              filtering, and a custom admin panel.
            </div>
            <div className="card-tags">
              <span className="tag">Astro</span>
              <span className="tag">Sanity</span>
              <span className="tag">Tailwind</span>
              <span className="tag">GSAP</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>

        {/* Project 05 */}
        <div className="project-card reveal reveal-delay-5" data-tilt>
          <div
            className="card-top"
            style={{
              background: "linear-gradient(135deg, #0d0f1a 0%, #111728 100%)",
            }}
          >
            <div
              className="card-pattern"
              style={{
                backgroundImage:
                  "radial-gradient(#a78bfa 1px, transparent 1px)",
              }}
            ></div>
            <div className="card-emoji">📱</div>
            <div className="card-num">05</div>
          </div>
          <div className="card-body">
            <div className="card-title">Fintech Mobile App</div>
            <div className="card-desc">
              Mobile-first financial tracker with expense categorization, budget
              alerts, and data visualization.
            </div>
            <div className="card-tags">
              <span className="tag">React Native</span>
              <span className="tag">Expo</span>
              <span className="tag">Supabase</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>

        {/* Project 06 */}
        <div className="project-card reveal reveal-delay-1" data-tilt>
          <div
            className="card-top"
            style={{
              background: "linear-gradient(135deg, #0a1a18 0%, #0f1117 100%)",
            }}
          >
            <div
              className="card-pattern"
              style={{
                backgroundImage:
                  "radial-gradient(#34d399 1px, transparent 1px)",
              }}
            ></div>
            <div className="card-emoji">🎓</div>
            <div className="card-num">06</div>
          </div>
          <div className="card-body">
            <div className="card-title">EduLearn Platform</div>
            <div className="card-desc">
              Online learning platform with video courses, progress tracking,
              quizzes and certificate generation.
            </div>
            <div className="card-tags">
              <span className="tag">Next.js</span>
              <span className="tag">tRPC</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Mux</span>
            </div>
            <div className="card-links">
              <button className="card-btn primary">↗ Live Demo</button>
              <button className="card-btn">⌥ GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
