// BEGIN (write your solution here)
export default class SimpleCard {
  constructor(name, dps) {
    this.name = name;
    this.dps = dps;
  }

  damage() {
    return this.dps;
  }
}
// END
