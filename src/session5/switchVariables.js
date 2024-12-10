const { log } = require("../utils/logger");
let a = 7;
let b = 12;

//common way
let c = a;
a = b;
b = c;
log(a, b);

//Javascript specific
[a, b] = [b, a];
log(a, b);
