// downcaseFileNames.js
// Реализуйте функцию, которая принимает на вход директорию, приводит имена всех файлов в этой и во
// всех вложенных
// директориях к нижнему регистру. Результат в виде обработанной директории возвращается наружу.

// Экспортируйте по умолчанию функцию.

// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);

// const updatedTree = downcaseFileNames(tree);

const downcaseFileNames = (tree) => {
  if (tree.type === 'file') {
    return { ...tree, name: tree.name.toLowerCase() };
  }
  return { ...tree, children: tree.children.map(downcaseFileNames) };
};

export default downcaseFileNames;
