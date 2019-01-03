import { reduce } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const calculateDirSize = tree => reduce(
  (acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0,
);

const du = tree => tree.children
  .map(n => [n.name, calculateDirSize(n)])
  .sort((a, b) => b[1] - a[1]);

export default du;
// END

/** Решение учителя
const calculatefilesSize = node => reduce((acc, n) => {
  if (n.type === 'directory') {
    return acc;
  }

  return acc + n.meta.size;
}, node, 0);

const du = (node) => {
  const result = node.children.map(n => [n.name, calculatefilesSize(n)]);
  // Обычный дестракчеринг. JS позволяет пропускать имена если они не используются
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};
*/
