// Enumerable.js
// Реализуйте ленивую версию Enumerable. Интерфейс включает в себя следующие методы: select, where,
// orderBy, toArray.

// Подсказки
// Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray, вместо этого
// необходимо формировать коллекцию из отложенных вычислений.

class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }
  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

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
    const newOps = this.operations.slice();
    newOps.push(coll => coll.sort(comparator));
    return new Enumerable(this.collection.slice(), newOps);
  }
  toArray() {
    return this.operations.reduce((acc, fn) => fn(acc), this.collection);
  }
}

// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];

// const coll = new Enumerable(cars);
// console.log(coll.toString());

// const result = coll.where(car => car.year === 2014).select(car => car.model);
// console.log(`+++++ ${result.operations}`);

// console.log(`##### ${result.toArray()}`);

export default Enumerable;
