import React, { useState } from 'react';
import { OutsyMark, ArrowRightIcon } from './Icons';

export default function Navbar({ onGetMission }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetMission = () => {
    setMobileOpen(false);
    onGetMission();
    scrollTo('featured-mission');
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        {/* Brand Wordmark & Icon */}
        <a 
          href="#" 
          className="brand-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Outsy Homepage"
        >
          <div className="brand-emblem">
            <OutsyMark size={20} />
          </div>
          <div className="brand-naming">
            <span className="brand-wordmark">OUTSY</span>
            <span className="brand-descriptor">Less scrolling. More living.</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="header-nav" aria-label="Main Navigation">
          <button 
            type="button" 
            className="header-nav-link" 
            onClick={() => scrollTo('explore')}
          >
            Explore
          </button>
          <button 
            type="button" 
            className="header-nav-link" 
            onClick={() => scrollTo('how-it-works')}
          >
            How it works
          </button>
          <button 
            type="button" 
            className="header-nav-link" 
            onClick={() => scrollTo('progress')}
          >
            My progress
          </button>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn-header-mission"
            onClick={handleGetMission}
          >
            <span>Get a mission</span>
            <ArrowRightIcon size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="btn-mobile-menu"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`menu-bar ${mobileOpen ? 'open-1' : ''}`}></span>
            <span className={`menu-bar ${mobileOpen ? 'open-2' : ''}`}></span>
            <span className={`menu-bar ${mobileOpen ? 'open-3' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <button 
            type="button" 
            className="mobile-drawer-link" 
            onClick={() => scrollTo('explore')}
          >
            Explore
          </button>
          <button 
            type="button" 
            className="mobile-drawer-link" 
            onClick={() => scrollTo('how-it-works')}
          >
            How it works
          </button>
          <button 
            type="button" 
            className="mobile-drawer-link" 
            onClick={() => scrollTo('progress')}
          >
            My progress
          </button>
          <button 
            type="button" 
            className="btn-mobile-mission-action"
            onClick={handleGetMission}
          >
            <span>Get a mission</span>
            <ArrowRightIcon size={15} />
          </button>
        </div>
      )}
    </header>
  );
}
