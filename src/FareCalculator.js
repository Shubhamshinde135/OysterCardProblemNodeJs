// FareCalculator.js
class FareCalculator {
  constructor(ruleContext) {
      this.ruleContext = ruleContext;
  }

  calculate(journey) {
      const ruleComparator = (rule1, rule2) => {
          if (rule1.amount < rule2.amount) return -1;
          if (rule1.amount > rule2.amount) return 1;
          return 0;
      };

      const rulePredicate = rule => rule.check(journey);

      const applicable = Array.from(this.ruleContext.getRules())
                              .filter(rulePredicate)
                              .sort(ruleComparator)[0];

      return applicable ? applicable.amount : this.ruleContext.getMaxFare();
  }

  getRuleContext() {
      return this.ruleContext;
  }

  setRuleContext(ruleContext) {
      this.ruleContext = ruleContext;
  }
}

export default FareCalculator;

