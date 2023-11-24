export const reduce = <type, accType>(
  initArr: Array<type>,
  callback: (value: type, acc: accType) => accType,
  init: accType,
) => {
  let accumulator = init;
  initArr.forEach((value) => (accumulator = callback(value, accumulator)));
  return accumulator;
};
