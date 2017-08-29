/*
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

isHappyTicket.js
Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как в числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
Подсказки
Преобразовать число в строку можно с помощью функции String:

String(1234); // "1234"
Преобразовать строку в число можно с помощью функции Number:

Number("456"); // 456
Используйте функцию length из модуля strings чтобы узнать длину строки:

length('hello'); // 5
Используйте функцию substr из модуля strings чтобы получить подстроку из строки:

substr('hello', 0, 4); // "hell"
*/

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const sum = (part) => {
  let counter = 0;
  for (let i = 0; i < length(part); i += 1) {
    counter += Number(part[i]);
  }
  return counter;
};

const isHappyTicket = (ticketNumber) => {
  const input = String(ticketNumber);
  const strLength = length(input);
  const part1 = substr(input, 0, strLength / 2);
  const part2 = substr(input, strLength / 2, strLength);
  return sum(part1) === sum(part2);
};

export default isHappyTicket;

// END
