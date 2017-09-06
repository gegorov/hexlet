// html-tags.js
// Реализуйте функцию map для библиотеки html-tags. Реализация должна быть
// рекурсивной с использованием итеративного процесса.
//
// import { make, append, node, value, is } from 'hexlet-html-tags';
//
// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
//
// const processedDom = map((element) => {
//   if (is('h1', element)) {
//     return node('h2', value(element));
//   }
//   return element;
// }, dom3);
// Реализуйте функцию mirror, которая переворачивает содержимое тегов, так
// чтобы читать его нужно было справа налево, а не слева направо.
//
// import { make, append, node, value, is, toString as htmlToString } from
// 'hexlet-html-tags';
//
// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
//
// // <h1>emehcs</h1>
// // <p>psil a si</p>
// htmlToString(mirror(dom3));
// Экспортируйте все созданные функции.

import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString, make, append } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const map = (func, elements) => {
  const mapIter = (elements1, newElements) => {
    if (isEmpty(elements1)) {
      return newElements;
    }
    return mapIter(tail(elements1), cons(func(head(elements1)), newElements));
  };
  return mapIter(reverse(elements), make());
};

const mirror = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const mirroredValue = reverseStr(value(head(elements)));
  const mirroredElement = node(name(head(elements)), mirroredValue);

  return cons(mirroredElement, mirror(tail(elements)));
};
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};

export { map, mirror };
