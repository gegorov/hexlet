import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, accumulator, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(tail(items), func(head(items), acc));
  };
  return iter(elements, accumulator);
};

export const emptyTagsCount = (tag, elements) => reduce(
  (item, acc) => is(tag, item) && value(item) === '' ? acc + 1 : acc,
  0,
  elements);

// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
