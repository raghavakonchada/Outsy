import React from 'react';
import { LeafIcon, SparklesIcon, CompassIcon } from './Icons';

export default function Philosophy({ onGetMission }) {
  const steps = [
    {
      number: '01',
      title: 'Pocket the Infinite Feed',
      description: 'Break free from algorithmic dopamine traps. Outsy replaces doomscrolling with short, joyful outdoor catalysts.',
      icon: '📱➡️🌿',
    },
    {
      number: '02',
      title: 'Step Past Your Doorstep',
      description: 'Spend 5 to 15 intentional minutes engaging your senses—look at leaves, touch bark, listen to birds, or smile at a neighbor.',
      icon: '🚶‍♂️✨',
    },
    {
      number: '03',
      title: 'Return Truly Recharged',
      description: 'Screen-time drains nervous energy; fresh air restores it. Come back to your work or study with real mental clarity.',
      icon: '🧠🍃',
    },
  ];

  return (
    <section id="philosophy-section" className="philosophy-section">
      <div className="section-header-wrap">
        <div className="section-pill-tag">
          <LeafIcon size={16} />
          <span>The Outsy Philosophy</span>
        </div>
        <h2 className="section-title">Less Scrolling. More Living.</h2>
        <p className="section-subtitle">
          Technology should nudge us back to reality, not trap us in a glowing rectangle. Outsy is designed to be closed.
        </p>
      </div>

      <div className="philosophy-steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="philosophy-step-card">
            <div className="step-card-top">
              <span className="step-number">{step.number}</span>
              <span className="step-emoji">{step.icon}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Nature Manifesto Callout */}
      <div className="manifesto-card">
        <div className="manifesto-content">
          <span className="manifesto-quote-mark">“</span>
          <p className="manifesto-quote">
            In every walk with nature, one receives far more than he seeks. The real world is not on a feed. It’s right outside your window.
          </p>
          <div className="manifesto-author">
            <strong>John Muir</strong>
            <span>Naturalist & Explorer</span>
          </div>
        </div>

        <div className="manifesto-cta-box">
          <h4>Ready for your quick breath of air?</h4>
          <p>Join thousands choosing small real-world moments every single day.</p>
          <button
            type="button"
            className="btn-manifesto-action"
            onClick={() => {
              onGetMission();
              const el = document.getElementById('mission-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <SparklesIcon size={18} />
            <span>Get Today's Mission</span>
          </button>
        </div>
      </div>
    </section>
  );
}
