// difference.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
// два множества и возвращает множество, составленное из таких элементов,
// которые есть в первом множестве, но нет во втором.
//
// difference(new Set([2, 1]), new Set([2, 3]));
// // → [1]

const difference = (first, second) => new Set([...first].filter(x => !second.has(x)));

console.log(difference(new Set([2, 1]), new Set([2, 3])));
