const arr = [1, 2, 3];
arr.map((x) => x + 1);


const Functor = (value) => ({
  map: (fn) => Functor(fn(value)),
});

const f = Functor(3);

const trace = (x) => {
  console.log(x);
  return x;
};

f.map(trace);
  .map(trace);
//?
