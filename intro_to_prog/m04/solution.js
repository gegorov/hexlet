/*
solution.js
Создайте константу weight, запишите в нее ваш вес в килограммах.
Создайте константу c, запишите в нее значение скорости света в вакууме в метрах
в секунду: 300000000.
Вычислите значение энергии вашего тела с помощью знаменитой формулы E=mc2, где
 m — это ваш вес (weight), а c — это скорость света. Запишите значение в константу energy.
Подсказка: в JavaScript нет оператора ^ для возведения к квадрат, поэтому вам
нужно будет придумать как возвести число в квадрат.
*/

const pi = 3.14;
console.log(pi);
// BEGIN (write your solution here)
const weight = 75;
const c = 300000000;
const energy = weight * c * c;
// END

export default energy;
console.info(`Your body energy is ${energy} joules. This is 1 /
${Math.round(389000000000000000000 / energy)} of the yearly world energy consumption. Woah!`);
