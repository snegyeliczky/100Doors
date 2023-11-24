import { filter } from "./filter";

describe("Test Array filter", () => {
  it("should filter the divide by 2 values", () => {
    const nums = [1, 2, 3, 4];
    expect(filter(nums, (value: number) => value % 2 === 0)).toEqual([2, 4]);
  });
  it("should return the strings longer than 2 char", () => {
    const str = ["sd", "sdk", "og", "lool"];
    expect(filter(str, (value: string) => value.length > 2)).toEqual([
      "sdk",
      "lool",
    ]);
  });
});
