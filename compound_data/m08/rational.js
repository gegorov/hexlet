// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
const make = (numer, denom) => cons(numer, denom);
const numer = rat => car(rat);
const denom = rat => cdr(rat);
const toString = rat => `${numer(rat)} / ${denom(rat)}`;
const isEqual = (rat1, rat2) => numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);
const add = (rat1, rat2) => make((numer(rat1) * denom(rat2)) + (denom(rat1)
                            * numer(rat2)), denom(rat1) * denom(rat2));
const sub = (rat1, rat2) => make((numer(rat1) * denom(rat2)) - (denom(rat1)
                            * numer(rat2)), denom(rat1) * denom(rat2));
const mul = (rat1, rat2) => make(numer(rat1) * numer(rat2), denom(rat1) * denom(rat2));
const div = (rat1, rat2) => make(numer(rat1) * denom(rat2), denom(rat1) * numer(rat2));

export { make, numer, denom, toString, isEqual, add, sub, mul, div };
// END