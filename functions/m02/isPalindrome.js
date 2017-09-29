// Реализуйте и экспортируйте по умолчанию функцию isPalindrome с
// использованием рекурсии.
//
// Примеры использования:
//
// import isPalindrome from './solution';
//
// isPalindrome('radar'); // => true
// isPalindrome('a'); // => true
// isPalindrome('abs'); // => false
// Подсказки
// Используйте функцию length из модуля strings чтобы узнать длину строки:
//
// length('hello'); // => 5
// Используйте функцию substr из модуля strings чтобы получить подстроку из строки:
//
// substr('hello', 0, 4); // => "hell"

import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const isPalindrome = (str) => {
  const last = length(str) - 1;
  if (last <= 1) {
    return true;
  }

  if (str[0] !== str[last]) {
    return false;
  }

  return isPalindrome(substr(str, 1, last - 1));
};
export default isPalindrome;
// END
