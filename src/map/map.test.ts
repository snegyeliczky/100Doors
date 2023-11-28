import { map } from "./map";

describe("test array map", () => {
  const testArr = [1, 2, 3];
  it("should create string from the passed numbers", () => {
    const callBack = (el: number) => el.toString();
    expect(map(testArr, callBack)).toEqual(["1", "2", "3"]);
  });

  it("should multiply by 2 the arrays element ", () => {
    const callBack = (el: number) => el * 2;
    expect(map(testArr, callBack)).toEqual([2, 4, 6]);
  });
});
