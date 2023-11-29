export const filter = <Type>(
  input: Array<Type>,
  callback: (value: Type) => boolean,
): Type[] => {
  let newArray: Type[] = [];
  input.forEach((value) => callback(value) && newArray.push(value));
  return newArray;
};
