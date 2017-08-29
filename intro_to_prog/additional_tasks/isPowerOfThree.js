/*
isPowerOfThree.js
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/

// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
  const BASE = 9;

  if (num === 1 || num === 3) {
    return true;
  } else if (num % BASE !== 0) {
    return false;
  }
  return isPowerOfThree(num / 9);
};


export default isPowerOfThree;
// END
