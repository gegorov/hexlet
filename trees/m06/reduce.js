// reduce.js
// Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.

// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('nginx'),
//     mkdir('consul', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hosts'),
// ]);
// reduce((acc, n) => acc + 1, tree, 0); // => 6

// BEGIN (write your solution here)
const reduce = (f, tree, acc) => {
  const newAcc = f(acc, tree);
  return tree.type === 'directory'
    ? (tree.children || []).reduce((iAcc, n) => reduce(f, n, iAcc), newAcc) : newAcc;
};

export default reduce;
// END
