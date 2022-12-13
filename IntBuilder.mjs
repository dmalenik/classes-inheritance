import { Base } from "./base-class.mjs";

class IntBuilder extends Base {
  constructor(int = 0) {
    super();
    this.int = int;
  }

  get() {
    return this.int;
  }

  plus(...n) {
    this.int = n.reduce((prev, curr) => prev + curr, this.int);

    return this;
  }

  minus(...n) {
    this.int = n.reduce((prev, curr) => prev - curr, this.int);

    return this;
  }
}

let intBuilder = new IntBuilder(10);

console.log(intBuilder.plus(2, 3, 2).minus(1, 2).get());
