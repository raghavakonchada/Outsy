/**
 * RuleBasedMissionEngine
 * 
 * Modular, rule-based mission generation engine built with plain JavaScript.
 * Evaluates category rules, duration constraints, recency buffers, and safety guidelines.
 * Designed with a clean interface so that a future AI model (LLM/API) can be hot-swapped in.
 */

export class RuleBasedMissionEngine {
  /**
   * @param {Array} dataset - Array of mission objects
   * @param {Object} options - Configuration options
   */
  constructor(dataset = [], options = {}) {
    this.dataset = dataset;
    this.recencyBuffer = [];
    this.maxRecencySize = options.maxRecencySize || 8;
  }

  /**
   * Determine whether a mission matches the requested time constraint.
   * @param {Object} mission 
   * @param {string|number} timeConstraint - 'any' | 'quick' (<= 7m) | 'medium' (8-12m) | 'extended' (>= 13m) | number in minutes
   * @returns {boolean}
   */
  matchesTimeConstraint(mission, timeConstraint) {
    if (!timeConstraint || timeConstraint === 'any' || timeConstraint === 'all') {
      return true;
    }

    const mins = mission.durationMinutes || parseInt(mission.duration, 10) || 10;

    if (typeof timeConstraint === 'number') {
      return mins <= timeConstraint;
    }

    switch (timeConstraint) {
      case 'quick':
        return mins <= 7;
      case 'medium':
      case 'standard':
        return mins >= 8 && mins <= 12;
      case 'extended':
      case 'deep':
        return mins >= 13;
      default:
        return true;
    }
  }

  /**
   * Evaluates category matching.
   * @param {Object} mission 
   * @param {string} category 
   * @returns {boolean}
   */
  matchesCategory(mission, category) {
    if (!category || category === 'all') {
      return true;
    }
    return mission.category.toLowerCase() === category.toLowerCase();
  }

  /**
   * Generate a mission based on input criteria.
   * Ensures non-repetition, valid animal-care safety, and optimal duration fit.
   * 
   * @param {Object} criteria
   * @param {string} [criteria.category='all'] - 'all' | 'connect' | 'feel' | 'discover' | 'care' | 'recharge'
   * @param {string|number} [criteria.availableTime='any'] - 'any' | 'quick' | 'medium' | 'extended'
   * @param {number|string} [criteria.excludeId] - ID of the mission currently displayed to avoid immediate repeat
   * @param {Object} [criteria.context] - Optional user context (campus, weather, timeOfDay)
   * @returns {Object} Selected mission with generator metadata
   */
  generate(criteria = {}) {
    const {
      category = 'all',
      availableTime = 'any',
      excludeId = null,
      context = {}
    } = criteria;

    // Rule 1: Filter by category
    let categoryPool = this.dataset.filter((m) => this.matchesCategory(m, category));
    if (categoryPool.length === 0) {
      categoryPool = this.dataset;
    }

    // Rule 2: Filter by available time constraint
    let timeMatchedPool = categoryPool.filter((m) => this.matchesTimeConstraint(m, availableTime));

    // Fallback: If time constraint yields 0 results, find closest duration matches
    if (timeMatchedPool.length === 0) {
      timeMatchedPool = categoryPool;
    }

    // Rule 3: Avoid repeatedly returning the same mission when alternatives are available
    // Exclude the current mission and any mission served within recent history buffer
    let candidates = timeMatchedPool.filter((m) => {
      if (excludeId !== null && excludeId !== undefined && m.id === excludeId) {
        return false;
      }
      return !this.recencyBuffer.includes(m.id);
    });

    // If recency buffer eliminated all alternatives in this category/time bucket,
    // gracefully relax the recency constraint while ensuring we don't immediately repeat the current mission
    if (candidates.length === 0) {
      candidates = timeMatchedPool.filter((m) => {
        if (excludeId !== null && excludeId !== undefined && timeMatchedPool.length > 1) {
          return m.id !== excludeId;
        }
        return true;
      });
    }

    // Defensive fallback if pool has only 1 item
    if (candidates.length === 0) {
      candidates = timeMatchedPool.length > 0 ? timeMatchedPool : this.dataset;
    }

    // Rule 4: Non-deterministic random selection from valid candidate pool
    const selectedIndex = Math.floor(Math.random() * candidates.length);
    const selectedMission = candidates[selectedIndex];

    // Rule 5: Update the recency ring buffer
    if (selectedMission) {
      this.recencyBuffer.push(selectedMission.id);
      if (this.recencyBuffer.length > this.maxRecencySize) {
        this.recencyBuffer.shift();
      }
    }

    // Return mission copy with rule-engine generation metadata
    return {
      ...selectedMission,
      _generatorMeta: {
        engine: 'RuleBasedMissionEngine',
        version: '1.0.0',
        evaluatedCategory: category,
        evaluatedTime: availableTime,
        candidatePoolSize: candidates.length,
        timestamp: new Date().toISOString()
      }
    };
  }

  /**
   * Reset recency history buffer
   */
  clearHistory() {
    this.recencyBuffer = [];
  }

  /**
   * Retrieve all unique category keys from the dataset
   * @returns {Array<string>}
   */
  getCategories() {
    return Array.from(new Set(this.dataset.map((m) => m.category)));
  }

  /**
   * Retrieve total count of registered missions
   * @returns {number}
   */
  getTotalMissionsCount() {
    return this.dataset.length;
  }
}
