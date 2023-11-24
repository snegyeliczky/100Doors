import { reduce } from "./reduce";

describe("test array reduce", () => {
  it("should return a sum value", () => {
    const nums = [1, 2, 3];
    expect(
      reduce(nums, (value: number, init: number) => value + init, 0),
    ).toEqual(6);
  });

  it("should sum the object indexes", () => {
    const objArr = [{ index: 1 }, { index: 2 }];
    expect(
      reduce(
        objArr,
        (obj: { index: number }, init: { index: number }) => ({
          index: init.index + obj.index,
        }),
        { index: 0 },
      ),
    ).toEqual({ index: 3 });
  });
});
