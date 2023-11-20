import { bubbleSort } from "./bubbleSort";

describe("bubble sort", () => {
  it("should return a sorted array", () => {
    expect(bubbleSort([3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
  });
});
