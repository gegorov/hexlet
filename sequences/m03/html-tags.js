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
