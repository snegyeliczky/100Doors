import { myCache } from "./jsCache";

describe("test Cache", () => {
  const testFn = (numA: number, numB: number) => {
    setTimeout(() => {}, 1000);
    return numA + numB;
  };

  let memo: (numA: number, numB: number) => number;

  beforeEach(() => {
    memo = myCache(testFn);
  });

  it("should return cached value on the second call", () => {
    const firstStart = performance.now();
    memo(1345, 24567);
    const firstEnd = performance.now();
    const firstDiff = firstEnd - firstStart;
    const secondStart = performance.now();
    memo(1345, 24567);
    const secondEnd = performance.now();
    const secondDiff = secondEnd - secondStart;
    expect(firstDiff).toBeGreaterThan(secondDiff);
  });

  it("should return the same value as the non cached", () => {
    const nonCached = testFn(1, 2);
    const first = memo(1, 2);
    const second = memo(1, 2);
    expect(nonCached).toEqual(first);
    expect(nonCached).toEqual(second);
  });
});
