// RuleContext.js
class RuleContext {
  constructor(maxFare = 0.0) {
      this.maxFare = maxFare;
      this.rules = new Set();
  }

  loadRule(rule) {
      this.rules.add(rule);
  }

  getMaxFare() {
      return this.maxFare;
  }

  setMaxFare(maxFare) {
      this.maxFare = maxFare;
  }

  getRules() {
      return this.rules;
  }

  setRules(rules) {
      this.rules = rules;
  }
}

export default RuleContext;
