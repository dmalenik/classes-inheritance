import { Base } from "./Base.mjs";

function StringBuilder(str = "") {
  this.str = str;
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus = function (...str) {
  this.str = str.reduce((prev, curr) => prev + curr, this.str);

  return this;
};
StringBuilder.prototype.minus = function (n) {
  this.str = this.str.slice(0, -n);

  return this;
};

let strBuilder = new StringBuilder("Hello");

console.log(strBuilder.plus(" all", "!").minus(4));
