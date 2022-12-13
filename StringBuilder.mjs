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

// k from n equals 5
// k will return first 5 chars, not 4 as it's mentioned in the example
StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.str.length / n);

  this.str = this.str.slice(0, k);

  return this;
};
StringBuilder.prototype.remove = function (str) {
  this.str = this.str
    .split("")
    .filter((char) => char !== str)
    .join("");

  return this;
};
StringBuilder.prototype.sub = function (from, n) {
  this.str = this.str.split("").splice(from, n).join("");

  return this;
};
StringBuilder.prototype.get = function () {
  return this.str;
};

let strBuilder = new StringBuilder("Hello");

strBuilder
  .plus(" all", "!")
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove("l")
  .sub(1, 1)
  .get();
