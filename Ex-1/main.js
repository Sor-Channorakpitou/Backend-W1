import Duration from "./Ex2.js";

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function sum(a,b) {
    return a + b;
}

// console.log("Hello from first server in the backend class")
// console.log(sum(1,34))
// console.log("This is the new line")

const d = new Duration(100);

console.log(d.toString())