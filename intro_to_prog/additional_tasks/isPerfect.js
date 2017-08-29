/*
isPerfect.js
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/
// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  let counter = 0;

  if (num === 0) {
    return false;
  }

  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      counter += i;
    }
  }

  if (counter === num) {
    return true;
  }

  return false;
};
// END

export default isPerfect;
