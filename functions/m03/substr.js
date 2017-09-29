// substr.js
// Реализуйте и экспортируйте по умолчанию функцию substr, которая возвращает
// подстроку из переданной строки. Подстрокой называется любая выбранная часть
// строки. Функция принимает на вход три параметра:
//
// Строка
// Начальный индекс. Значение по умолчанию: 0.
// Длина подстроки. Значение по умолчанию: длина строки.
// У этой функции множество вариантов поведения:
//
// Если переданная длина отрицательная, то внутри она становится единицей
// Если переданная длина + начальный индекс выходят за границу строки, то
// берется подстрока от индекса до конца строки
// Если начальный индекс отрицательный, то внутри он становится нулем
// По-умолчанию возвращается сама строка:
//
// substr(''); // => ''
// substr('abba'); // => abba
// substr('abba', 0, 1); // => a
// substr('abba', 1, 2); // => bb
// substr('abba', -10, 2); // => ab
// substr('abba', -1, 100); // => abba
// substr('abba', -1, -1); // => a
// substr('abba', 1, -10); // => b

import { getLength } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const substr = (str, startIndex = 0, length = getLength(str)) => {
  if (str === '') {
    return str;
  }

  const posLastInd = length < 0 ? 1 : length;
  const start = startIndex < 0 ? 0 : startIndex;
  const lastInd =
    (start + posLastInd > getLength(str)) ? getLength(str) : start + posLastInd;

  const iter = (begin, acc) => {
    if (begin === lastInd) {
      return acc;
    }
    const newAcc = acc + str[begin];

    return iter(begin + 1, newAcc);
  };

  return iter(start, '');
};

export default substr;
// END
