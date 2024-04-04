import { Ship } from "../components/ship.js";

describe("Ship", () => {
  test("Carrier test", () => {
    let carrier = new Ship("carrier", 5, 0);
    expect(carrier.name).toBe("carrier");
    expect(carrier.length).toBe(5);
    expect(carrier.numHit).toBe(0);
    expect(carrier.sunk).toBe(false);
    expect(carrier.getHit()).toBe(1);
    expect(carrier.getHit()).toBe(2);
    expect(carrier.getHit()).toBe(3);
    expect(carrier.getHit()).toBe(4);
    expect(carrier.getHit()).toBe(5);
    expect(carrier.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("battleship test", () => {
    let battleship = new Ship("battleship", 4, 0);
    expect(battleship.name).toBe("battleship");
    expect(battleship.length).toBe(4);
    expect(battleship.numHit).toBe(0);
    expect(battleship.sunk).toBe(false);
    expect(battleship.getHit()).toBe(1);
    expect(battleship.getHit()).toBe(2);
    expect(battleship.getHit()).toBe(3);
    expect(battleship.getHit()).toBe(4);
    expect(battleship.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Cruiser test", () => {
    let cruiser = new Ship("cruiser", 3, 0);
    expect(cruiser.name).toBe("cruiser");
    expect(cruiser.length).toBe(3);
    expect(cruiser.numHit).toBe(0);
    expect(cruiser.sunk).toBe(false);
    expect(cruiser.getHit()).toBe(1);
    expect(cruiser.getHit()).toBe(2);
    expect(cruiser.getHit()).toBe(3);
    expect(cruiser.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Submarine test", () => {
    let submarine = new Ship("submarine", 3, 0);
    expect(submarine.name).toBe("submarine");
    expect(submarine.length).toBe(3);
    expect(submarine.numHit).toBe(0);
    expect(submarine.sunk).toBe(false);
    expect(submarine.getHit()).toBe(1);
    expect(submarine.getHit()).toBe(2);
    expect(submarine.getHit()).toBe(3);
    expect(submarine.isSunk()).toBe(true);
  });
});

describe("Ship", () => {
  test("Patrol Boat test", () => {
    let patrolBoat = new Ship("patrolBoat", 2, 0);
    expect(patrolBoat.name).toBe("patrolBoat");
    expect(patrolBoat.length).toBe(2);
    expect(patrolBoat.numHit).toBe(0);
    expect(patrolBoat.sunk).toBe(false);
    expect(patrolBoat.getHit()).toBe(1);
    expect(patrolBoat.getHit()).toBe(2);
    expect(patrolBoat.isSunk()).toBe(true);
  });
});