// Rule.js
import { Mode } from './Mode.js';
import Combination from './Combination.js';

class Rule {
    constructor(mode = null, amount = 0.0) {
        this.mode = mode;
        this.amount = amount;
        this.combinations = new Set();
    }

    addCombination(combination) {
        this.combinations.add(combination);
    }

    check(journey) {
        return Array.from(this.combinations).some(combination => combination.check(journey)) ||
               (journey.mode === this.mode && this.combinations.size === 0);
    }
}

export default Rule;
