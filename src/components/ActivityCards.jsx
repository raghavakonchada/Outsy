import React, { useState } from 'react';
import { 
  ChatIcon, 
  SearchBugIcon, 
  HeartMindfulIcon, 
  PawCareIcon, 
  SunRechargeIcon, 
  ArrowRightIcon, 
  LeafIcon 
} from './Icons';

export default function ActivityCards({ onPickCategory }) {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const pathways = [
    {
      id: 'connect',
      title: 'Connect',
      tagline: 'Start friendly conversations.',
      description: 'Step out of digital isolation with warm, low-pressure micro-interactions with neighbors, dog walkers, and local community members.',
      samplePrompt: 'Offer an unhurried, warm greeting to two neighbors along your route.',
      icon: <ChatIcon size={20} />,
      numeral: '01',
      badge: 'Social Wellness',
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sun-dappled neighborhood park pathway with walkers in conversation',
      gridClass: 'pathway-grid-wide-primary',
    },
    {
      id: 'discover',
      title: 'Discover',
      tagline: 'Explore insects and the natural world.',
      description: 'Slow your pace to inspect the miniature ecosystems under your feet—from ant trails and beetles to wild moss and changing trees.',
      samplePrompt: 'Search for three tiny crawling insects in soil or garden beds.',
      icon: <SearchBugIcon size={20} />,
      numeral: '02',
      badge: 'Micro-Curiosity',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
      alt: 'Close-up macro of fern leaf textures and forest floor flora',
      gridClass: 'pathway-grid-wide-secondary',
    },
    {
      id: 'feel',
      title: 'Feel',
      tagline: 'Experience nature mindfully.',
      description: 'Engage all somatic senses: temperature, air movement, sounds, and ground texture to soothe nervous tension.',
      samplePrompt: 'Close your eyes for one minute and name three natural sounds and scents.',
      icon: <HeartMindfulIcon size={20} />,
      numeral: '03',
      badge: 'Sensory Grounding',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
      alt: 'Misty evergreen pine forest in tranquil morning daylight',
      gridClass: 'pathway-grid-trio',
    },
    {
      id: 'care',
      title: 'Care',
      tagline: 'Help animals responsibly.',
      description: 'Cultivate active stewardship for urban wildlife—providing clean water dishes, protecting pollinators, or removing litter.',
      samplePrompt: 'Set out a shallow dish of fresh water with pebbles for visiting birds and bees.',
      icon: <PawCareIcon size={20} />,
      numeral: '04',
      badge: 'Wildlife Kindness',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
      alt: 'Quiet mossy woodland stream and green forest glade',
      gridClass: 'pathway-grid-trio',
    },
    {
      id: 'recharge',
      title: 'Recharge',
      tagline: 'Take refreshing study and work breaks.',
      description: 'Relieve screen-induced ocular strain and brain fog by resting your gaze on the distant tree horizon.',
      samplePrompt: 'Gaze into the distant tree canopy or horizon for five uninterrupted minutes.',
      icon: <SunRechargeIcon size={20} />,
      numeral: '05',
      badge: 'Screen-Free Rest',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      alt: 'Wide open mountain ridge and tree canopy under soft daylight',
      gridClass: 'pathway-grid-trio',
    },
  ];

  const handleSelectPathway = (id) => {
    onPickCategory(id);
    const element = document.getElementById('featured-mission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="explore" className="explore-pathways-section" aria-labelledby="pathways-heading">
      <div className="explore-section-container">
        {/* Header */}
        <div className="explore-header-center">
          <div className="console-eyebrow">
            <span className="eyebrow-accent"></span>
            <span>Five Intentional Pathways</span>
          </div>
          <h2 id="pathways-heading" className="explore-section-title">
            Explore by Outdoor Intention
          </h2>
          <p className="explore-section-sub">
            Every pathway targets a distinct restorative need. Select any pathway to load an aligned outdoor directive.
          </p>
        </div>

        {/* Varied Editorial Grid: 2 wide plates on top + 3 balanced cards below */}
        <div className="editorial-varied-mosaic">
          {/* Top Row: Two Wide Plates */}
          <div className="mosaic-top-row">
            {pathways.slice(0, 2).map((item) => (
              <article key={item.id} className={`mosaic-card ${item.gridClass}`}>
                <div className="mosaic-card-image-wrap">
                  {!imgErrors[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="mosaic-card-photo"
                      onError={() => handleImgError(item.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="mosaic-card-fallback">
                      <LeafIcon size={32} />
                    </div>
                  )}
                  <div className="mosaic-card-scrim"></div>
                  
                  <div className="mosaic-card-top-tags">
                    <span className="mosaic-numeral-pill">{item.numeral}</span>
                    <span className="mosaic-badge-pill">{item.badge}</span>
                  </div>

                  <div className="mosaic-card-photo-content">
                    <div className="mosaic-icon-title-row">
                      <span className="mosaic-icon">{item.icon}</span>
                      <h3 className="mosaic-title">{item.title}</h3>
                    </div>
                    <span className="mosaic-tagline">{item.tagline}</span>
                  </div>
                </div>

                <div className="mosaic-card-body">
                  <p className="mosaic-description">{item.description}</p>
                  
                  <div className="mosaic-sample-box">
                    <span className="sample-eyebrow">Sample Field Prompt</span>
                    <p className="sample-quote">"{item.samplePrompt}"</p>
                  </div>

                  <button
                    type="button"
                    className="btn-mosaic-activate"
                    onClick={() => handleSelectPathway(item.id)}
                    aria-label={`Explore ${item.title} pathway`}
                  >
                    <span>Begin {item.title}</span>
                    <ArrowRightIcon size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Row: Three Compact Cards */}
          <div className="mosaic-bottom-row">
            {pathways.slice(2, 5).map((item) => (
              <article key={item.id} className={`mosaic-card ${item.gridClass}`}>
                <div className="mosaic-card-image-wrap compact-height">
                  {!imgErrors[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="mosaic-card-photo"
                      onError={() => handleImgError(item.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="mosaic-card-fallback">
                      <LeafIcon size={24} />
                    </div>
                  )}
                  <div className="mosaic-card-scrim"></div>

                  <div className="mosaic-card-top-tags">
                    <span className="mosaic-numeral-pill">{item.numeral}</span>
                    <span className="mosaic-badge-pill">{item.badge}</span>
                  </div>

                  <div className="mosaic-card-photo-content">
                    <div className="mosaic-icon-title-row">
                      <span className="mosaic-icon">{item.icon}</span>
                      <h3 className="mosaic-title">{item.title}</h3>
                    </div>
                    <span className="mosaic-tagline">{item.tagline}</span>
                  </div>
                </div>

                <div className="mosaic-card-body">
                  <p className="mosaic-description">{item.description}</p>

                  <div className="mosaic-sample-box">
                    <span className="sample-eyebrow">Sample Field Prompt</span>
                    <p className="sample-quote">"{item.samplePrompt}"</p>
                  </div>

                  <button
                    type="button"
                    className="btn-mosaic-activate"
                    onClick={() => handleSelectPathway(item.id)}
                    aria-label={`Explore ${item.title} pathway`}
                  >
                    <span>Begin {item.title}</span>
                    <ArrowRightIcon size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
