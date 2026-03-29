"use client";

import React, { useState, useRef, useEffect } from "react";
import "./Faqs.css";

interface FaqData {
  icon: React.ReactNode;
  shadow: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: FaqData[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    shadow:
      "inset 4.99px -1.21px 10px rgba(0,0,0,0.1), inset -4.99px 1.21px 10px rgba(255,255,255,0.05)",
    question: "What types of projects do you work on?",
    answer: (
      <p>
        Primarily: B2B/B2C SaaS, web platforms, content sites with technical
        SEO, Stripe integrations. Less suitable: native mobile applications.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    shadow:
      "inset 4.10px -2.51px 10px rgba(0,0,0,0.1), inset -4.10px 2.51px 10px rgba(255,255,255,0.05)",
    question: "Do you work remotely or on-site?",
    answer: (
      <p>
        Remote by default (all of France), on-site possible depending on
        location (Toulouse, Bordeaux), or hybrid (remote + a few days on-site
        per month).
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
    shadow:
      "inset 3.04px -3.00px 10px rgba(0,0,0,0.1), inset -3.04px 3.00px 10px rgba(255,255,255,0.05)",
    question: "Are you available for long-term assignments?",
    answer: (
      <p>
        Yes. I work on projects lasting 1 week (audit), 1–4 weeks (feature
        development), or 1–6 months (complete product). Availability confirmed
        based on current schedule.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    shadow:
      "inset 2.22px -3.02px 10px rgba(0,0,0,0.1), inset -2.22px 3.02px 10px rgba(255,255,255,0.05)",
    question: "Do you only use Next.js / React?",
    answer: (
      <p>
        Main stack: Next.js, React, Supabase, Vercel, Stripe. But I adapt:
        Angular for existing projects, PHP/SQL for maintenance. I prioritize
        stack consistency.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    shadow:
      "inset 1.88px -3.25px 10px rgba(0,0,0,0.1), inset -1.88px 3.25px 10px rgba(255,255,255,0.05)",
    question: "Do you only use Malt?",
    answer: (
      <p>
        Yes, to secure the freelancer/client relationship: clear quotes, secure
        payment, dispute resolution if needed. No direct invoicing.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
      </svg>
    ),
    shadow:
      "inset 1.61px -3.39px 10px rgba(0,0,0,0.1), inset -1.61px 3.39px 10px rgba(255,255,255,0.05)",
    question: "Do you offer post-delivery maintenance?",
    answer: (
      <p>
        Yes. Occasional support (fixes, minor updates) or a monthly maintenance
        contract (support + ongoing updates). To be defined at the end of the
        project.
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    shadow:
      "inset 1.40px -3.48px 10px rgba(0,0,0,0.1), inset -1.40px 3.48px 10px rgba(255,255,255,0.05)",
    question: "What is your geographical area?",
    answer: (
      <p>
        Based in Toulouse, France. Remote: Nationwide. On-site: Primarily in the
        Southwest (Toulouse, Bordeaux).
      </p>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 18V5" />
        <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </svg>
    ),
    shadow:
      "inset 0.92px -3.63px 10px rgba(0,0,0,0.1), inset -0.92px 3.63px 10px rgba(255,255,255,0.05)",
    question: "Do you do design/UX?",
    answer: (
      <div>
        <p>
          I'm a developer, not a designer. If you appreciated the{" "}
          <span className="highlight-text">style</span> and{" "}
          <span className="highlight-text">clarity</span> of this portfolio,
          it's exactly the type of interface I can deliver.
        </p>
        <div className="faq-list-group">
          <p className="faq-list-title">I can:</p>
          <ul className="faq-bullets">
            <li>Integrate a provided Figma model (faithful integration)</li>
            <li>
              Design functional, clean interfaces with{" "}
              <span className="underline-text">Tailwind / heroui / shadcn</span>
            </li>
          </ul>
        </div>
        <p className="faq-summary">
          <span className="highlight-text">
            My role is to deliver a reliable
          </span>
          , <span className="highlight-text">usable</span> and{" "}
          <span className="highlight-text">maintainable</span> product.
        </p>
      </div>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    shadow:
      "inset 1.26px -3.53px 10px rgba(0,0,0,0.1), inset -1.26px 3.53px 10px rgba(255,255,255,0.05)",
    question: "Why the name LastBrain?",
    answer: (
      <div>
        <p>This is a diminutive formed from:</p>
        <ul className="faq-bullets-alt">
          <li>• "L" for Laurent</li>
          <li>• "Ast" for Astruc</li>
          <li>
            • "Brain" for intellectual work, reflection, and software design
          </li>
        </ul>
        <p className="faq-italic">
          LastBrain is simply my knowledge and experience put at the service of
          your projects.
        </p>
      </div>
    ),
  },
];

interface FaqItemProps {
  data: FaqData;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ data, isOpen, onToggle }) => {
  const backRef = useRef<HTMLDivElement>(null);
  const [backHeight, setBackHeight] = useState(0);

  // Measure the back face content height so the wrapper can grow to fit it
  useEffect(() => {
    if (backRef.current) {
      setBackHeight(backRef.current.scrollHeight);
    }
  }, []);

  const FRONT_HEIGHT = 72; // px — match your closed faq-item height
  const wrapperHeight = isOpen
    ? Math.max(backHeight, FRONT_HEIGHT)
    : FRONT_HEIGHT;

  return (
    <div
      style={{
        perspective: "1200px",
        height: `${wrapperHeight}px`,
        transition: "height 0.45s cubic-bezier(0.4, 0.2, 0.2, 1)",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          className="faq-item"
          onClick={onToggle}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="faq-header"
            style={{ width: "100%", cursor: "pointer" }}
          >
            <div className="faq-header-left">
              <span className="faq-icon-box" style={{ boxShadow: data.shadow }}>
                {data.icon}
              </span>
              <div className="faq-title">{data.question}</div>
            </div>
            <div className="faq-toggle">+</div>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        {/*
          The back face is pre-rotated 180deg in the DOM.
          When the card flips, rotateX(180deg) on the parent + rotateX(180deg) here = 360deg = face-forward.
          We also apply scaleX(-1) to un-mirror the text that would otherwise read backwards.
        */}
        <div
          ref={backRef}
          className="faq-item"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg) scaleX(-1)",
            overflow: "hidden",
            padding: "16px 20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              {/* Close button — scaleX(-1) on parent means we need scaleX(-1) here too to show "×" correctly */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                  lineHeight: 1,
                  color: "var(--color-muted, #888)",
                  transform: "scaleX(-1)", // counter the parent scaleX(-1) so × reads correctly
                  padding: "0 4px",
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div
              className="faq-contet-inner"
              style={{ transform: "scaleX(-1)" }}
            >
              {/* scaleX(-1) again here to re-mirror the text back to readable */}
              {data.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs">
      <div className="container">
        <div className="section-label">Common Questions</div>
        <h2 className="section-title reveal">
          Frequently Asked <span>Questions</span>
        </h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              data={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
