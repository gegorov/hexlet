// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const has = (list, element) => {
  if (head(list) === element) {
    return true;
  }
  let newList = tail(list);
  while (!isEmpty(newList)) {
    if (head(newList) === element) {
      return true;
    }
    newList = tail(newList);
  }
  return false;
};

const reverse = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  let newList = l(head(list));
  let list1 = tail(list);
  while (!isEmpty(list1)) {
    newList = cons(head(list1), newList);
    list1 = tail(list1);
  }
  return newList;
};

const concat = (list1, list2) => {
  let result = list2;
  if (isEmpty(list1)) {
    return result;
  }
  result = cons(head(reverse(list1)), result);
  const tmp = tail(reverse(list1));
  if (isEmpty(tmp)) {
    return result;
  }
  return concat(reverse(tmp), result);
};

export { has, reverse, concat };
// END