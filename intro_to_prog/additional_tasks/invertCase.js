/*
Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!') // hELLO, wORLD!
invertCase('I loVe JS') // i LOvE js
*/
import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
export default (string) => {
  let result = '';
  for (let i = 0; i < length(string); i++) {
    if (string[i] === toUpperCase(string[i])) {
      result += toLowerCase(string[i]);
    } else {
      result += toUpperCase(string[i]);
    }
  }
  return result;
};
// END