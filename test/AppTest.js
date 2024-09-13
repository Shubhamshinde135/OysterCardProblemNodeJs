import { expect } from 'chai';
import Card from '../src/Card.js'; // Adjust the path as needed
import FareCalculator from '../src/FareCalculator.js';
import RuleContext from '../src/RuleContext.js';
import CardObserver from '../src/CardObserver.js';
import Rule from '../src/Rule.js';
import Combination from '../src/Combination.js';
import { Zone } from '../src/Zone.js';
import { Mode } from '../src/Mode.js';
import Station from '../src/Station.js'; // Import Station class

describe('AppTest', () => {
  let ruleContext;
  let fareCalculator;

  beforeEach(() => {
    ruleContext = new RuleContext();
    ruleContext.setMaxFare(3.2);

    const rule1 = new Rule(null, 2.5);
    rule1.addCombination(new Combination(Zone.ONE, Zone.ONE));
    ruleContext.loadRule(rule1);

    const rule2 = new Rule(null, 2.0);
    rule2.addCombination(new Combination(Zone.TWO, Zone.TWO));
    rule2.addCombination(new Combination(Zone.THREE, Zone.THREE));
    ruleContext.loadRule(rule2);

    const rule3 = new Rule(null, 3.0);
    rule3.addCombination(new Combination(Zone.ONE, Zone.TWO));
    rule3.addCombination(new Combination(Zone.TWO, Zone.ONE));
    rule3.addCombination(new Combination(Zone.ONE, Zone.THREE));
    rule3.addCombination(new Combination(Zone.THREE, Zone.ONE));
    ruleContext.loadRule(rule3);

    const rule4 = new Rule(null, 2.25);
    rule4.addCombination(new Combination(Zone.TWO, Zone.THREE));
    rule4.addCombination(new Combination(Zone.THREE, Zone.TWO));
    ruleContext.loadRule(rule4);

    const rule5 = new Rule(null, 3.2);
    ruleContext.loadRule(rule5);

    const rule6 = new Rule(Mode.BUS, 1.8);
    ruleContext.loadRule(rule6);

    fareCalculator = new FareCalculator(ruleContext);
  });

  it('should calculate fare correctly after journeys', () => {
    var cardObserver = new CardObserver(fareCalculator);
    var card = new Card();

    card.on('journeyComplete', (journey) => cardObserver.update(card, journey));
    card.on('journeyStart', (journey) => cardObserver.update(card, journey));

    card.credit(30.0);

    console.log("card credit");

    card.swipe(new Station('Holborn', new Set([Zone.ONE])), Mode.TUBE);
    card.swipe(new Station('Earl\'s Court', new Set([Zone.ONE, Zone.TWO])), null);
    console.log("Card balance after journey-1 is -> " + card.getBalance());

    card.swipe(new Station('Earl\'s Court', new Set([Zone.ONE, Zone.TWO])), Mode.TUBE);
    card.swipe(new Station('HammerSmith', new Set([Zone.TWO])), null);
    console.log("Card balance after journey-2 is -> " + card.getBalance());

    card.swipe(new Station('Chelsea', new Set([])), Mode.BUS);
    card.swipe(new Station('Earl\'s Court', new Set([Zone.ONE, Zone.TWO])), null);
    console.log("Card balance after journey-3 is -> " + card.getBalance());
  });
});
