import { Base } from "./base-class.mjs";

class IntBuilder extends Base {
  constructor() {
    super();
  }
}

let int = new IntBuilder();

console.log(int.sayHello());
