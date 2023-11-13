import {Door} from "./types";

export const init = ():Array<Door> => new Array(100).fill(undefined).map((item, index) => ({index:index, isOpen:false}))