import { init } from "./progress";

describe("tests of 100 doors:", () => {
  it("should has an init function", () => {
    expect(init).toBeDefined();
  });

  it("should has init and retun an array", () => {
    expect(init()).toBeInstanceOf(Array);
  });

  it("should have an array with 100 objects", () => {
    expect(init().length).toBe(100);
  });

  it("should have door type objects", () => {
    const results = init();
    expect(results[0]).toEqual({
      index: expect.any(Number),
      isOpen: expect.any(Boolean),
    });
  });
});
