import {init, toggle, visitor, visitAll} from "./progress";
import {Door} from "./types";

describe("tests of 100 doors:", () => {
    const closedDoor: Door = {
        index: 1,
        isOpen: false
    }

    const openDoor: Door = {
        index: 1,
        isOpen: true
    }

    const testArray = [closedDoor, closedDoor]

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

    it('should have a toggle function to open or close doors', () => {
        expect(toggle).toBeDefined()
    })

    it('should close an open door and open a closed door', () => {

        expect(toggle(closedDoor).isOpen).toEqual(true)
        expect(toggle(openDoor).isOpen).toEqual(false)
    })

    it('should have a visitor ', () => {
        expect(visitor).toBeDefined()
    })

    it('should toggle doors on second index', () => {
        expect(visitor(1, testArray)[1]).toEqual(openDoor)
    })

    it('should have a visit100Time', () => {
        expect(visitAll).toBeDefined()
    })

    it('should close the last door on the first run ', () => {
        expect(visitAll(1, testArray)[1]).toEqual(openDoor)
    })

    it('should visit the given array 2 times', () => {
        expect(visitAll(2, testArray)[1]).toEqual(closedDoor)
    })
});
