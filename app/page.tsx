"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import "./style.css";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ScrollVelocity from "./ui/ScrollVelocity/ScrollVelocity";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  LuShieldCheck,
  LuBriefcase,
  LuGift,
  LuMessageSquare,
  LuMail,
} from "react-icons/lu";
import { SiHomebridge } from "react-icons/si";
import LogoLoop from "./ui/LogoLoop";
import TechMarquee from "./ui/TechMarquee";
import SocialIcons from "./ui/Social/SocialIcons";
import Faqs from "./components/Faqs";
import Benefits from "./components/Benefits";
import Trust from "./components/Trust";

// Define types for better TypeScript support
interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  rotX: number;
  rotY: number;
}

interface Skill {
  name: string;
  pct: number;
}

const Portfolio: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);

  const [dark, setDark] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  // Form states
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formMsg, setFormMsg] = useState<string>("");

  const dragRef = useRef<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    rotX: 20,
    rotY: 0,
  });

  /* ── CURSOR GLOW AND CUSTOM CURSOR ─────────────────────────────── */
  useEffect(() => {
    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (customCursorRef.current) {
        customCursorRef.current.style.left = `${mx}px`;
        customCursorRef.current.style.top = `${my}px`;

        const target = e.target as HTMLElement;
        if (
          target.closest(".project-card") ||
          target.closest(".social-pill") ||
          target.closest("button") ||
          target.closest(".nav-links") ||
          target.closest(".faq-item") ||
          target.closest(".floating-chip") ||
          target.closest(".scene") ||
          target.closest(".project-card-wrapper")
        ) {
          customCursorRef.current.classList.add("pulse");
        } else {
          customCursorRef.current.classList.remove("pulse");
        }
      }
    };

    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      cx += (mx - cx) * 0.1;
      cy += (my - cy) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.left = `${cx}px`;
        glowRef.current.style.top = `${cy}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── SCROLL PROGRESS + NAV ───────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      if (progRef.current) {
        progRef.current.style.width = `${scrollPercent * 100}%`;
      }

      if (navbarRef.current) {
        navbarRef.current.classList.toggle("scrolled", window.scrollY > 20);
      }

      // Active nav link highlighting
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "hero";

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });

      setActiveTab((prev) => (prev !== current ? current : prev));

      // Parallax hero orbs
      document.querySelectorAll<HTMLElement>(".hero-orb").forEach((orb, i) => {
        const speed = [0.3, 0.2, 0.4][i];
        orb.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── INTERSECTION OBSERVER ───────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            entry.target
              .querySelectorAll<HTMLElement>(".skill-fill")
              .forEach((bar) => {
                const pct = bar.dataset.pct || "0";
                bar.style.width = `${pct}%`;
              });
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => observer.observe(el));
    document
      .querySelectorAll<HTMLElement>(".skill-category")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ── COUNTER ANIMATION ───────────────────────── */
  useEffect(() => {
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || "0");
      const suffix = "+";
      let current = 0;
      const step = Math.ceil(target / 40);

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 40);
    };

    const heroStats = document.querySelector<HTMLElement>(".hero-stats");
    if (!heroStats) return;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>("[data-count]")
              .forEach(animateCounter);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    counterObserver.observe(heroStats);

    return () => counterObserver.disconnect();
  }, []);

  /* ── 3D TILT ON PROJECT CARDS ────────────────── */
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");
    const handlers: Array<{
      card: HTMLElement;
      onMove: (e: MouseEvent) => void;
      onLeave: () => void;
    }> = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty("--rx", `${-y * 12}deg`);
        card.style.setProperty("--ry", `${x * 12}deg`);
      };

      const onLeave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      handlers.push({ card, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  /* ── CUBE DRAG ───────────────────────────────── */
  useEffect(() => {
    const scene = sceneRef.current;
    const cube = cubeRef.current;
    if (!scene || !cube) return;

    const d = dragRef.current;
    let rafId: number;
    let lastTime = performance.now();

    // Disable CSS animation to handle it smoothly via JS
    cube.style.animation = "none";

    // Start with cube's initial rotation from state
    cube.style.transform = `rotateX(${d.rotX}deg) rotateY(${d.rotY}deg)`;

    const animateCube = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!d.isDragging) {
        // Auto rotate: 360deg in 14s
        d.rotY += (360 / 14000) * delta;
        // Smoothly return rotX to 20deg when not dragging
        d.rotX += (20 - d.rotX) * 0.05;

        cube.style.transform = `rotateX(${d.rotX}deg) rotateY(${d.rotY}deg)`;
      }

      rafId = requestAnimationFrame(animateCube);
    };

    rafId = requestAnimationFrame(animateCube);

    const onDown = (e: MouseEvent) => {
      d.isDragging = true;
      d.startX = e.clientX;
      d.startY = e.clientY;
      scene.style.cursor = "grabbing";
    };

    const onMove = (e: MouseEvent) => {
      if (!d.isDragging) return;

      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;

      d.rotY += dx * 0.4;
      d.rotX -= dy * 0.4;

      cube.style.transform = `rotateX(${d.rotX}deg) rotateY(${d.rotY}deg)`;

      d.startX = e.clientX;
      d.startY = e.clientY;
    };

    const onUp = () => {
      if (!d.isDragging) return;
      d.isDragging = false;
      scene.style.cursor = "grab";
      lastTime = performance.now();
    };

    // Global listeners for smoother drag tracking
    scene.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      scene.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  /* ── THEME TOGGLE ────────────────────────────── */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  /* ── FORM SUBMIT ─────────────────────────────── */
  const submitForm = useCallback(() => {
    setSubmitState("loading");

    setTimeout(() => {
      setSubmitState("success");
      setFormName("");
      setFormEmail("");
      setFormMsg("");
    }, 1800);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor" id="customCursor" ref={customCursorRef} />

      {/* Cursor glow */}
      <div className="cursor-glow" id="cursorGlow" ref={glowRef} />

      {/* Scroll progress */}
      <div className="scroll-progress" id="scrollProgress" ref={progRef} />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav id="navbar" ref={navbarRef}>
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          IS.
        </div>
        <ul
          className="nav-links"
          style={{ display: "flex", gap: "24px", alignItems: "center" }}
        >
          {[
            { id: "hero", label: "Hello", icon: <SiHomebridge /> },
            { id: "trust", label: "Trust", icon: <LuShieldCheck /> },
            { id: "projects", label: "Projects", icon: <LuBriefcase /> },
            { id: "benefits", label: "Offers", icon: <LuGift /> },
            { id: "faqs", label: "FAQs", icon: <LuMessageSquare /> },
            { id: "contact", label: "Contact", icon: <LuMail /> },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: isActive ? "6px" : "0px",
                    color: isActive ? "var(--text)" : "var(--text2)",
                    transition: "all 0.1s ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      width: isActive ? "18px" : "0px",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scale(1)" : "scale(0.5)",
                      overflow: "hidden",
                      color: "var(--accent)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="nav-right">
          <button
            className="theme-toggle"
            title="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: dark ? "rotate(0deg)" : "rotate(360deg)",
              }}
            >
              {dark ? "🌙" : "☀️"}
            </span>
          </button>
          <a href="#contact">
            <button className="nav-cta">Hire Me ↗</button>
          </a>
          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${mobileOpen ? " open" : ""}`}
        id="mobileMenu"
      >
        <a href="#hero" onClick={closeMobile}>
          Hello
        </a>
        <a href="#projects" onClick={closeMobile}>
          Projects
        </a>
        <a href="#skills" onClick={closeMobile}>
          Skills
        </a>
        <a href="#benefits" onClick={closeMobile}>
          Benefits
        </a>
        <a href="#faqs" onClick={closeMobile}>
          FAQs
        </a>
        <a href="#contact" onClick={closeMobile}>
          Contact
        </a>
      </div>

      {/* ── HERO ────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-bg">
          <div className="hero-orb" />
          <div className="hero-orb" />
          <div className="hero-orb" />
          <div className="hero-grid" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" /> Available for freelance work
            </div>
            <h1 className="hero-title">
              <span className="line">
                <span className="line-inner">Frontend &</span>
              </span>
              <span className="line">
                <span className="line-inner grad">Web Developer</span>
              </span>
              <span className="line">
                <span className="line-inner">for Hire.</span>
              </span>
            </h1>
            <p className="hero-sub">
              I craft high-performance, visually stunning web experiences that
              convert visitors into customers — clean code, pixel-perfect UI,
              and seamless interactions.
            </p>
            <div className="hero-btns">
              <a href="#projects">
                <button className="btn-primary">
                  View Work <span>→</span>
                </button>
              </a>
              <a href="#contact">
                <button className="btn-secondary">
                  Contact Me <span>✉</span>
                </button>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num" data-count="50">
                  0
                </div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat">
                <div className="stat-num" data-count="30">
                  0
                </div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-num" data-count="4">
                  0
                </div>
                <div className="stat-label">Years Exp.</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-chip chip1">
              <span className="chip-dot green" />
              Open to work
            </div>
            <div className="floating-chip chip2">
              <span className="chip-dot blue" />
              React Expert
            </div>
            <div className="floating-chip chip3">
              <span className="chip-dot purple" />
              UI Focused
            </div>
            <div className="floating-chip chip4">
              <span className="chip-dot orange" />
              Fast Delivery
            </div>
            <div className="scene" id="scene" ref={sceneRef}>
              <div className="cube-glow" />
              <div className="cube" id="cube" ref={cubeRef}>
                <div className="face front">⚛</div>
                <div className="face back">🚀</div>
                <div className="face left">💡</div>
                <div className="face right">🎨</div>
                <div className="face top">✦</div>
                <div className="face bottom">⬡</div>
              </div>
            </div>
          </div>
          <div
            style={{ width: "100%", gridColumn: "1 / -1", marginTop: "2rem" }}
          >
            <TechMarquee speed={22} label="Built with" />
          </div>
        </div>
      </section>

      <SocialIcons />

      {/* ── TRUST ────────────────────────────────────── */}
      <Trust />
      {/* ── PROJECTS ─────────────────────────────────── */}
      <Projects />
      {/* <Skills /> */}

      {/* <TechMarquee speed={22} label="Built with" /> */}

      {/* ── BENEFITS ─────────────────────────────────── */}
      <Benefits />

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title reveal">
            Let's <span>Work Together</span>
          </h2>
          <div className="contact-wrap">
            <div className="contact-info reveal">
              <h3>
                Have a project in
                <br />
                <span>mind? Let's talk.</span>
              </h3>
              <p>
                I'm currently available for freelance projects and full-time
                opportunities. Whether you need a landing page, a complex web app,
                or a design-to-code conversion — I'm your person.
              </p>
            </div>
            <div className="contact-form reveal reveal-delay-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  id="formName"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@example.com"
                  id="formEmail"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  placeholder="Tell me about your project..."
                  id="formMsg"
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                ></textarea>
              </div>
              {submitState !== "success" && (
                <button
                  className={`form-submit${submitState === "loading" ? " loading" : ""}`}
                  id="formSubmit"
                  onClick={submitForm}
                >
                  <span id="submitText">
                    {submitState === "loading" ? "Sending..." : "Send Message ✉"}
                  </span>
                </button>
              )}
              {submitState === "success" && (
                <div className="form-success show" id="formSuccess">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ────────────────────────────────────── */}
      <Faqs />

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer>
        <div className="footer-logo">IS.</div>
        <div className="footer-copy">
          © 2025 Ishank Singhal. Built with ♥ and AI.
        </div>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
