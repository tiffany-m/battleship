import { Ship } from "../components/ship.js";

describe("Ship", () => {
  test("Carrier test", () => {
    let carrier = new Ship("carrier", 5);
    expect(carrier.name).toBe("carrier");
    expect(carrier.length).toBe(5);
    expect(carrier.numHit).toBe(0);
    expect(carrier.sunk).toBe(false);
    expect(carrier.hit()).toBe(1);
    expect(carrier.hit()).toBe(2);
    expect(carrier.hit()).toBe(3);
    expect(carrier.hit()).toBe(4);
    expect(carrier.hit()).toBe(5);
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
    expect(battleship.hit()).toBe(1);
    expect(battleship.hit()).toBe(2);
    expect(battleship.hit()).toBe(3);
    expect(battleship.hit()).toBe(4);
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
    expect(cruiser.hit()).toBe(1);
    expect(cruiser.hit()).toBe(2);
    expect(cruiser.hit()).toBe(3);
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
    expect(submarine.hit()).toBe(1);
    expect(submarine.hit()).toBe(2);
    expect(submarine.hit()).toBe(3);
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
    expect(patrolBoat.hit()).toBe(1);
    expect(patrolBoat.hit()).toBe(2);
    expect(patrolBoat.isSunk()).toBe(true);
  });
});