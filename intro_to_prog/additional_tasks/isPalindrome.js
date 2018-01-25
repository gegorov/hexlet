/*
Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях.
sНапример: радар, топот.

isPalindrome.js
Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:

import isPalindrome from './isPalindrome';

isPalindrome('radar'); // true
isPalindrome('a'); // true
isPalindrome('abs'); // false
Подсказки
Используйте функцию length из модуля strings , чтобы узнать длину строки:

strings.length('hello'); // 5
Используйте функцию substr из модуля strings , чтобы получить подстроку из строки:

strings.substr('hello', 0, 4); // "hell"
*/

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
export const isPalindrome = (inputString) => {
  const strLen = length(inputString);
  if (inputString[0] !== inputString[strLen - 1]) {
    return false;
  } else if (inputString[0] === inputString[strLen - 1] && strLen <= 2) {
    return true;
  }
  return isPalindrome(substr(inputString, 1, strLen - 2));
};
export default isPalindrome;
// END
