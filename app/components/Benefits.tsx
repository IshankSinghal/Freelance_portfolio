import React from 'react';
import './Benefits.css';
import RotatingText from '../ui/RotatingText';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="benefits-section reveal">
      <div className="benefits-container">
        <div className="benefits-content">
          
          <div className="benefits-header">
            <p className="section-label">Benefits</p>
            <h2 className="benefit-section-title" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <p>What all you get:</p>
              <RotatingText
                animatePresenceMode="popLayout"
                style={{
                  color: "var(--accent)",
                  backgroundColor: "#fff",
                  transition: "background-color 0.4s ease, color 0.4s ease",
                  padding: "8px",
                  borderRadius: "10px",
                  fontSize: "1.8rem"
                }}
                texts={[
                  "Webpage Developer",
                  "Landing Page Specialist",
                  "Frontend Expert",
                  "React & Next.js Dev",
                  "Performant Websites Builder"
                ]}
                splitBy="characters"
                staggerFrom="last"
                staggerDuration={0.02}
                rotationInterval={3000}
              />
            </h2>
            <p className="benefits-desc">
              Concrete and measurable results. No vague promises, only what I actually deliver.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefits-card">
              <div className="benefits-card-header">
                <span className="benefits-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </span>
                <div className="benefits-card-title">Stable code</div>
              </div>
              <p className="benefits-card-text">Clean structure, logical breakdown, clear documentation. Code designed to be reused and evolved.</p>
            </div>

            <div className="benefits-card">
              <div className="benefits-card-header">
                <span className="benefits-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                </span>
                <div className="benefits-card-title">Fast deliveries</div>
              </div>
              <p className="benefits-card-text">Broken down into short sprints: you see progress regularly. Deployment to production as soon as possible.</p>
            </div>

            <div className="benefits-card">
              <div className="benefits-card-header">
                <span className="benefits-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                </span>
                <div className="benefits-card-title">Performance &amp; SEO</div>
              </div>  
              <p className="benefits-card-text">Fast pages (Core Web Vitals optimized). On-page SEO: tags, structure, structured data.</p>
            </div>

            <div className="benefits-card">
              <div className="benefits-card-header">
                <span className="benefits-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                </span>
                <div className="benefits-card-title">Stripe payments</div>
              </div>  
              <p className="benefits-card-text">Stripe integration: one-time payments, subscriptions, webhooks. Error handling, smooth user experience.</p>
            </div>
          </div>

          <div className="benefits-footer">
            <a className="btn-primary" href="#contact">
              View the offer <span>→</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;
