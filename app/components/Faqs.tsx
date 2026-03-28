"use client";

import React, { useState } from 'react';
import './Faqs.css';

interface FaqItemProps {
  icon: React.ReactNode;
  shadow: string;
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ icon, shadow, question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="faq-header-left">
          <span className="faq-icon-box" style={{ boxShadow: shadow }}>
            {icon}
          </span>
          <div className="faq-title">{question}</div>
        </div>
        <div className="faq-toggle">
          {isOpen ? '-' : '+'}
        </div>
      </div>
      <div className="faq-content">
        <div className="faq-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const Faqs: React.FC = () => {
  return (
    <section id="faqs">
      <div className="section-label">Common Questions</div>
      <h2 className="section-title reveal">
        Frequently Asked <span>Questions</span>
      </h2>
      <div className="faq-list">
        
        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>}
          shadow="inset 4.99px -1.21px 10px rgba(0,0,0,0.1), inset -4.99px 1.21px 10px rgba(255,255,255,0.05)"
          question="What types of projects do you work on?"
        >
          <p>Primarily: B2B/B2C SaaS, web platforms, content sites with technical SEO, Stripe integrations. Less suitable: native mobile applications.</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>}
          shadow="inset 4.10px -2.51px 10px rgba(0,0,0,0.1), inset -4.10px 2.51px 10px rgba(255,255,255,0.05)"
          question="Do you work remotely or on-site?"
        >
          <p>The two options: remote by default (all of France), on-site possible depending on location (Toulouse, Bordeaux), or hybrid (remote + a few days on-site per month).</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>}
          shadow="inset 3.04px -3.00px 10px rgba(0,0,0,0.1), inset -3.04px 3.00px 10px rgba(255,255,255,0.05)"
          question="Are you available for long-term assignments?"
        >
          <p>Yes. I work on projects lasting 1 week (audit), 1 to 4 weeks (feature development), or 1 to 6 months (complete product). Availability to be confirmed based on current schedule.</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
          shadow="inset 2.22px -3.02px 10px rgba(0,0,0,0.1), inset -2.22px 3.02px 10px rgba(255,255,255,0.05)"
          question="Do you only use Next.js / React?"
        >
          <p>Main stack: Next.js, React, Supabase, Vercel, Stripe. But I adapt: Angular for existing projects, PHP/SQL for maintenance. I prioritize stack consistency.</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>}
          shadow="inset 1.88px -3.25px 10px rgba(0,0,0,0.1), inset -1.88px 3.25px 10px rgba(255,255,255,0.05)"
          question="Do you only use Malt?"
        >
          <p>Yes, to secure the freelancer/client relationship: clear quotes, secure payment, dispute resolution if needed. No direct invoicing.</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /></svg>}
          shadow="inset 1.61px -3.39px 10px rgba(0,0,0,0.1), inset -1.61px 3.39px 10px rgba(255,255,255,0.05)"
          question="Do you offer post-delivery maintenance?"
        >
          <p>Yes. Occasional support (fixes, minor updates) or a monthly maintenance contract (support + ongoing updates). To be defined at the end of the project.</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>}
          shadow="inset 1.40px -3.48px 10px rgba(0,0,0,0.1), inset -1.40px 3.48px 10px rgba(255,255,255,0.05)"
          question="What is your geographical area?"
        >
          <p>Based in Toulouse, France. Remote: Nationwide. On-site: Primarily in the Southwest (Toulouse, Bordeaux).</p>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></svg>}
          shadow="inset 1.26px -3.53px 10px rgba(0,0,0,0.1), inset -1.26px 3.53px 10px rgba(255,255,255,0.05)"
          question="Do you do design/UX?"
        >
          <div>
            <p>I'm a developer, not a designer. <br />If you appreciated the <span className="highlight-text">style</span> and <span className="highlight-text">clarity</span> of this portfolio, it's exactly the type of interface I can deliver.</p>
            <div className="faq-list-group">
              <p className="faq-list-title">I can :</p>
              <ul className="faq-bullets">
                <li>integrate a provided Figma model (faithful integration)</li>
                <li>Designing functional, clean, and efficient interfaces with <span className="underline-text">Tailwind / heroui</span> / shadcn</li>
              </ul>
            </div>
            <div className="faq-list-group">
              <p className="faq-list-title">I am not proposing:</p>
              <ul className="faq-bullets">
                <li>UX workshops</li>
                <li>design specifications</li>
                <li>advanced graphic design or complete branding</li>
              </ul>
            </div>
            <p className="faq-summary">
              <span className="highlight-text">My role is to deliver a reliable</span>, <span className="highlight-text">usable</span> and <span className="highlight-text">maintainable</span> product, with a clean and consistent design, oriented towards use and performance.
            </p>
          </div>
        </FaqItem>

        <FaqItem
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>}
          shadow="inset 0.92px -3.63px 10px rgba(0,0,0,0.1), inset -0.92px 3.63px 10px rgba(255,255,255,0.05)"
          question="Why the name LastBrain?"
        >
          <div>
            <p>This is a diminutive formed from:</p> 
            <ul className="faq-bullets-alt">
              <li>• “L” for Laurent</li>
              <li>• “Ast” for Astruc</li>
              <li>• “Brain” for intellectual work, reflection, and software design</li>
            </ul>
            <p className="faq-italic">LastBrain is simply my knowledge and experience put at the service of your projects.</p>
          </div>  
        </FaqItem>  

      </div>
    </section>
  );
};

export default Faqs;
