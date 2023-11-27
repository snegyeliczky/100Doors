export const myCache = (fn: any, context?: any) => {
  let cache = {};
  return (...args: any) => {
    const key = JSON.stringify(args);
    // @ts-ignore
    if (!cache[key]) {
      console.log("not cached");
      // @ts-ignore
      cache[key] = fn(...args);
    }
    // @ts-ignore
    return cache[key];
  };
};
