/*
addDigits.js
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает
следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до
тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Пример:

addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
Подсказка
Выделите процесс суммирования цифр в числе в отдельную функцию
*/
// eslint-disable-next-line
import { length } from './strings';

// BEGIN (write your solution here)
const sum = (number) => {
  let result = 0;
  let num = number;
  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
};

const addDigits = (number) => {
  let result = 0;
  let num = number;
  while (num > 9) {
    num = sum(num);
  }
  result = num;
  return result;
};

export default addDigits;
