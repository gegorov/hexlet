// logic.js
// Экспортируйте тройку True, False, If, используя только функции, внутри
// которых только функции. ;) То есть нельзя пользоваться встроенными в
// язык if, а также true/false.
//
// Пример:
//
// import { If, True, False } from './logic';
//
// If(True)('one')('two'); // one
// If(False)('one')('two'); // two
// Из вызовов выше можно сразу увидеть, что If это функция, внутри которой
// матрешка из двух функций.

// BEGIN (write your solution here)
// eslint-disable-next-line
export const True = (x, y) => x;
export const False = (x, y) => y;

export const If = func => x => y => func(x, y);
// END
