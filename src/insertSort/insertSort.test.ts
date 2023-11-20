import { insertSort } from "./insertSort";

describe("insert soring", () => {
  it("should return an array", () => {
    expect(insertSort([3, 2, 1])).toBeInstanceOf(Array<number>);
  });

  it("should return an ordered array", () => {
    expect(insertSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
