// html-tags.js
// Реализуйте и экспортируйте функцию extractHeaders, которая извлекает все
// заголовки h2 из html и возвращает новый html, в котором заголовки заменены
// на p. Тело при этом остается тем же.
//
// import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';
//
// const html1 = append(make(), node('h2', 'header1'));
// const html2 = append(html1, node('h2', 'header2'));
// const html3 = append(html2, node('p', 'content'));
//
// // <p>header1</p><p>header2</p>
// htmlToString(extractHeaders(html3));
// Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения
// слова в определенный тег. Для подсчета слов в тексте одного тега
// воспользуйтесь вспомогательной функцией wc, которая уже импортирована в
// модуль html-tags.
//
// import { make, append, node } from 'hexlet-html-tags';
//
// const html1 = append(make(), node('h2', 'header1 lisp'));
// const html2 = append(html1, node('p', 'content'));
// const html3 = append(html2, node('h2', 'lisp header2 lisp'));
// const html4 = append(html3, node('p', 'content lisp'));
//
// wordsCount('h2', 'lisp', html4); // 3
// Подсказки
// Подсчет слов в тексте: wc(word, text), где word искомое слово, а text это
// текст, в котором ведется поиск.
//
// wc('what', 'what, what, who, what'); // 3
// wc('la', 'loli'); // 0

import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
export const extractHeaders = (elements) => {
  const filtred = filter(element => is('h2', element), elements);
  return map(item => node('p', value(item)), filtred);
};
// реализация через reduce
// export const extractHeaders = (elements) => {
//   const filtred = filter(element => is('h2', element), elements);

//   return reduce((item, acc) =>
//  node(node('p', value(item)), acc), filter(() => false, elements) , filtred);
// };
export const wordsCount = (tag, word, elements) => {
  const filtered = filter(item => is(tag, item), elements);
  return reduce((item, acc) => acc + wc(word, value(item)), 0, filtered);
};

// END
