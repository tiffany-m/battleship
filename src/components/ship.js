class Ship {
  constructor(name, length) {
    this.name = name, 
    this.length = length, 
    this.numHit = 0,
    this.sunk = false
  }

  hit() {
    if (!this.sunk) {
      this.numHit++;
    }
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
