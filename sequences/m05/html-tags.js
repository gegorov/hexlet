// html-tags.js
// Реализуйте и экспортируйте функцию filter для библиотеки html-tags,
// используя итеративный процесс:
//
// import { node, append, make, filter, toString as htmlToString } from 'hexlet-html-tags';
//
// const html1 = append(make(), node('h1', 'header1'));
// const html2 = append(html1, node('h1', 'header2'));
// const html3 = append(html2, node('p', 'content'));
//
// const processedHtml = filter((element) =>
//   !is('h1', element), html3);
//
// //<p>content</p>
// htmlToString(processedHtml);
// Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты
// цитат и возвращает список цитат.
//
// import { toString as pairToString } from 'hexlet-pairs-data';
// import { make, append, node } from 'hexlet-html-tags';
//
// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
// const dom4 = append(dom3, node('blockquote', 'live is live'));
// const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));
//
// pairToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');


import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const filterIter = (old, acc) => {
    if (isEmpty(old)) return acc;
    const element = head(old);
    const tailElements = tail(old);
    if (func(element)) {
      return filterIter(tailElements, append(acc, element));
    }
    return filterIter(tailElements, acc);
  };

  return filterIter(reverse(elements), make());
};

export const quotes = (elements) => {
  const newElements = filter(element => (is('blockquote', element)), elements);
  return map(element => value(element), newElements);
};

// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
