import { PREDEFINED_MISSIONS } from '../data/missions';
import { RuleBasedMissionEngine } from './ruleEngine';

/**
 * Modular Mission Engine Gateway
 * 
 * Conforms to the Strategy / Provider pattern.
 * The application interacts with `missionEngine` through a uniform interface.
 * 
 * To integrate a real AI model (e.g., OpenAI, Claude, local WebLLM, or on-device model):
 * 1. Create a class (e.g. `AIMissionEngine`) that implements `generate(criteria)`.
 * 2. Call `missionEngine.setGenerator(new AIMissionEngine(...))`.
 * No UI components or state handlers will need to change.
 */
export class MissionEngineService {
  constructor(generator) {
    this.generator = generator;
  }

  /**
   * Swap out the underlying mission generator (e.g., replace rule-based with AI model).
   * @param {Object} generator - Any object providing a `.generate(criteria)` method
   */
  setGenerator(generator) {
    if (!generator || typeof generator.generate !== 'function') {
      throw new Error('Mission generator must provide a generate(criteria) method.');
    }
    this.generator = generator;
  }

  /**
   * Access the currently active generator
   */
  getGenerator() {
    return this.generator;
  }

  /**
   * Generate a mission using the active generator.
   * @param {Object} criteria - { category, availableTime, excludeId, context }
   * @returns {Object} Generated mission object
   */
  generateMission(criteria = {}) {
    return this.generator.generate(criteria);
  }

  /**
   * Reset session history buffer
   */
  clearHistory() {
    if (typeof this.generator.clearHistory === 'function') {
      this.generator.clearHistory();
    }
  }

  /**
   * Get list of supported categories
   */
  getCategories() {
    return typeof this.generator.getCategories === 'function'
      ? this.generator.getCategories()
      : ['connect', 'feel', 'discover', 'care', 'recharge'];
  }
}

// Instantiate default rule-based engine using our 30-mission dataset
const defaultRuleEngine = new RuleBasedMissionEngine(PREDEFINED_MISSIONS);

// Export singleton instance
export const missionEngine = new MissionEngineService(defaultRuleEngine);

// Re-export RuleBasedMissionEngine class for testing or custom instantiation
export { RuleBasedMissionEngine };
