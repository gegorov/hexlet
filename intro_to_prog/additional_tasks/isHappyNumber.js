/*
Счастливые числа
Назовем счастливыми числами те, которые в результате ряда преобразований вида
"сумма квадратов цифр"
превратятся в единицу. Например:

7 => 7^2 = 49, 49 => 4^2 + 9^2 = 16 + 81 = 97, 97 => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10, 10 => 1^2 + 0^2 = 1.

Вывод: исходное число 7 - счастливое.

isHappyNumber.js
Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true,
если число счастливое,
и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.

Воспользуйтесь вспомогательной функцией sumDigits, которая принимает на вход
число и возвращает
"сумму квадратов цифр" этого числа.
*/

import { length } from './strings'; // eslint-disable-line

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
const isHappyNumber = (num) => {
  let i = 0;
  let number = num;
  do {
    const sum = sumDigits(number);
    if (sum === 1) {
      return true;
    }
    number = sumDigits(sum);
    i += 1;
  } while (i < 10);
  return false;
};
export default isHappyNumber;
// END
