/*
NOTE: In mathematics,
 function composition is an operation  ∘
 that takes two functions f and g, and produces a function
 h = g  ∘  f such that h(x) = g(f(x))
 */
// function f(x) {
//   return x + 1;
// }
//
// function g(x) {
//   return x * 2;
// }
//
// function h(x) {
//   return g(f(x));
// }
//
// h(2);
const addTwo = (n) => (n + 2);
const multiplyThree = (n) => n * 3;
const minusOne = (n) => n - 1;
addTwo(2);
multiplyThree(2);
minusOne(3);
//?
const compose = (...fn) => (x) => fn.reduceRight((acc, f) => {
    return f[0](acc);
}, x);
const composeRight = (...fn) => (x) => fn.reduce((acc, f) => f.shift()(acc), x);
compose([addTwo, multiplyThree, minusOne, addTwo])(2);
composeRight([addTwo, multiplyThree, minusOne, addTwo])(2);
a, b, c, d, e;
a(b(c(d(e(x)))));
