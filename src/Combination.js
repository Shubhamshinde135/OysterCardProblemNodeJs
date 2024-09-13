class Combination {
    constructor(startZone, endZone) {
      this.startZone = startZone;
      this.endZone = endZone;
    }
  
    check(journey) {
      return journey.start.getZones().has(this.startZone) && journey.end.getZones().has(this.endZone);
    }
  }
  
  export default Combination;
  