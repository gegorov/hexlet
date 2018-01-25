/*
test.js
Проверьте с помощью утверждений (asserts) правильность работы функции factorial,
которая вычисляет факториал переданного числа. Факториал числа x — это
произведение всех чисел от 1 до x. Например, факториал числа 4 это
1 * 2 * 3 * 4 = 24. Подробнее о факториале можно почитать в википедии.

Несколько примеров:

factorial(0); // 1
factorial(1); // 1
factorial(5); // 120
Кроме основных проверок на работу с произвольными числами (нужно добавить свою
проверку, поверх уже существующих в модуле), не забудьте также протестировать
пограничные случаи (вызов с параметром 0 и 1).

Подсказки
assert(<expression>) проверяет, что результат <expression> является истиной.
assert.equal(<actual>, <expected>) проверяет, что <actual> и <expected> равны
(проверка на нестрогое равенство ==).
*/

import assert from 'assert';
// eslint-disable-next-line
import { factorial } from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);

// BEGIN (write your solution here)
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(6), 720);
assert.equal(factorial(7), 5040);
// END
