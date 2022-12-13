import { Base } from "./Base.mjs";

function StringBuilder() {}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;
