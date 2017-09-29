import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const reversePair = pair => cons(cdr(pair), car(pair));
// END
export default reversePair;
