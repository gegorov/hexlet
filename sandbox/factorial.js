const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    console.log('Calculatiog result', n);
    const result = fn(n);
    console.log('result:', result);
    cache[n] = result;
    return result;
  };
};

const memFactorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    return x * memFactorial(x - 1);
  },
);

console.log(factorial(100));
console.log(memFactorial(100));
console.log(memFactorial(99));

