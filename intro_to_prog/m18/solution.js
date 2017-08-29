/*
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).
*/
// eslint-disable-next-line
import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const toUpp = (string) => {
  let result = '';
  if (string[0] !== ' ') {
    result += toUpperCase(string[0]);
  } else {
    result += string[0];
  }
  for (let i = 1; i < length(string); i++) {
    if (string[i] !== ' ' && string[i - 1] === ' ') {
      result += toUpperCase(string[i]);
    } else {
      result += string[i];
    }
  }
  return result;
};

export default toUpp;
// END
