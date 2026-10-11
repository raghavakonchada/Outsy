import React from 'react';
import { OutsyMark } from './Icons';

export default function Footer({ onGetMission }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetMission = () => {
    onGetMission();
    scrollTo('featured-mission');
  };

  return (
    <footer className="outdoor-footer" role="contentinfo">
      <div className="footer-content-wrap">
        <div className="footer-grid-layout">
          {/* Brand & Mission Statement */}
          <div className="footer-mission-col">
            <div className="footer-brand-lockup">
              <div className="footer-brand-emblem">
                <OutsyMark size={20} />
              </div>
              <span className="footer-brand-title">OUTSY</span>
            </div>
            <p className="footer-tagline-text">
              “Less scrolling. More living.”
            </p>
            <p className="footer-mission-copy">
              An open-source outdoor wellness companion engineered to pull you out of algorithmic loops and back into the living world.
            </p>
            <div className="footer-privacy-tag">
              <span className="privacy-live-dot"></span>
              <span>100% Client-Side • Zero Telemetry • Open Source</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-col-list">
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Five Pathways
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('how-it-works')}>
                  How It Works
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('progress')}>
                  My Progress
                </button>
              </li>
              <li>
                <button type="button" onClick={handleGetMission}>
                  Get a Mission
                </button>
              </li>
            </ul>
          </div>

          {/* Five Pathways Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Pathways</h4>
            <ul className="footer-col-list">
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Connect — Conversations
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Discover — Nature & Insects
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Feel — Sensory Grounding
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Care — Animal Stewardship
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('explore')}>
                  Recharge — Restorative Breaks
                </button>
              </li>
            </ul>
          </div>

          {/* Open Source Col */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Open Source</h4>
            <ul className="footer-col-list">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub Repository ↗
                </a>
              </li>
              <li>
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">
                  MIT License ↗
                </a>
              </li>
              <li>
                <a href="https://creativecommons.org" target="_blank" rel="noreferrer">
                  Creative Commons ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-strip">
          <div className="footer-legal">
            © {new Date().getFullYear()} Outsy Project. Dedicated to unhurried living under open skies.
          </div>
          <div className="footer-quote">
            “Nature does not hurry, yet everything is accomplished.” — Lao Tzu
          </div>
        </div>
      </div>
    </footer>
  );
}
