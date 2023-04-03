const arr = [1, 2, 3];
arr.map((x: any) => x + 1);

function customMap(fn: any, value: any) {
  return fn(value);
}

const customArray = (value: any[]) => ({
  map: (fn) => {
    let result = [];
    for (let i = 0; i < value.length; i += 1) {
      result[i] = fn(value[i]);
    }
    return result;
  },
});

const result1 = customArray([1, 2, 3]).map((x) => x + 1);
result1;


const Functor = (value: any) => ({
  map: (fn: any) => Functor(fn(value)),
});

const f = Functor(3);

const trace = (x: any) => {
  console.log(x);
  return x;
};

f.map(trace);
f.map((x: any) => x)
  .map(trace);
//?
