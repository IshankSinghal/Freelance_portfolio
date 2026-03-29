import React from 'react';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="trust-section reveal" style={{ padding: 'clamp(80px, 10vh, 140px) clamp(24px, 6vw, 80px)' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            Why should you <span>trust me?</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.7' }}>
            Three reasons to work together: real business experience, results-oriented product vision, and a clear working method.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          marginTop: '40px'
        }}>
          {/* Card 1 */}
          <div className="neu-lg reveal" style={{ 
            padding: '30px', 
            borderRadius: '20px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px var(--shadowDark)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 600 }}>
              <span className="neu-inset-sm" style={{ 
                  padding: '12px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  color: 'var(--accent)',
                  background: 'var(--surface2)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
              </span>
              Field experience
            </div>
            <p style={{ color: 'var(--text2)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Co-manager of a real-world business: daily production, team management, clients, priorities, budget. Strong understanding of business constraints: time, reliability, maintenance, scalability. Code designed for long-term viability.
            </p>
          </div>

          {/* Card 2 */}
          <div className="neu-lg reveal" style={{ 
            padding: '30px', 
            borderRadius: '20px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px var(--shadowDark)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 600 }}>
              <span className="neu-inset-sm" style={{ 
                  padding: '12px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  color: 'var(--accent3)',
                  background: 'var(--surface2)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
              </span>
              Product vision
            </div>
            <p style={{ color: 'var(--text2)', lineHeight: '1.6', fontSize: '0.95rem' }}>
               Real-world products, not demos. Maintainable, readable, and structured code. Architecture designed for scalability. Results-oriented approach: performance, SEO, conversion, monetization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="neu-lg reveal" style={{ 
            padding: '30px', 
            borderRadius: '20px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px var(--shadowDark)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 600 }}>
              <span className="neu-inset-sm" style={{ 
                  padding: '12px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  color: 'var(--accent2)',
                  background: 'var(--surface2)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              </span>
              Clear method
            </div>
            <p style={{ color: 'var(--text2)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Clear breakdown: <br />
              framing → development → delivery → iterations. <br /><br />
              Simple communication. Quotes and contracts via Malt to secure the relationship.
            </p>
          </div>
        </div>

        <div className="reveal flex justify-end show" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
          <a className="btn-secondary" href="#projects">
            See the evidence <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trust;
