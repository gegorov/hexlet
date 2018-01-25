/*
squareOfSum.js
Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по
формуле: a^2 + 2ab + b^2 (a^2 означает "a в степени 2" или "а в квадрате").

squareOfSum(2, 3) // 25
squareOfSum(1, 10) // 121
Подсказка: в JavaScript нет оператора ^, поэтому вам нужно будет придумать как
возвести число в квадрат.
*/

// BEGIN (write your solution here)
const squareOfSum = (a, b) => (a * a) + (2 * a * b) + (b * b);
// END

export default squareOfSum;
