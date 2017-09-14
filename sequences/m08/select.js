// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
const select = (tag, dom) => {
  const func = (element, acc) => {
    const newAcc = (is(tag, element)) ? concat(l(element), acc) : acc;
    const newNewAcc =
    (hasChildren(element)) ? concat(
      select(tag, children(element)),
      newAcc,
    ) : newAcc;
    return newNewAcc;
  };
  return reduce(func, l(), dom);
};

export default select;


// 1. идем по списку
// 2. проверяем на совпадение
// 3. если есть то кладем ноду в аккум
// 3. если есть дети вызываем рекурсивно себя на детей
