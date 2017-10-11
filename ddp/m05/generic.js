import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail, filter } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const filtered = filter(el => typeTag(el) === typeTag(obj), methods);
  const filtered2 = filter(el => car(contents(el)) === methodName, filtered);
  if (isEmpty(filtered2)) {
    return null;
  }
  return cdr(contents(head(filtered2)));
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
