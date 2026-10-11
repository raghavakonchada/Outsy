import React, { useState } from 'react';
import { 
  CheckIcon, 
  ShuffleIcon, 
  ClockIcon, 
  CompassIcon, 
  TreeIcon,
  MountainIcon,
  ShieldCheckIcon
} from './Icons';

export default function MissionCard({ 
  currentMission, 
  onGetRandomMission, 
  isCompleted, 
  onToggleComplete,
  activeCategoryFilter = 'all',
  onSelectCategory,
  activeTimeFilter = 'any',
  onSelectTimeFilter
}) {
  const [photoError, setPhotoError] = useState(false);

  const categories = [
    { id: 'all', label: 'All Pathways' },
    { id: 'feel', label: 'Feel' },
    { id: 'discover', label: 'Discover' },
    { id: 'connect', label: 'Connect' },
    { id: 'care', label: 'Care' },
    { id: 'recharge', label: 'Recharge' },
  ];

  const timeOptions = [
    { id: 'any', label: 'Any Duration' },
    { id: 'quick', label: 'Quick (≤ 7 min)' },
    { id: 'medium', label: 'Standard (8–12 min)' },
    { id: 'extended', label: 'Extended (13+ min)' },
  ];

  if (!currentMission) {
    return null;
  }

  return (
    <section id="featured-mission" className="featured-mission-console" aria-labelledby="featured-mission-heading">
      <div className="console-outer-container">
        {/* Section Header */}
        <div className="console-section-header">
          <div className="console-eyebrow">
            <span className="eyebrow-accent"></span>
            <span>Featured Outdoor Mission</span>
          </div>
          <h2 id="featured-mission-heading" className="console-main-headline">
            Today's Outdoor Directive
          </h2>
          <p className="console-sub-copy">
            A small, concrete invitation to leave digital noise behind and engage directly with physical reality.
          </p>

          {/* Pathway Filter Tabs */}
          <div className="console-pathway-tabs" role="tablist" aria-label="Filter missions by pathway">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategoryFilter === cat.id}
                className={`pathway-tab-button ${activeCategoryFilter === cat.id ? 'is-active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span className="tab-indicator-dot"></span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Available Time Filter Control */}
          {onSelectTimeFilter && (
            <div className="console-time-filter-row">
              <span className="time-filter-label">Available Time:</span>
              <div className="time-filter-pills" role="radiogroup" aria-label="Filter missions by available time">
                {timeOptions.map((time) => (
                  <button
                    key={time.id}
                    type="button"
                    role="radio"
                    aria-checked={activeTimeFilter === time.id}
                    className={`time-pill-button ${activeTimeFilter === time.id ? 'is-active' : ''}`}
                    onClick={() => onSelectTimeFilter(time.id)}
                  >
                    <span>{time.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Distinctive Product Console Card */}
        <div className={`product-mission-board ${isCompleted ? 'mission-is-verified' : ''}`}>
          {/* Left: Photographic Environment Pane */}
          <div className="mission-visual-pane">
            {!photoError && currentMission.image ? (
              <img
                src={currentMission.image}
                alt={currentMission.alt || currentMission.title}
                className="mission-visual-photo"
                onError={() => setPhotoError(true)}
                loading="lazy"
              />
            ) : (
              <div className="mission-visual-fallback">
                <MountainIcon size={36} />
                <span>Local Outdoor Environment</span>
              </div>
            )}

            <div className="visual-scrim-gradient"></div>

            {/* Overlaid Telemetry Badges */}
            <div className="visual-telemetry-badge">
              <span className="telemetry-category">{currentMission.categoryName} Pathway</span>
              <span className="telemetry-sep">•</span>
              <span className="telemetry-time">{currentMission.duration}</span>
            </div>

            <div className="visual-bottom-location">
              <TreeIcon size={14} />
              <span>Location: Local Canopy / Open Air</span>
            </div>
          </div>

          {/* Right: Operational Directive Pane */}
          <div className="mission-directive-pane">
            <div className="directive-top-meta">
              <span className="directive-tag">
                Directive No. {String(currentMission.id).padStart(2, '0')}
              </span>
              <div className="directive-specs">
                <span className="spec-item">
                  <ClockIcon size={13} />
                  <span>{currentMission.duration}</span>
                </span>
                <span className="spec-item difficulty-badge">
                  <span>{currentMission.difficulty}</span>
                </span>
              </div>
            </div>

            <h3 className="directive-title">
              {currentMission.title}
            </h3>

            <p className="directive-instruction">
              {currentMission.description}
            </p>

            {/* Detailed Instructions / Protocol Steps */}
            {Array.isArray(currentMission.instructions) && currentMission.instructions.length > 0 && (
              <div className="directive-steps-block">
                <div className="steps-block-label">Mission Protocol</div>
                <ol className="directive-steps-list">
                  {currentMission.instructions.map((step, idx) => (
                    <li key={idx} className="directive-step-item">
                      <span className="step-num">{idx + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Field Guidance Note */}
            {currentMission.tip && (
              <div className="directive-field-note">
                <div className="field-note-label">Field Guidance</div>
                <p className="field-note-text">
                  {currentMission.tip}
                </p>
              </div>
            )}

            {/* Safety & Responsible Practice Note */}
            {currentMission.safetyNote && (
              <div className="directive-safety-box">
                <div className="safety-box-header">
                  <ShieldCheckIcon size={14} />
                  <span>Safety & Responsible Practice</span>
                </div>
                <p className="safety-box-text">
                  {currentMission.safetyNote}
                </p>
              </div>
            )}

            {/* Completion Status Confirmation */}
            {isCompleted && (
              <div className="mission-verified-banner" role="status">
                <div className="verified-icon-circle">
                  <CheckIcon size={16} />
                </div>
                <div className="verified-text-group">
                  <span className="verified-headline">Mission Verified & Logged</span>
                  <p className="verified-body">
                    {currentMission.duration} logged to your real outdoor practice. Notice the immediate drop in cognitive fatigue.
                  </p>
                </div>
              </div>
            )}

            {/* Mission Actions */}
            <div className="directive-action-cluster">
              <button
                type="button"
                className={`btn-directive-complete ${isCompleted ? 'state-completed' : ''}`}
                onClick={onToggleComplete}
                id="complete-mission-button"
                aria-pressed={isCompleted}
              >
                <CheckIcon size={18} />
                <span>{isCompleted ? 'Completed ✓ (Tap to Undo)' : 'Mark Mission as Completed'}</span>
              </button>

              <button
                type="button"
                className="btn-directive-shuffle"
                onClick={onGetRandomMission}
                id="shuffle-mission-button"
                title="Get another outdoor mission matching your filters"
              >
                <ShuffleIcon size={16} />
                <span>Get Another Mission</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
