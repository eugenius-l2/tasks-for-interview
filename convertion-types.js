// Convert to number:
// >, <, <=, >=
// |, &, ^, ~
// (-, +, *, /, %) ecxept "+" if operand is string 
// +
// (== !=) if two operands are type of string, then  ....

console.log(true + false); // 1
console.log(12 / "6"); // 2
console.log("number" + 15 + 3); // number153
console.log(15 + 3 + "number"); // 18number
console.log([1] > null); // true
console.log("foo" + + "bar"); // fooNaN
console.log(5 - "4"); // 1
console.log('true' == true) // false
console.log(false == 'false') // false
console.log(null == '') // false
console.log(null == undefined) // true
console.log(!!"false" == !!"true") // true
console.log(['x', 1] == 'x,1') // true
console.log([] + null + 1) // null1
console.log(0 || "0" && {}); // {} 
console.log([1,2,3] == [1,2,3]); // false
console.log({}+[]+{}+[1]); // [object Object][object Object]1
console.log(!+[]+[]+![]) // truefalse
console.log(new Date(0) - 0); // 0
console.log(new Date(0) + 0); //