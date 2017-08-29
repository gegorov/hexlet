/*
solution.js
Напишите функцию smallestDivisor. Она должна находить наименьший целый делитель числа. Поведение у функции должно быть таким же, как в предыдущем уроке, но реализация — код функции — должно быть другим. На этот раз реализуйте императивный итеративный процесс, что означает:

не используйте рекурсию
используйте переменные
используйте цикл while
Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17

smallestDivisor(0); // NaN
smallestDivisor(-3); // NaN
Замечание: Если переданное в smallestDivisor число меньше единицы, возвращайте NaN.

Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он вычисляет остаток от деления одного операнда на другой. Например, 11%5 это 1, а 10%2 это 0.

Так что если x%y это 0, то y делит x без остатка.
*/
// BEGIN (write your solution here)
const smallestDivisor = (num) => {
  let counter = 2;
  if (num < 1) {
    return NaN;
  } else if (num === 1) {
    return 1;
  }
  while (counter < num) {
    if (num % counter === 0) {
      return counter;
    }
    counter++;
  }
  return counter;
};
// END

export default smallestDivisor;