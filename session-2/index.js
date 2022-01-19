let a = 5;
const b 10;
let c = a + b;


console.log( "original output: " + c)

a = 20;


console.log( "After 'a' has been updated: " + c)

c = a + b;

console.log( "After 'c' has been updated to use the new 'a' value;");
