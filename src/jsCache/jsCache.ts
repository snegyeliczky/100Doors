export const myCache = <R, T extends (...args: any[]) => R>(fn: T) => {
  let cache: { [key: string]: R } = {};
  return (...args: Parameters<T>): R => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      console.log("not cached");
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};
