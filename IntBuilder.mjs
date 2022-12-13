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

  multiply(n) {
    this.int = this.int * n;

    return this;
  }

  divide(n) {
    this.int = this.int / n;

    return this;
  }

  mod(n) {
    this.int = this.int % n;

    return this;
  }
}

let intBuilder = new IntBuilder(10);

intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
