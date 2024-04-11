import { Ship } from "../components/ship.js";

describe("Ship Creation", () => {
  test("Carrier Test", () => {
    let carrier = new Ship("Carrier", 5);
    expect(carrier.name).toBe("Carrier");
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
  test("Battleship Test", () => {
    let battleship = new Ship("Battleship", 4);
    expect(battleship.name).toBe("Battleship");
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
  test("Cruiser Test", () => {
    let cruiser = new Ship("Cruiser", 3);
    expect(cruiser.name).toBe("Cruiser");
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
  test("Submarine Test", () => {
    let submarine = new Ship("Submarine", 3);
    expect(submarine.name).toBe("Submarine");
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
  test("Patrol Boat Test", () => {
    let patrolBoat = new Ship("Patrol Boat", 2);
    expect(patrolBoat.name).toBe("Patrol Boat");
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

describe("Overhitting Ship Should Not Be Possible", () => {
  test("Overhitting Test", () => {
    let patrolBoat = new Ship("Patrol Boat", 2);
    expect(patrolBoat.name).toBe("Patrol Boat");
    expect(patrolBoat.length).toBe(2);
    expect(patrolBoat.numHit).toBe(0);
    expect(patrolBoat.sunk).toBe(false);
    patrolBoat.hit();
    expect(patrolBoat.numHit).toBe(1);
    patrolBoat.hit();
    expect(patrolBoat.numHit).toBe(2);
    expect(patrolBoat.isSunk()).toBe(true);
    expect(patrolBoat.hit()).toEqual({
      message:
        "Patrol Boat has been hit the max number of times already and has sunk.",
    });
    expect(patrolBoat.numHit).toBe(2);
  });
});