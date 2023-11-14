import {Door} from "./types";

export const init = (): Array<Door> =>
    new Array(100).fill(undefined).map((item, index) => ({
        index: index,
        isOpen: false,
    }));

export const toggle = (door: Door): Door => ({
    ...door,
    isOpen: !door.isOpen
})


export const visitor = (doorIndex: number, doors: Door[]): Door[] => doors.map(
    (door, index) => {
        return (index + 1) % doorIndex === 0 ? toggle(door) : door
    }
)

export const visitAll = (visits: number, doors: Door[]): Door[] => {
    let counter = 1
    let doorLine = doors
    while (counter <= visits) {
        doorLine = visitor(counter, doorLine)
        counter++
    }
    return doorLine
}
