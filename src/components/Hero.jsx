import React, { useState } from 'react';
import { ArrowRightIcon, ArrowDownIcon, CompassIcon, ClockIcon, LeafIcon } from './Icons';

export default function Hero({ onGetMission, currentMission }) {
  const [photoError, setPhotoError] = useState(false);

  const handleGetMission = () => {
    onGetMission();
    const el = document.getElementById('featured-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartMission = () => {
    const el = document.getElementById('featured-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-two-column-section" aria-labelledby="hero-title">
      <div className="hero-two-column-container">
        {/* Left Side: Headline, Copy, Actions & Featured Mission Preview */}
        <div className="hero-left-column">
          <div className="hero-system-pill">
            <span className="pill-dot"></span>
            <span>Outdoor Companion • Less scrolling. More living.</span>
          </div>

          <h1 id="hero-title" className="hero-display-heading">
            Your life is happening outside.
          </h1>

          <p className="hero-supporting-copy">
            Small missions. Real experiences. A little more living.
          </p>

          <div className="hero-cta-cluster">
            <button
              type="button"
              className="btn-hero-primary-cta"
              onClick={handleGetMission}
              id="hero-get-mission-btn"
            >
              <span>Get My Mission</span>
              <ArrowRightIcon size={16} />
            </button>

            <button
              type="button"
              className="btn-hero-secondary-cta"
              onClick={handleExplore}
            >
              <span>Explore Pathways</span>
              <ArrowDownIcon size={14} />
            </button>
          </div>

          {/* Reworked Featured Mission Preview (showing actual mission data) */}
          {currentMission && (
            <div 
              className="hero-featured-preview-card"
              onClick={handleStartMission}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleStartMission()}
              title="Jump to today's featured mission"
            >
              <div className="preview-card-header">
                <span className="preview-eyebrow">Today's Featured Mission</span>
                <span className="preview-category-badge">{currentMission.categoryName} Pathway</span>
              </div>

              <div className="preview-card-body">
                <h4 className="preview-mission-title">{currentMission.title}</h4>
                <div className="preview-meta-row">
                  <span className="preview-meta-item">
                    <ClockIcon size={13} />
                    <span>{currentMission.duration}</span>
                  </span>
                  <span className="preview-meta-sep">•</span>
                  <span className="preview-difficulty">{currentMission.difficulty}</span>
                  <span className="preview-action-link">
                    <span>Start Mission</span>
                    <ArrowRightIcon size={13} />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Prominent Real Landscape Photography (45–50% width) */}
        <div className="hero-right-column">
          <div className="hero-landscape-card">
            {!photoError ? (
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80"
                alt="Sunlit pathway winding through lush green forest trees in morning light"
                className="hero-landscape-image"
                onError={() => setPhotoError(true)}
                loading="eager"
              />
            ) : (
              <div className="hero-landscape-fallback">
                <LeafIcon size={40} />
                <span>Sunlit Forest Trail</span>
              </div>
            )}

            {/* Subtle natural lighting gradient vignette */}
            <div className="hero-landscape-overlay" aria-hidden="true"></div>

            {/* Location & Photography Badge */}
            <div className="hero-landscape-badge">
              <CompassIcon size={14} />
              <span>Sunlit Woodland Trail • Pacific Northwest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
