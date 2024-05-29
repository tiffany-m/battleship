class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.numHit = 0;
    this.sunk = false;
  }

  hit() {
    this.isSunk();

    if (this.sunk === true) {
      return {
        message: `${this.name} has been hit the max number of times already and has sunk.`,
      };
    }

    if (!this.sunk) {
      this.numHit++;
    }
  }

  isSunk() {
    this.sunk = this.sunk || this.numHit === this.length;
    return this.sunk;
  }

  reset() {
    this.numHit = 0;
    this.sunk = false;
  }
}

export { Ship };
