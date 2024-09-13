// Station.js
class Station {
  constructor(name, zones) {
      this.name = name;
      this.zones = zones;
  }

  getName() {
      return this.name;
  }

  setName(name) {
      this.name = name;
  }

  getZones() {
      return this.zones;
  }

  setZones(zones) {
      this.zones = zones;
  }

}

export default Station;
