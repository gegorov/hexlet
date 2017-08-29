/*
isPrime.js
Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

Используйте цикл for и арифметические мутаторы.

isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false
*/
// BEGIN (write your solution here)
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// END

export default isPrime;