/* eslint-disable no-unused-vars */
export const cons = (x, y) => m => m(x, y);

// BEGIN (write your solution here)
export const car = pair => pair((x, y) => x);
export const cdr = pair => pair((x, y) => y);
// END
