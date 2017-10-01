// index.js
// Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает
// на вход три параметра:
//
// Количество раз, которое нужно применить функцию к аргументу.
// Функцию для применения
// Аргумент для применения
// apply(0, Math.sqrt, 4); // => 4
// apply(1, Math.sqrt, 4); // => 2
//
// // Math.sqrt(Math.sqrt(16))
// apply(2, Math.sqrt, 16); // => 2
//
// apply(1, v => v ** 2, 3); // => 9
// apply(5, v => v + 10, 3); // => 53
// BEGIN (write your solution here)
const apply = (n, f, arg) => {
  if (n === 0) {
    return arg;
  }
  return apply(n - 1, f, f(arg));
};
export default apply;
// END
