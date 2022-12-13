import { Base } from "./Base.mjs";

function StringBuilder(str = "") {
  this.str = str;
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

let s = new StringBuilder("Hello!");

