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
StringBuilder.prototype.multiply = function (n) {
  this.str = Array.from({ length: n }, () => [this.str]).join(" ");

  return this;
};

// k from n = 5
// k will return first 5 chars, not 4 as per requirements
StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.str.length / n);

  this.str = this.str.slice(0, k);

  return this;
};
StringBuilder.prototype.remove = function (str) {
  this.str = this.str.split("").filter((char) => char !== str);

  return this;
};

let strBuilder = new StringBuilder("Hello");

console.log(
  strBuilder.plus(" all", "!").minus(4).multiply(3).divide(4).remove("l")
);
