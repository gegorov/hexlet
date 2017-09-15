// take.js
// Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает
// список, состоящий из первых n (значение передается первым параметром)
// элементов исходного (переданного вторым параметром) списка.
// Остальные детали работы функции демонстрирует нижеприведённый код:
//
// take(3, l()); // ()
// take(3, l(1, 2)); // (1, 2)
// take(1, l(7, 2)); // (7)
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const take = (n, list) => {
  if (n === 0 || isEmpty(list)) {
    return l();
  }
  return cons(head(list), take(n - 1, tail(list)));
};

export default take;
// END
