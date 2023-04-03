// NOTE: this example came from
//   https://en.wikipedia.org/wiki/Function_composition_(computer_science)#JavaScript
function o(f, g) {
    return function (x) {
        return f(g(x));
    };
}
// Alternatively, using the rest operator and lambda expressions in ES2015
const compose = (...fs) => (x) => fs.reduceRight((acc, f) => f(acc), x);
