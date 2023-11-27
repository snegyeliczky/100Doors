import { Counter, counter } from "./counter";

describe("counter function testing", () => {
  let counterInstance: Counter;
  beforeEach(() => {
    counterInstance = counter();
  });

  it("should retrieve a number", () => {
    expect(counterInstance.retrieve()).toEqual(0);
  });

  it("should return the number of added value", () => {
    counterInstance.add(3);
    expect(counterInstance.retrieve()).toEqual(3);
  });

  it("should remove the added value", () => {
    counterInstance.add(3);
    counterInstance.remove(3);
    expect(counterInstance.retrieve()).toEqual(0);
  });
});
