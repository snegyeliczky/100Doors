import { myCache } from "./jsCache";

describe("test Cache", () => {
  const testFn = (numA: number, numB: number) => {
    setTimeout(() => {}, 1000);
    return numA + numB;
  };

  it("should return cached value on the second call", () => {
    const memo = myCache(testFn);
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
});
