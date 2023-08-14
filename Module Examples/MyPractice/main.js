import { wishes, pi, arr } from "./module.js";

function greet(name) {
    console.log("Hi, " + name);
}
greet("Syed Faizan Ali");
wishes("Syed Fardeen Ali");
console.log(pi);

for (const x of arr) {
    console.log(x);
}
