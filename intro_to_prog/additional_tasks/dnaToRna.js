/*
ДНК и РНК это последовательности нуклеотидов.
Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
G -> C
C -> G
T -> A
A -> U
solution.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

toRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
*/

import * as strings from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
export const toRna = (dna) => {
  let rna = '';
  for (let i = 0; i < strings.length(dna); i += 1) {
    switch (dna[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        break;
    }
  }
  return rna;
};
export default toRna;
