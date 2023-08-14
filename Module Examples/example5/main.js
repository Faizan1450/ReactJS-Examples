import { wishes, pi, arr } from "./module.js"; //Not best practice and not recommanded

function greet(name) {
    console.log("Good Evening, " + name);
}

greet("Syed Faizan Ali");
wishes("Syed Faizan Ali")

console.log(pi);

for (const x of arr) {
    console.log(x);
}
