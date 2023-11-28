export const map = <I, R, C extends (e: I) => R>(
  inputArr: I[],
  callBack: C,
): R[] => {
  let mapped: R[] = [];
  inputArr.forEach((e) => mapped.push(callBack(e)));
  return mapped;
};
