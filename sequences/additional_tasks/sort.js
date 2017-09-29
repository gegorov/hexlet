// sort.js
// Реализуйте и экспортируйте по умолчанию функцию sort, которая сортирует
// переданный массив по возрастанию
//
// sort(l(3, 3, 0, -1, 0, 4, -5));
// // (-5, -1, 0, 0, 3, 3, 4)

// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list) || isEmpty(tail(list))) {
    return list;
  }

  const point = head(list);
  const newList = tail(list);

  const higher = filter(n => n >= point, newList);
  const lower = filter(n => n < point, newList);

  return concat(concat(sort(lower), l(point)), sort(higher));
};
export default sort;
// END
