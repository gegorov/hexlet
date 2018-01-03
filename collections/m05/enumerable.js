// Enumerable.js
// Select
// Реализуйте метод select, который отображает (принцип работы как у функции map)
// коллекцию, другими словами, извлекает из элементов коллекции нужные данные и
// возвращает объект с новой (отображенной) коллекцией из этих данных.
//
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// coll = new Enumerable(cars);
//
// // [car] => [model]
// const result = coll.select(car => car.model);
//
// assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);
// OrderBy
// Реализуйте метод orderBy, который сортирует коллекцию на основе переданных данных.
//
// Принимаемые параметры:
//
// Функция, возвращающая значение, по которому будет происходить сортировка.
// Направление сортировки: asc - по возрастанию, desc - по убыванию (по умолчанию - asc).
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// coll = new Enumerable(cars);
//
// const result = coll.orderBy(car => car.year, 'desc')
//   .where(car => car.brand === 'bmw')
//   .select(car => car.model);
//
// assert.deepEqual(result.toArray(), ['m5', 'm4']);
// Подсказки
// Для выполнения сортировки воспользуйтесь встроенной функцией: sort.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    this.collection.sort(comparator);
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;

//
// describe('HexletLinq', () => {
//   let coll;
//   let cars;
//
//   beforeEach(() => {
//     cars = [
//       { brand: 'bmw', model: 'm4', year: 2013 },
//       { brand: 'bmw', model: 'm5', year: 2014 },
//       { brand: 'kia', model: 'sorento', year: 2014 },
//       { brand: 'kia', model: 'rio', year: 2010 },
//       { brand: 'kia', model: 'sportage', year: 2012 },
//     ];
//     coll = new Enumerable(cars);
//   });
//
//   it('#where', () => {
//     const result = coll
//       .where(car => car.brand === 'kia')
//       .where(car => car.year > 2011);
//
//     expect(result.toArray()).toEqual([cars[2], cars[4]]);
//   });
//
//   it('#orderBy', () => {
//     const result = coll.orderBy(car => car.year)
//       .select(car => car.model);
//
//     expect(result.toArray()).toEqual(['rio', 'sportage', 'm4', 'm5', 'sorento']);
//   });
//
//   it('#order with numbers', () => {
//     const coll2 = new Enumerable([5, 8, 7, 1, 2, 3, 4, 6, 9, 10, 11, 12, 13]);
//     const result = coll2.orderBy(v => v);
//     expect(result.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
//   });
//
//   it('#orderBy with where', () => {
//     const result = coll.orderBy(car => car.year)
//       .where(car => car.brand === 'kia')
//       .select(car => car.model);
//
//     expect(result.toArray()).toEqual(['rio', 'sportage', 'sorento']);
//   });
//
//   it('#OrderBy for strings', () => {
//     const result = coll.orderBy(car => car.model)
//       .select(car => car.model);
//
//     expect(result.toArray()).toEqual(['m4', 'm5', 'rio', 'sorento', 'sportage']);
//   });
//
//   it('#orderByDesc', () => {
//     const result = coll.orderBy(car => car.year, 'desc')
//       .where(car => car.brand === 'bmw')
//       .select(car => car.model);
//
//     expect(result.toArray()).toEqual(['m5', 'm4']);
//   });
//
//   it('#select', () => {
//     const result = coll
//       .select(car => car.brand);
//     expect(result.toArray()).toEqual(['bmw', 'bmw', 'kia', 'kia', 'kia']);
//   });
// });
