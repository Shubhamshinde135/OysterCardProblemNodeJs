// Abc.js
import Journey from './Journey.js'; // Ensure this path is correct

var journeyBuilder = Journey.builder();
console.log('JourneyBuilder:', journeyBuilder);

// Create a new journey
var journey = Journey.builder().setStart('Start Station').setEnd('End Station').setMode('Train').setIsComplete(false).build;


console.log(journey);
