import { Base } from "./base-class.mjs";

class IntBuilder extends Base {
  constructor(int = 0) {
    super();
    this.int = int;
  }

  plus(...n) {
    return n.reduce((prev, curr) => prev + curr, this.int);
  }
}

let intBuilder = new IntBuilder(10);

console.log(
  intBuilder.plus(2, 3, 2)
);
