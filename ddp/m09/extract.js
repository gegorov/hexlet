// В HTML, некоторые элементы хранят ссылку в атрибуте href, а некоторые в src.
// Например:
//
// <img src="/logo.jpg">
// <link href="/style.css">
// <a href="/">
// Абстракция Tags содержит интерфейс для представления тега HTML:
//
// const hr = make('hr');
// const a = make('a', { href: '/' });
//
// getName(a); // => a
// getAttribute('href', a); // => /
// getAttribute('notexist', a); // => undefined
// extract.js
// Реализуйте и экспортируйте по умолчанию функцию extract, которая принимает
// на вход список тегов (только <a>, <link> и <img>) и возвращает список ссылок
// извлеченных из этих тегов.
//
// const tags = l(
//   make('a', { href: '/about' }),
//   make('img', { src: '/avatar.jpeg' }),
//   make('link', { href: '/favicon.ico' }),
// );
//
// extract(tags); // => ('/about', '/avatar.jpeg', '/favicon.ico')
// Подсказки
// Воспользуйтесь функцией map для обхода коллекции
// В коде не должно быть условных конструкций и, в целом, любых логических
// выражений. Используйте полиморфизм на основе ключей в объекте.

import { toString, map, head } from 'hexlet-pairs-data'; // eslint-disable-line
import { getAttribute, getName } from './tags'; // eslint-disable-line

// BEGIN (write your solution here)
const extract = (tags) => {
  const func = (el) => {
    const name = getName(el);
    if (name === 'img') {
      return getAttribute('src', el);
    }
    return getAttribute('href', el);
  };
  const result = map(func, tags);
  return result;
};
export default extract;
// END
// Решение учителя
// const mapping = {
//   img: t => getAttribute('src', t),
//   a: t => getAttribute('href', t),
//   link: t => getAttribute('href', t),

// };
// export default tags => map(tag => mapping[getName(tag)](tag), tags);
