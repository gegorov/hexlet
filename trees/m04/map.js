// map.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и
// дерево, а возвращает отображенное дерево.

// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);
// const actual = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);

const map = (func, tree) => {
  const newNode = func(tree);
  if (tree.type === 'directory') {
    return { ...newNode, children: tree.children.map(child => map(func, child)) };
  }

  return newNode;
};
export default map;
