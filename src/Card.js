import { EventEmitter } from 'events';
import Journey from './Journey.js'; // Assuming Journey.js is in the same directory
import Station from './Station.js'; // Import Station class

class Card extends EventEmitter {
  constructor() {
    super();
    this.balance = 0.0;
    this.journeyInProgress = null;
  }

  credit(amount) {
    this.balance += amount;
  }

  debit(amount) {
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }

  swipe(station, mode) {
    if (this.journeyInProgress) {  // If a journey is in progress
      this.journeyInProgress.setEnd(station);  // Set the end station
      this.journeyInProgress.setComplete(true);  // Mark the journey as complete
      this.emit('journeyComplete', this.journeyInProgress);  // Notify observers
      this.journeyInProgress = null;  // Set journeyInProgress to null after completion
    } else {
      // Create a new Station object for the starting station
      const startStation = new Station(station.name, station.zones);
      
      // Prepare a journey and set the starting station and mode of transport
      this.journeyInProgress = Journey.builder()
        .setStart(startStation)
        .setMode(mode)
        .setIsComplete(false)
        .build();
      this.emit('journeyStart', this.journeyInProgress);  // Notify observers
    }
  }
}

export default Card;
