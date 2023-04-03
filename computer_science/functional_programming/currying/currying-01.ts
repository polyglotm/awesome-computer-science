// NOTE: currying definition
//   x = f(a,b,c) becomes:
//   h = g(a)
//   i = h(b)
//   x = i(c)

// NOTE: basic sum
const sumBasic = function (a, b, c) {
  return a + b + c;
};

sumBasic(1, 2, 3);

// NOTE: basic currying
const x = function g(a) {
  return function i(b) {
    return function x(c) {
      return a + b + c;
    };
  };
};

// NOTE: currying with lambda
const x = (a) => (b) => (c) => (a + b + c);

const state1 = x(1);
const state2 = state1(2);

state2(3); //6
state1(4)(5); //10

// NOTE: currying + lambda + recursion
const sum = (a) => (b) => b ? sum(a + b) : a;
sum(1)(2)(3)(); // 6
sum(1)(2)(3)(4)(5)(); // 15

// NOTE: Stream basic
function infiniteN(n): any {
  return {
    value: n,
    next: () => infiniteN(n + 1);
  }
    ;
}

let infiniteSimulation = infiniteN(1);

infiniteSimulation.value;
infiniteSimulation = infiniteSimulation.next();
infiniteSimulation.value;



// NOTE: stream advanced
function stream(n): any {
  this.value = n;
  this.next = () => stream(n + 1);

  return this;
}

let some = stream(1);
some.value;
some.next();
some.value;
some.next();
some.value;

// NOTE: generator
function* infiniteGenerator(n) {
  while (true) {
    yield n;
    n += 1;
  }
}

const t = infiniteGenerator(1);
t.next().value;
t.next().value;
t.next().value;
t.next().value;
t.next().value;
