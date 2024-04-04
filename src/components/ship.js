class Ship {
  constructor(name, length, numHit) {
    this.name = name, 
    this.length = length, 
    this.numHit = numHit,
    this.sunk = false
  }

  getHit() {
    this.numHit++;
    return this.numHit;
  }

  isSunk() {
    if (this.numHit === this.length) {
      this.sunk = true;
      return this.sunk;
    } else {
      return this.sunk;
    }
  }
}

export { Ship };
