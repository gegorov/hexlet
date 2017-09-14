/*
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
количество минут, а возвращает строку в формате чч:мм.

Пример:

solution(60); // 01:00
solution(5); // 00:05
solution(15); // 00:15
solution(175); // 02:55
solution(67); // 01:07
Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы
*/

// BEGIN (write your solution here)
export default (sec) => {
  const hours = Math.floor(sec / 60);
  const minutes = sec % 60;
  const fHours = hours >= 10 ? hours : `0${hours}`;
  const fMinutes = minutes >= 10 ? minutes : `0${minutes}`;
  return `${fHours}:${fMinutes}`;
};
// END
