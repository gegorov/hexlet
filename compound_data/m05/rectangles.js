// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => cons(point, cons(width, height));

const startPoint = rectangle => car(rectangle);
const width = rectangle => car(cdr(rectangle));
const height = rectangle => cdr(cdr(rectangle));

const square = rectangle => width(rectangle) * height(rectangle);
const perimeter = rectangle => 2 * (width(rectangle) + height(rectangle));
const containsTheOrigin = (rectangle) => {
  const secondPoint = makePoint(
    (getX(startPoint(rectangle)) + width(rectangle)),
    (getY(startPoint(rectangle)) - height(rectangle)),
  );

  if (quadrant(startPoint(rectangle)) === 2 && quadrant(secondPoint) === 4) {
    return true;
  }
  return false;
};

export { makeRectangle, startPoint, width, height, square, perimeter, containsTheOrigin };
// END
