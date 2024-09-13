class Journey {
  constructor(start, end, mode, isComplete) {
    this.start = start;
    this.end = end;
    this.mode = mode;
    this.isComplete = isComplete;
  }

  // Getters and Setters
  getStart() { return this.start; }
  setStart(start) { this.start = start; }

  getEnd() { return this.end; }
  setEnd(end) { this.end = end; }

  getMode() { return this.mode; }
  setMode(mode) { this.mode = mode; }

  getComplete() { return this.isComplete; }
  setComplete(isComplete) { this.isComplete = isComplete; }

  // Static Builder class
  static Builder = class {
    constructor() {
      this.start = null;
      this.end = null;
      this.mode = null;
      this.isComplete = false;
    }

    // Builder method names without 'set' prefix
    setStart(start) { 
      this.start = start; 
      return this;
    }

    setEnd(end) { 
      this.end = end; 
      return this;
    }

    setMode(mode) {
      this.mode = mode;
      return this;
    }

    setIsComplete(isComplete) {
      this.isComplete = isComplete;
      return this;
    }

    build() {
      return new Journey(this.start, this.end, this.mode, this.isComplete);
    }
  };

  static builder() {
    return new Journey.Builder();
  }
}

export default Journey;
