export type Counter = {
  add: (num: number) => number;
  remove: (num: number) => number;
  retrieve: () => number;
};

export const counter = () => {
  let _base = 0;
  const add = (num: number) => (_base += num);
  const remove = (num: number) => (_base -= num);

  const retrieve = () => _base;

  return {
    add,
    remove,
    retrieve,
  };
};
