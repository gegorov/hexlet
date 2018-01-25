/*
myMathModule.js
В файле myMathModule.js:

Создайте функцию getTriangleArea, которая принимает два аргумента h и b и
вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота,
а b — основание треугольника.
Пример:
getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
Экспортируйте функцию.

solution.js
В файле solution.js:
Импортируйте getTriangleArea из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника
высотой n и основанием n2/2. Используйте функцию square.
Экспортируйте созданную функцию по умолчанию.
*/
export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
export const getTriangleArea = (h, b) => (1 / 2) * h * b;
// END
