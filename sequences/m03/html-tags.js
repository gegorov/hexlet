// html-tags.js
// Реализуйте базовый интерфейс для создания html. Он включает в себя
// следующие функции:
//
// make - конструктор
// node - создает новый тег. Содержит два элемента, имя тега и его содержимое.
// Дополнительно реализуйте селекторы тега: name и value
// append - добавляет элемент (тег) в html-список
// toString - возвращает текстовое представление html
// Пример использования этого интерфейса:
//
// import { make, append, toString, node } from './html-tags';
//
// const dom1 = make();
//
// const dom2 = append(dom1, node('h1', 'hello, world'));
// const dom3 = append(dom2, node('h2', 'header2'));
//
// const tag = node('h3', 'header3');
// const dom = append(dom3, tag);
//
// toString(dom);
// // <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>
//
// // Пример без создания промежуточных переменных
// toString(append(make(), node('p', 'this is Sparta!')));
// // <p>this is Sparta!</p>
// Экспортируйте все созданные функции.

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const make = () => l();
const node = (tag, value) => cons(tag, value);
const name = element => car(element);
const value = element => cdr(element);
const append = (list, element) => consList(element, list);
const toString = (list) => {
  if (isEmpty(list)) {
    return '';
  }

  const tag = name(head(list));
  return `${toString(tail(list))}<${tag}>${value(head(list))}</${tag}>`;
};

export { make, node, name, value, append, toString };

// END
