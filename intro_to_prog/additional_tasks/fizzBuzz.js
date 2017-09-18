// fizzBuzz.js
// Реализуйте и экспортируйте по умолчанию функцию, которая выводит
// (console.log) в терминал числа в диапазоне от begin до end. При этом,
// вывод происходит по следующим правилам:
//
// Если число делится без остатка на 3 и на 5, то вместо числа выводится
// слово FizzBuzz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих ("включительно")
// начало и конец диапазона. Если диапазон пуст (в случае, когда begin > end),
// то функция просто ничего не печатает.
//
// Пример
// Вызов функции:
//
// fizzBuzz(11, 20);
// Вывод в терминале:
//
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

/* eslint no-console: 0 */
// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
  const FB = 'FizzBuzz';
  const F = 'Fizz';
  const B = 'Buzz';

  const iter = (num) => {
    if (num > end) {
      return;
    }
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(FB);
    } else if (num % 3 === 0) {
      console.log(F);
    } else if (num % 5 === 0) {
      console.log(B);
    } else {
      console.log(num);
    }
    iter(num + 1);
  };
  return iter(begin);
};

export default fizzBuzz;
// END
