/*
sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (num) => {
  let squares = 0;
  let summ = 0;
  for (let i = 0; i <= num; i += 1) {
    summ += i;
    squares += (i * i);
  }
  return (summ * summ) - squares;
};
// END

export default sumSquareDifference;
