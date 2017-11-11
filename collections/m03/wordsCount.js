// wordsCount.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
// два параметра: список слов и список стоп-слов. Задача функции вернуть объект
// типа Map, содержащий в себе частоту переданных слов. То есть, ключами
// являются сами слова, а значениями число повторений.
//
// Слова могут быть в разных регистрах, а подсчет должен работать без учета
// регистра. Соответственно в результирующем наборе слова должны быть
// представлены в нижнем регистре.
// Порядок слов в выходе должен совпадать с порядком появления новых слов во
// входном наборе
// stopWords это список стоп-слов, то есть эти слова не должны попадать в
// результирующую структуру
// const stopWords = ['and', 'or', 'a', 'the', ''];
// const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
// wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
// Подсказки
// Воспользуйтесь тройкой map/filter/reduce.
// Функция has типа Map проверяет наличие ключа в мапе

const wordsCount = (words, stopWords) => {
  const output = words.map(word => word.toLowerCase())
    .filter(word => !stopWords.includes(word))
    .reduce(
      (map, x) => (!map.has(x) ? map.set(x, 1) : map.set(x, map.get(x) + 1))
      , new Map(),
    );
  return output;
};

export default wordsCount;
