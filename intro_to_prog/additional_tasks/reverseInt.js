/*
Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
*/

import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
export default (number) => {
  let result = '';
  let num = number;

  if (num < 0) {
    num *= -1;
    while (num > 0) {
      result += num % 10;
      num = parseInt(num / 10, 10);
    }
    return Number(result) * -1;
  }
  while (num > 0) {
    result += num % 10;
    num = parseInt(num / 10, 10);
  }
  return Number(result);
};
// END