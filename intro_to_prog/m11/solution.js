/*
solution.js
Реализуйте функцию reverse, которая переворачивает строку. Например:

reverse('hello, world!'); // !dlrow ,olleh
Подсказки
Длина строки str находится так: str.length
Не забудьте: индексы начинаются с 0, но длина — это реальная длина. Так что
индекс последнего символа не совпадает с длиной строки.
*/
// BEGIN (write your solution here)
// const reverse = (str) => {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     result += str[i];
//   }
//   return result;
// };
// END

const recReverse = (str) => {
  const strLength = str.length;
  if (strLength === 0) {
    return str;
  }

  return `${str[strLength - 1]}${recReverse(str.slice(0, strLength - 1))}`;
};

const myStr = 'Lorem ipsum';
console.log(recReverse(myStr));


export default recReverse;
