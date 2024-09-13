// CardObserver.js
class CardObserver {
  constructor(fareCalculator) {
      this.fareCalculator = fareCalculator;
  }

  update(card, journey) {
      if (journey.isComplete) {
          card.credit(this.fareCalculator.getRuleContext().getMaxFare());
          this.transact(card, journey);
      } else {
          card.debit(this.fareCalculator.getRuleContext().getMaxFare());
      }
  }

  transact(card, journey) {
      const fareAmount = this.fareCalculator.calculate(journey);
      card.debit(fareAmount);
  }
}

export default CardObserver;
