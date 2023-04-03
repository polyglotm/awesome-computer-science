// const conditionA = true
// const conditionB = true

const some = 7;

if (!(3 <= some && some <= 5)) {
  console.log('!(3<=some&&some<=5)');
}

if (some < 3 || 5 < some) {
  console.log('some<3||5>some)');
}


function de_morgan_a(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
  return !((!a || !b) && !(c && !d));
}

function de_morgan_b(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
  return !(!a || !b) || (c && !d);
}

function de_morgan_c(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
  return (a && b) || (c && !d);
}

function de_morgan_d(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
  return (a && b) && (!c || d);
}

const a = false;
const b = true;
const c = true;
const d = true;

console.log(de_morgan_a(a, b, c, d));
console.log(de_morgan_b(a, b, c, d));
console.log(de_morgan_c(a, b, c, d));
console.log(de_morgan_d(a, b, c, d));
