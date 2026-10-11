import React from 'react';
import { ArrowRightIcon, CompassIcon } from './Icons';

export default function HowItWorks({ onGetMission }) {
  const steps = [
    {
      stepNumber: '01',
      title: 'Choose your mission',
      shortBrief: 'Tailored or spontaneous',
      detail: 'Select an intentional pathway (Connect, Discover, Feel, Care, Recharge) or request a spontaneous invitation fitted to your available time.',
    },
    {
      stepNumber: '02',
      title: 'Step outside',
      shortBrief: '5 to 15 unhurried minutes',
      detail: 'Leave notifications behind. Keep your device in your pocket, relax your eye muscles into the distance, and engage with the living world.',
    },
    {
      stepNumber: '03',
      title: 'Reflect on the experience',
      shortBrief: 'Somatic clarity & reset',
      detail: 'Verify your mission completed in your outdoor log. Notice the quiet drop in cognitive fatigue and carry natural calm back into your work.',
    },
  ];

  const handleLaunch = () => {
    onGetMission();
    const el = document.getElementById('featured-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="how-it-works-protocol-section" aria-labelledby="protocol-heading">
      <div className="protocol-outer-container">
        {/* Section Header */}
        <div className="protocol-section-header">
          <div className="console-eyebrow">
            <span className="eyebrow-accent"></span>
            <span>Three-Step Sequence</span>
          </div>
          <h2 id="protocol-heading" className="protocol-main-headline">
            How Outsy Works
          </h2>
          <p className="protocol-sub-copy">
            A minimalist outdoor ritual engineered to be closed. Technology that helps you leave the screen behind.
          </p>
        </div>

        {/* Compact 3-Step Sequence Bar */}
        <div className="protocol-sequence-strip">
          {steps.map((step, idx) => (
            <div key={step.stepNumber} className="protocol-step-unit">
              <div className="step-unit-top">
                <span className="step-unit-num">{step.stepNumber}</span>
                <span className="step-unit-badge">{step.shortBrief}</span>
              </div>
              <h3 className="step-unit-title">{step.title}</h3>
              <p className="step-unit-detail">{step.detail}</p>
              {idx < steps.length - 1 && (
                <div className="step-arrow-divider" aria-hidden="true">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Outdoor Ethos Callout Strip */}
        <div className="outdoor-ethos-banner">
          <div className="ethos-text-side">
            <blockquote className="ethos-quote">
              “In every walk with nature, one receives far more than he seeks. The physical world is not on a feed—it is happening right beyond your window.”
            </blockquote>
            <cite className="ethos-author">— John Muir, Naturalist & Explorer</cite>
          </div>
          <div className="ethos-cta-side">
            <button
              type="button"
              className="btn-ethos-launch"
              onClick={handleLaunch}
            >
              <span>Get Your Next Mission</span>
              <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
