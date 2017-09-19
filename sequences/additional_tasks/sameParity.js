// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
// список и возвращает новый, состоящий из элементов, у которых такая же
//  четность, как и у первого элемента входного списка.
//
// sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)
//
// sameParity(l()); // ()

// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sameParity = (list) => {
  if (isEmpty(list)) {
    return list;
  }
  const coin = Math.abs(head(list) % 2);
  return filter(el => Math.abs(el % 2) === coin, list);
};
export default sameParity;
// END
