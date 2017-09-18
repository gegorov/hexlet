// BEGIN (write your solution here)
const l = (...items) => {
  if (items[0] === undefined) {
    return '';
  }
  const nItems = items.slice(1);
  return `${items[0]} \n ${l(...nItems)}`;
};

const head = (list) => {
  const result = list.split('\n', 1);
  return result.toString();
};

const tail = (list) => {

};

const toString = (list) => {
  return list.toString();
};

export { l, head, tail, toString };
// END
