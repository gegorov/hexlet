const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];

const reducer = (acc, item) => {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
};


const findOdd = arr => arr.reduce(reducer, {});


const tmp = findOdd(numbers);
console.log(tmp);

