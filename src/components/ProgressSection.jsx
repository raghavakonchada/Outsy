import React from 'react';
import { ClockIcon, CheckIcon, CompassIcon, ArrowRightIcon, RefreshIcon } from './Icons';

export default function ProgressSection({ 
  completedMissions = [], 
  onResetProgress, 
  onTakeMission 
}) {
  const completedCount = completedMissions.length;

  // Real calculation from completed missions
  const totalMinutesOutdoors = completedMissions.reduce((acc, mission) => {
    const parsed = parseInt(mission.duration, 10);
    return acc + (isNaN(parsed) ? 0 : parsed);
  }, 0);

  // Unique categories explored
  const uniqueCategoriesCount = new Set(
    completedMissions.map((m) => m.category)
  ).size;

  const handleStartMission = () => {
    onTakeMission();
    const el = document.getElementById('featured-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="progress" className="progress-dashboard-section" aria-labelledby="progress-main-heading">
      <div className="progress-outer-container">
        {/* Section Header */}
        <div className="progress-section-header">
          <div className="console-eyebrow">
            <span className="eyebrow-accent"></span>
            <span>Real Application State</span>
          </div>
          <h2 id="progress-main-heading" className="progress-main-headline">
            My Outdoor Progress
          </h2>
          <p className="progress-sub-copy">
            An authentic reflection of your time spent outside. Zero artificial streaks or fabricated metrics.
          </p>
        </div>

        {/* Real Metrics Ticker */}
        <div className="progress-telemetry-grid">
          <div className="telemetry-card">
            <div className="telemetry-card-top">
              <span className="telemetry-label">Missions Completed</span>
              <CheckIcon size={16} className="telemetry-icon" />
            </div>
            <div className="telemetry-number">{completedCount}</div>
            <div className="telemetry-caption">
              {completedCount === 1 ? 'Session logged today' : 'Sessions logged today'}
            </div>
          </div>

          <div className="telemetry-card">
            <div className="telemetry-card-top">
              <span className="telemetry-label">Time Spent Outdoors</span>
              <ClockIcon size={16} className="telemetry-icon" />
            </div>
            <div className="telemetry-number">
              {totalMinutesOutdoors}
              <span className="telemetry-unit">min</span>
            </div>
            <div className="telemetry-caption">
              Calculated from verified missions
            </div>
          </div>

          <div className="telemetry-card">
            <div className="telemetry-card-top">
              <span className="telemetry-label">Pathways Explored</span>
              <CompassIcon size={16} className="telemetry-icon" />
            </div>
            <div className="telemetry-number">
              {uniqueCategoriesCount}
              <span className="telemetry-unit">/ 5</span>
            </div>
            <div className="telemetry-caption">
              Connect, Discover, Feel, Care, Recharge
            </div>
          </div>
        </div>

        {/* Session Log Console */}
        <div className="progress-log-console">
          <div className="log-console-topbar">
            <div>
              <h3 className="log-console-title">Today's Verified Missions</h3>
              <p className="log-console-subtitle">
                {completedCount === 0
                  ? 'No sessions completed in this session'
                  : `${completedCount} outdoor invitation${completedCount === 1 ? '' : 's'} recorded`}
              </p>
            </div>

            {completedCount > 0 && (
              <button
                type="button"
                className="btn-log-reset"
                onClick={onResetProgress}
                title="Reset session practice log"
                aria-label="Reset session log"
              >
                <RefreshIcon size={13} />
                <span>Reset log</span>
              </button>
            )}
          </div>

          {completedCount > 0 ? (
            <div className="log-entries-flow">
              {completedMissions.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="log-entry-row">
                  <div className="log-entry-meta-side">
                    <div className="log-entry-check">
                      <CheckIcon size={14} />
                    </div>
                    <div>
                      <h4 className="log-entry-title">{item.title}</h4>
                      <div className="log-entry-badges">
                        <span className="log-category-tag">{item.categoryName}</span>
                        <span className="log-bullet">•</span>
                        <span className="log-duration">{item.duration}</span>
                        {item.completedAt && (
                          <>
                            <span className="log-bullet">•</span>
                            <span className="log-timestamp">{item.completedAt}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="log-entry-status-side">
                    <span className="status-verified-pill">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="log-empty-state">
              <div className="empty-state-compass">
                <CompassIcon size={26} />
              </div>
              <h4 className="empty-state-title">Your outdoor journal is empty</h4>
              <p className="empty-state-desc">
                Step outside with today's featured directive above. When you mark it completed, your verified outdoor minutes will be logged here.
              </p>
              <button
                type="button"
                className="btn-empty-start-mission"
                onClick={handleStartMission}
              >
                <span>Get Started with a Mission</span>
                <ArrowRightIcon size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
