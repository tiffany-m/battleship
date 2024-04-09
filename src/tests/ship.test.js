import { Ship } from "../components/ship.js";

describe("Ship", () => {
  test("Carrier test", () => {
    let carrier = new Ship("carrier", 5);
    expect(carrier.name).toBe("carrier");
    expect(carrier.length).toBe(5);
    expect(carrier.numHit).toBe(0);
    expect(carrier.sunk).toBe(false);
    carrier.hit();
    expect(carrier.numHit).toBe(1);
    carrier.hit();
    expect(carrier.numHit).toBe(2);
    carrier.hit();
    expect(carrier.numHit).toBe(3);
    carrier.hit();
    expect(carrier.numHit).toBe(4);
    carrier.hit();
    expect(carrier.numHit).toBe(5);
    expect(carrier.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("battleship test", () => {
    let battleship = new Ship("battleship", 4);
    expect(battleship.name).toBe("battleship");
    expect(battleship.length).toBe(4);
    expect(battleship.numHit).toBe(0);
    expect(battleship.sunk).toBe(false);
    battleship.hit();
    expect(battleship.numHit).toBe(1);
    battleship.hit();
    expect(battleship.numHit).toBe(2);
    battleship.hit();
    expect(battleship.numHit).toBe(3);
    battleship.hit();
    expect(battleship.numHit).toBe(4);
    expect(battleship.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Cruiser test", () => {
    let cruiser = new Ship("cruiser", 3);
    expect(cruiser.name).toBe("cruiser");
    expect(cruiser.length).toBe(3);
    expect(cruiser.numHit).toBe(0);
    expect(cruiser.sunk).toBe(false);
    cruiser.hit();
    expect(cruiser.numHit).toBe(1);
    cruiser.hit();
    expect(cruiser.numHit).toBe(2);
    cruiser.hit();
    expect(cruiser.numHit).toBe(3);
    expect(cruiser.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Submarine test", () => {
    let submarine = new Ship("submarine", 3);
    expect(submarine.name).toBe("submarine");
    expect(submarine.length).toBe(3);
    expect(submarine.numHit).toBe(0);
    expect(submarine.sunk).toBe(false);
    submarine.hit();
    expect(submarine.numHit).toBe(1);
    submarine.hit();
    expect(submarine.numHit).toBe(2);
    submarine.hit();
    expect(submarine.numHit).toBe(3);
    expect(submarine.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Patrol Boat test", () => {
    let patrolBoat = new Ship("patrolBoat", 2);
    expect(patrolBoat.name).toBe("patrolBoat");
    expect(patrolBoat.length).toBe(2);
    expect(patrolBoat.numHit).toBe(0);
    expect(patrolBoat.sunk).toBe(false);
    patrolBoat.hit();
    expect(patrolBoat.numHit).toBe(1);
    patrolBoat.hit();
    expect(patrolBoat.numHit).toBe(2);
    expect(patrolBoat.isSunk()).toBe(true);
  });
});