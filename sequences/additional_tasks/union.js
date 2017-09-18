// union.js
// Напишите и экспортируйте функцию по умолчанию union, которая принимает на
// вход два списка и возвращает третий, являющийся объединением уникальных
// значений двух исходных списков.
//
// const list1 = l(2, 3, 2, 1, 7);
// const list2 = l(1, 5, 3, 5, 8, 9);
//
// const result = union(list1, list2);
// // (2, 3, 1, 7, 5, 8, 9)
// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const union = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  if (isEmpty(list2)) {
    return list1;
  }
  const joined = reduce(
    (element, acc) => cons(element, acc),
    list2, reverse(list1),
  );
  return reverse(reduce(
    (element, acc) => {
      const newAcc = has(acc, element) ? acc : cons(element, acc);
      return newAcc;
    },
    l(), joined,
  ));
};
export default union;
// END
