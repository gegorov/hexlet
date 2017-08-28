// eslint-disable-next-line
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
const makeSegment = (point1, point2) => cons(point1, point2);

const startSegment = segment => car(segment);
const endSegment = segment => cdr(segment);
const segmentToString = segment =>
  `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
const midpointSegment = (segment) => {
  const x1 = getX(car(segment));
  const y1 = getY(car(segment));
  const x2 = getX(cdr(segment));
  const y2 = getY(cdr(segment));

  return makePoint((x1 + x2) / 2, (y1 + y2) / 2);
};
export { makeSegment, startSegment, endSegment, midpointSegment, segmentToString };
// END